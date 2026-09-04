import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/Home";
import { pageHead } from "../lib/seo";

const title = "Advance Thermo Care | HVAC, Refrigeration & Appliance Service";
const description =
  "Trusted HVAC, refrigeration and high-end appliance service in Pingree Grove, IL and surrounding areas. Schedule service during business hours.";

export const Route = createFileRoute("/")({
  head: () => pageHead({ title, description }),
  component: Home,
});
