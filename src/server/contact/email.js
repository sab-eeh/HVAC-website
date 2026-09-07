import nodemailer from "nodemailer";

const BUSINESS_NAME = "Advance Thermo Care";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "service@advancethermocare.com";
const FROM_NAME = process.env.CONTACT_FROM_NAME || BUSINESS_NAME;
const BUSINESS_PHONE = "708 981 9065";
const BUSINESS_ADDRESS = "1331 Sedona Dr, Pingree Grove, IL 60140";
const BUSINESS_HOURS = ["Mon-Fri 7:00 AM-5:00 PM", "Sat 9:00 AM-2:00 PM", "Sunday Closed"];

let transporter;
let verificationPromise;

export async function sendOwnerNotification(request) {
  const notificationEmail = getRequiredEmailEnv("CONTACT_NOTIFICATION_EMAIL");
  const details = getRequestDetails(request);

  await sendMail({
    to: notificationEmail,
    replyTo: details.email,
    subject: `New Service Request - ${safeHeaderValue(details.name)}`,
    text: ownerText(details),
    html: ownerHtml(details),
  });
}

export async function sendCustomerConfirmation(request) {
  const details = getRequestDetails(request);

  await sendMail({
    to: details.email,
    replyTo: FROM_EMAIL,
    subject: "We've Received Your Service Request - Advance Thermo Care",
    text: customerText(details),
    html: customerHtml(details),
  });
}

async function sendMail({ to, replyTo, subject, text, html }) {
  const mailTransporter = await getTransporter();
  try {
    await mailTransporter.sendMail({
      from: { name: FROM_NAME, address: FROM_EMAIL },
      to,
      replyTo,
      subject,
      text,
      html,
    });
  } catch (error) {
    throw createEmailError("send_failed", error);
  }
}

async function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  if (!host || !Number.isInteger(port) || !user || !password) {
    throw createEmailError("configuration_missing");
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user, pass: password },
    });
  }

  if (!verificationPromise) {
    verificationPromise = transporter.verify().catch((error) => {
      verificationPromise = undefined;
      throw createEmailError("verification_failed", error);
    });
  }

  await verificationPromise;
  return transporter;
}

function getRequiredEmailEnv(name) {
  const value = process.env[name]?.trim();
  if (!value || !isEmail(value)) throw createEmailError("configuration_missing");
  return value;
}

function getRequestDetails(request) {
  return {
    name: request.name,
    phone: request.phone,
    email: request.email,
    service: request.service,
    date: request.requested_date,
    time: request.requested_time,
    message: request.message,
  };
}

function ownerHtml(details) {
  return layout(
    "New Service Request",
    `<h1 style="margin:0;color:#123047;font-family:Arial,sans-serif;font-size:26px;line-height:34px;">New Service Request</h1>
    <p style="margin:12px 0 0;color:#52616b;font-family:Arial,sans-serif;font-size:15px;line-height:24px;">A new request has been submitted through the Advance Thermo Care website.</p>
    ${section("Customer Information", [
      row("Name", details.name),
      row("Phone", details.phone),
      row("Email", details.email),
    ])}
    ${section("Service Information", [
      row("Requested Service", details.service),
      optionalRow("Requested Date", details.date),
      optionalRow("Requested Time", details.time),
    ])}
    ${details.message ? section("Customer Message", `<p style="margin:0;color:#243746;font-family:Arial,sans-serif;font-size:15px;line-height:24px;white-space:pre-wrap;">${escapeHtml(details.message)}</p>`) : ""}`,
  );
}

function customerHtml(details) {
  const requestRows = [
    row("Service", details.service),
    optionalRow("Requested Date", details.date),
    optionalRow("Requested Time", details.time),
  ].join("");

  return layout(
    `We've Received Your Service Request`,
    `<h1 style="margin:0;color:#123047;font-family:Arial,sans-serif;font-size:26px;line-height:34px;">We've received your service request</h1>
    <p style="margin:12px 0 0;color:#52616b;font-family:Arial,sans-serif;font-size:15px;line-height:24px;">Hi ${escapeHtml(details.name)},</p>
    <p style="margin:16px 0 0;color:#52616b;font-family:Arial,sans-serif;font-size:15px;line-height:24px;">Thank you for contacting Advance Thermo Care. We've received your service request and our team will review the details shortly.</p>
    ${section("Request Details", requestRows)}
    <p style="margin:24px 0 0;color:#52616b;font-family:Arial,sans-serif;font-size:15px;line-height:24px;">If you need to provide additional information, simply reply to this email or contact us directly.</p>`,
  );
}

function layout(title, content) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${escapeHtml(title)}</title></head><body style="margin:0;background:#f3f6f8;padding:24px 12px;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td align="center"><table role="presentation" width="100%" style="max-width:620px;background:#ffffff;border:1px solid #dbe4e9;border-radius:8px;overflow:hidden;" cellspacing="0" cellpadding="0" border="0"><tr><td style="background:#123047;padding:26px 32px;"><div style="color:#ffffff;font-family:Arial,sans-serif;font-size:18px;font-weight:bold;letter-spacing:1px;">${BUSINESS_NAME.toUpperCase()}</div></td></tr><tr><td style="padding:32px;">${content}</td></tr><tr><td style="border-top:1px solid #dbe4e9;padding:22px 32px;color:#52616b;font-family:Arial,sans-serif;font-size:13px;line-height:21px;">${BUSINESS_NAME}<br>${BUSINESS_PHONE}<br>${FROM_EMAIL}<br>${BUSINESS_ADDRESS}<br><br>${BUSINESS_HOURS.join("<br>")}</td></tr></table></td></tr></table></body></html>`;
}

function section(title, content) {
  return `<h2 style="margin:28px 0 12px;color:#123047;font-family:Arial,sans-serif;font-size:15px;line-height:22px;text-transform:uppercase;letter-spacing:1px;">${title}</h2><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top:1px solid #dbe4e9;">${content}</table>`;
}

function row(label, value) {
  return `<tr><td style="padding:11px 12px 11px 0;color:#52616b;font-family:Arial,sans-serif;font-size:14px;vertical-align:top;width:38%;">${label}</td><td style="padding:11px 0;color:#243746;font-family:Arial,sans-serif;font-size:14px;line-height:21px;word-break:break-word;">${escapeHtml(value)}</td></tr>`;
}

function optionalRow(label, value) {
  return value ? row(label, value) : "";
}

function ownerText(details) {
  return [
    BUSINESS_NAME.toUpperCase(),
    "NEW SERVICE REQUEST",
    "",
    "Customer Information",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Email: ${details.email}`,
    "",
    "Service Information",
    `Requested Service: ${details.service}`,
    details.date && `Requested Date: ${details.date}`,
    details.time && `Requested Time: ${details.time}`,
    details.message && `\nCustomer Message:\n${details.message}`,
    "",
    footerText(),
  ]
    .filter(Boolean)
    .join("\n");
}

function customerText(details) {
  return [
    `Hi ${details.name},`,
    "",
    "Thank you for contacting Advance Thermo Care. We've received your service request and our team will review the details shortly.",
    "",
    "REQUEST DETAILS",
    `Service: ${details.service}`,
    details.date && `Requested Date: ${details.date}`,
    details.time && `Requested Time: ${details.time}`,
    "",
    "If you need to provide additional information, simply reply to this email or contact us directly.",
    "",
    footerText(),
  ]
    .filter(Boolean)
    .join("\n");
}

function footerText() {
  return [BUSINESS_NAME, BUSINESS_PHONE, FROM_EMAIL, BUSINESS_ADDRESS, "", ...BUSINESS_HOURS].join(
    "\n",
  );
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function safeHeaderValue(value) {
  return (
    String(value ?? "")
      .replace(/[\r\n]+/g, " ")
      .replace(/[^\p{L}\p{N} .,'-]/gu, "")
      .trim()
      .slice(0, 100) || "Customer"
  );
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function createEmailError(code, cause) {
  const error = new Error(code);
  error.code = code;
  error.cause = cause;
  return error;
}
