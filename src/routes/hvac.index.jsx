import { createFileRoute } from "@tanstack/react-router";
import ServiceCategoryPage from "../pages/ServiceCategoryPage";
import { getCategory } from "../data/services";
import { pageHead } from "../lib/seo";

const cat = getCategory("hvac");
const title = `${cat.title} Services in Pingree Grove, IL | Advance Thermo Care`;
const description = cat.short;

export const Route = createFileRoute("/hvac/")({
  head: () => pageHead({ title, description, path: "/hvac" }),
  component: () => <ServiceCategoryPage categorySlug="hvac" />,
});
