import { MapPin, Clock, Phone } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { Reveal } from "./Reveal";
import Button from "./Button";

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-surface py-20 lg:py-28">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">Service Area</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.1] sm:text-4xl">
            Serving {siteConfig.serviceArea}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Locally based and locally dispatched. Most service calls inside our coverage area are
            scheduled same-day or next-day, subject to availability during business hours.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {siteConfig.areasServed.map((a) => (
              <li
                key={a}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium"
              >
                {a}
              </li>
            ))}
          </ul>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-sm font-bold">Location</dt>
                <dd className="text-sm text-muted-foreground">{siteConfig.address}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-sm font-bold">Availability</dt>
                <dd className="text-sm text-muted-foreground">{siteConfig.availability}</dd>
              </div>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">Schedule Service</Button>
            <Button href={siteConfig.phoneHref} variant="outline">
              <Phone className="h-4 w-4" aria-hidden="true" /> {siteConfig.phone}
            </Button>
          </div>
        </Reveal>


<Reveal delay={0.1}>
  <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
    <iframe
      title="Advance Thermo Care Location - Pingree Grove, Illinois"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.31368877749!2d-88.44145092544585!3d42.10075215144696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f1707167d467d%3A0x1a62b8fb942f82d2!2s1331%20Sedona%20Dr%2C%20Pingree%20Grove%2C%20IL%2060140%2C%20USA!5e0!3m2!1sen!2s!4v1794518950428!5m2!1sen!2s"
      className="h-[20rem] w-full border-0 lg:h-[26rem]"
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  </div>
</Reveal>

      </div>
    </section>
  );
}

export default ServiceArea;
