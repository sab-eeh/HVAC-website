import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/Home";
import { pageHead } from "../lib/seo";

const title =
  "HVAC & Appliance Repair in Pingree Grove, IL | Advance Thermo Care";

const description =
  "HVAC, refrigeration and high-end appliance repair in Pingree Grove, IL and nearby areas. Reliable diagnostics, repairs and professional service.";

export const Route = createFileRoute("/")({
  head: () => pageHead({ title, description }),
  component: Home,
});
