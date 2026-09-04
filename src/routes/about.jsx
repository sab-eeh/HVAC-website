import { createFileRoute } from "@tanstack/react-router";
import About from "../pages/About";
import { pageHead } from "../lib/seo";

const title = "About Advance Thermo Care | Pingree Grove, IL";
const description =
  "Technician-led HVAC, refrigeration and luxury appliance company serving Pingree Grove and the Fox Valley for more than 15 years.";

export const Route = createFileRoute("/about")({
  head: () => pageHead({ title, description, path: "/about" }),
  component: About,
});
