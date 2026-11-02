import { createFileRoute } from "@tanstack/react-router";
import ServiceCategoryPage from "../pages/ServiceCategoryPage";
import { getCategory } from "../data/services";
import { pageHead } from "../lib/seo";

const cat = getCategory("refrigeration");
const title = "Refrigeration Repair in Pingree Grove, IL | Advance Thermo Care";
const description = cat.short;

export const Route = createFileRoute("/refrigeration/")({
  head: () => pageHead({ title, description, path: "/refrigeration" }),
  component: () => <ServiceCategoryPage categorySlug="refrigeration" />,
});
