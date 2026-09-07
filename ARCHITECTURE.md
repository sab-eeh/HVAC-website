# Architecture

## Contact requests

The contact request flow is:

Browser -> `ContactForm` -> client validation -> TanStack Start server function -> server validation -> normalization -> Supabase persistence -> owner notification email -> customer confirmation email -> email status tracking

The request is written to `contact_requests` before either email is attempted. Supabase is the source of truth. Email delivery is best-effort: an email failure records `failed` status and never deletes the saved request or changes a successful request into a client-visible submission failure.

## Email infrastructure

SMTP is server-only and is configured through environment variables. The sending mailbox is `service@advancethermocare.com`; `CONTACT_NOTIFICATION_EMAIL` supplies the internal recipient. The customer's validated email is used as `Reply-To` for the owner notification. The customer confirmation replies to the sending mailbox.

Email templates include both HTML and plain-text alternatives. Customer-controlled values are escaped before HTML rendering, and customer names are normalized before being used in subjects. There is no public email test endpoint or admin URL in the application.

Production SMTP and Supabase environment variables must be configured in Vercel. SMTP credentials must never use `VITE_` variables, be committed to Git, or be sent to the browser.

Server logs contain only safe event names and request IDs. Customer names, email addresses, phone numbers, messages, request bodies, SMTP credentials, and provider diagnostics are not logged.