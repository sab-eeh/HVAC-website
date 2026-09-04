import { createFileRoute } from "@tanstack/react-router";
import ServiceCategoryPage from "../pages/ServiceCategoryPage";
import { getCategory } from "../data/services";
import { pageHead } from "../lib/seo";

const cat = getCategory("high-end-appliances");
const title = `${cat.title} Services in Pingree Grove, IL | Advance Thermo Care`;
const description = cat.short;

export const Route = createFileRoute("/high-end-appliances/")({
  head: () => pageHead({ title, description, path: "/high-end-appliances" }),
  component: () => <ServiceCategoryPage categorySlug="high-end-appliances" />,
});
