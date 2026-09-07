import { getSupabaseServerClient } from "./supabase";

export async function insertContactRequest(request) {
  const { data, error } = await getSupabaseServerClient()
    .from("contact_requests")
    .insert(request)
    .select("id")
    .single();
  if (error) throw new Error("Contact request persistence failed");
  return data.id;
}

export async function updateContactEmailStatus(id, field, status) {
  const allowedFields = new Set(["notification_email", "customer_email"]);
  if (!allowedFields.has(field)) throw new Error("Invalid contact email status field");

  const update = {
    [`${field}_status`]: status,
    [`${field}_sent_at`]: status === "sent" ? new Date().toISOString() : null,
  };
  const { error } = await getSupabaseServerClient()
    .from("contact_requests")
    .update(update)
    .eq("id", id);
  if (error) throw new Error("Contact email status update failed");
}
