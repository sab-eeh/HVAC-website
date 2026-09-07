import { createServerFn } from "@tanstack/react-start";
import { contactRequestSchema } from "./validation/contact";

export const submitContactRequest = createServerFn({ method: "POST" })
  .validator((data) => data)
  .handler(async ({ data }) => {
    const validation = contactRequestSchema.safeParse(data);
    if (!validation.success) {
      return {
        success: false,
        error: "Please check the form and try again.",
        fieldErrors: validation.error.flatten().fieldErrors,
      };
    }

    const request = normalizeContactRequest(validation.data);

    try {
      const [
        { insertContactRequest, updateContactEmailStatus },
        { sendOwnerNotification, sendCustomerConfirmation },
      ] = await Promise.all([
        import("../server/contact/repository"),
        import("../server/contact/email"),
      ]);
      const requestId = await insertContactRequest(request);
      console.info("Contact request created", requestId);

      try {
        await sendOwnerNotification(request);
        await safelyUpdateEmailStatus(
          updateContactEmailStatus,
          requestId,
          "notification_email",
          "sent",
        );
        console.info("Owner notification sent", requestId);
      } catch {
        await safelyUpdateEmailStatus(
          updateContactEmailStatus,
          requestId,
          "notification_email",
          "failed",
        );
        console.info("Owner notification failed", requestId);
      }

      try {
        await sendCustomerConfirmation(request);
        await safelyUpdateEmailStatus(
          updateContactEmailStatus,
          requestId,
          "customer_email",
          "sent",
        );
        console.info("Customer confirmation sent", requestId);
      } catch {
        await safelyUpdateEmailStatus(
          updateContactEmailStatus,
          requestId,
          "customer_email",
          "failed",
        );
        console.info("Customer confirmation failed", requestId);
      }

      return { success: true };
    } catch (error) {
      if (error instanceof Error && error.message === "Contact request persistence failed") {
        console.error("Contact request persistence failed:", error.message);
      }
      return {
        success: false,
        error: "Something went wrong while sending your request. Please try again.",
      };
    }
  });

function normalizeContactRequest(data) {
  return {
    name: data.name,
    phone: data.phone.replace(/\s+/g, " "),
    email: data.email.toLowerCase(),
    service: data.service,
    requested_date: data.date ?? null,
    requested_time: data.time ?? null,
    message: data.message ?? null,
  };
}

async function safelyUpdateEmailStatus(updateContactEmailStatus, requestId, field, status) {
  try {
    await updateContactEmailStatus(requestId, field, status);
  } catch {
    console.info("Contact email status update failed", requestId);
  }
}
