import { createFileRoute, notFound } from "@tanstack/react-router";
import ServiceDetailPage from "../pages/ServiceDetailPage";
import { getService } from "../data/services";
import { pageHead, serviceFaqSchema, serviceSchema } from "../lib/seo";

export const Route = createFileRoute("/high-end-appliances/$slug")({
  beforeLoad: ({ params }) => {
    if (!getService("high-end-appliances", params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const service = getService("high-end-appliances", params.slug);
    if (!service) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${service.title} in Pingree Grove, IL | Advance Thermo Care`;
    const path = `/high-end-appliances/${params.slug}`;
    return {
      ...pageHead({ title, description: service.short, path, type: "article" }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(serviceSchema(service, path)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(serviceFaqSchema(service)),
        },
      ],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return <ServiceDetailPage categorySlug="high-end-appliances" slug={slug} />;
}
