import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "../lib/seo";

const title =
  "HVAC & Appliance Repair Service Areas | Advance Thermo Care";

const description =
  "Advance Thermo Care provides HVAC repair, furnace and AC service, refrigeration repair and high-end appliance repair throughout Pingree Grove and surrounding Illinois communities.";

const cities = [
  "Pingree Grove, IL",
  "Barrington, IL",
  "Addison, IL",
  "Algonquin, IL",
  "Bartlett, IL",
  "Streamwood, IL",
  "Bloomingdale, IL",
  "Carpentersville, IL",
  "Dundee, IL",
  "Elgin, IL",
  "Hanover Park, IL",
  "Geneva, IL",
  "Gilberts, IL",
  "Hampshire, IL",
  "Huntley, IL",
  "Lake in the Hills, IL",
  "Medinah, IL",
  "Hoffman Estates, IL",
  "Roselle, IL",
  "St. Charles, IL",
  "South Elgin, IL",
  "Wasco, IL",
  "Wayne, IL",
  "Carol Stream, IL",
  "Wood Dale, IL",
  "Batavia, IL",
  "Burlington, IL",
"Genoa, IL",
"Marengo, IL",
"Sycamore, IL",
"Union, IL",
"Campton Hills, IL",
];

function ServiceAreasPage() {
  return (
    <main className="bg-[#f8f6f1] text-[#17130f]">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="container-x py-20 sm:py-24 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Service Areas
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            HVAC, Refrigeration & Appliance Repair Service Areas
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-black/65">
            Advance Thermo Care provides professional HVAC repair, heating and
            cooling service, refrigeration repair and high-end appliance repair
            from our Pingree Grove, Illinois location to surrounding communities.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Schedule Service
            </Link>

            <a
              href="tel:+17089819065"
              className="rounded-lg border border-black/20 bg-white px-6 py-3 font-semibold transition hover:bg-black/5"
            >
              Call 708 981 9065
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-x py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Local Home Services
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Repair & Service Across Our Illinois Coverage Area
          </h2>

          <p className="mt-5 leading-relaxed text-black/65">
            We help homeowners and businesses with heating, cooling,
            refrigeration and premium appliance systems. Service availability
            may vary by location and scheduling.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Link
            to="/hvac"
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-bold">HVAC Services</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              Furnace repair, AC repair, heat pumps, ductwork, thermostats,
              maintenance and HVAC troubleshooting.
            </p>
          </Link>

          <Link
            to="/refrigeration"
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-bold">Refrigeration Repair</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              Refrigerators, walk-in coolers, condensers, evaporators and other
              commercial and residential refrigeration systems.
            </p>
          </Link>

          <Link
            to="/high-end-appliances"
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-bold">High-End Appliance Repair</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              Professional service for premium brands including Sub-Zero,
              Viking, Thermador, Wolf and KitchenAid.
            </p>
          </Link>
        </div>
      </section>

      {/* Cities */}
      <section className="border-y border-black/10 bg-white">
        <div className="container-x py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Areas We Serve
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Serving Pingree Grove & Surrounding Communities
            </h2>

            <p className="mt-5 leading-relaxed text-black/65">
              Our primary service area includes Pingree Grove and communities
              throughout Chicago's northwest and western suburbs.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {cities.map((city) => (
              <div
                key={city}
                className="rounded-xl border border-black/10 bg-[#f8f6f1] px-4 py-3 text-sm font-medium"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="container-x py-16 sm:py-20">
        <div className="rounded-3xl bg-[#17130f] px-6 py-10 text-white sm:px-10 lg:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Advance Thermo Care
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
            Need HVAC, Refrigeration or Appliance Service?
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-white/70">
            Based at 1331 Sedona Dr, Pingree Grove, IL 60140. Contact us to
            confirm service availability for your location and schedule an
            appointment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Schedule Service
            </Link>

            <a
              href="tel:+17089819065"
              className="rounded-lg border border-white/25 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Call 708 981 9065
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const Route = createFileRoute("/service-areas")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/service-areas",
    }),
  component: ServiceAreasPage,
});