alter table public.contact_requests
  add column if not exists notification_email_status text not null default 'pending'
    check (notification_email_status in ('pending', 'sent', 'failed')),
  add column if not exists customer_email_status text not null default 'pending'
    check (customer_email_status in ('pending', 'sent', 'failed')),
  add column if not exists notification_email_sent_at timestamptz,
  add column if not exists customer_email_sent_at timestamptz;