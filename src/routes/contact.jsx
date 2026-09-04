import { createFileRoute } from "@tanstack/react-router";
import Contact from "../pages/Contact";
import { pageHead } from "../lib/seo";

const title = "Contact & Schedule Service | Advance Thermo Care";
const description =
  "Request HVAC, refrigeration or appliance service in Pingree Grove, IL. Call 708 981 9065 or book online during business hours.";

export const Route = createFileRoute("/contact")({
  head: () => pageHead({ title, description, path: "/contact" }),
  component: Contact,
});
