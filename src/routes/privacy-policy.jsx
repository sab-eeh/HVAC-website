
import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "../lib/seo";

const title = "Privacy Policy | Advance Thermo Care";
const description =
  "Learn how Advance Thermo Care collects, uses and protects information submitted through its website.";

function PrivacyPolicy() {
  return (
    <main className="container-x py-12 lg:py-16">
      <article className="mx-auto max-w-4xl">
        <p className="eyebrow">LEGAL INFORMATION</p>
        <h1 className="mt-3 text-4xl font-bold">Privacy Policy</h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Effective date: November 13, 2026
        </p>

        <p className="mt-6 leading-relaxed text-muted-foreground">
          Advance Thermo Care respects your privacy. This policy explains
          how we collect, use and protect information when you visit our
          website or request our HVAC, refrigeration or appliance repair
          services.
        </p>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold">1. Information We Collect</h2>
            <p className="mt-2 text-muted-foreground">
              When you submit a service request, we may collect your name,
              phone number, email address, ZIP code, requested service,
              preferred appointment date and time, and description of
              the problem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">2. How We Use Your Information</h2>
            <p className="mt-2 text-muted-foreground">
              We use this information to respond to enquiries, contact you
              about service requests, confirm appointment availability,
              provide customer support and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">3. Sharing of Information</h2>
            <p className="mt-2 text-muted-foreground">
              We do not sell personal information. We may share necessary
              information with service providers that help us store
              service requests, operate our website and deliver emails.
              Information may also be disclosed when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">4. Cookies and Third-Party Services</h2>
            <p className="mt-2 text-muted-foreground">
              Our website may use third-party services, including embedded
              Google Maps. These services may collect technical information
              or use cookies according to their own privacy policies.
              Advertising measurement technologies may also be used when
              enabled. You can manage cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">5. Data Storage and Security</h2>
            <p className="mt-2 text-muted-foreground">
              Information submitted through our contact form may be stored
              electronically and used to notify our business about your
              service request. We use reasonable safeguards to protect
              this information, although no electronic storage or
              transmission method is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">6. Data Retention</h2>
            <p className="mt-2 text-muted-foreground">
              We retain personal information for as long as reasonably
              necessary to respond to enquiries, provide services,
              maintain business records and meet legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">7. Your Privacy Choices</h2>
            <p className="mt-2 text-muted-foreground">
              You may contact us to request access to, correction of or
              deletion of personal information you have provided, subject
              to applicable laws and recordkeeping requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">8. Children's Privacy</h2>
            <p className="mt-2 text-muted-foreground">
              Our website is intended for people seeking repair services.
              We do not knowingly collect personal information directly
              from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">9. Changes to This Policy</h2>
            <p className="mt-2 text-muted-foreground">
              We may update this policy when our services or data practices
              change. Updates will be published on this page with a
              revised effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">10. Contact Us</h2>
            <p className="mt-2 text-muted-foreground">
              For privacy questions or requests, contact:
            </p>
            <div className="mt-3 space-y-2">
              <p><strong>Advance Thermo Care</strong></p>
              <p>
                Email:{" "}
                <a className="text-primary hover:underline"
                   href="mailto:service@advancethermocare.com">
                  service@advancethermocare.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a className="text-primary hover:underline"
                   href="tel:+17089819065">
                  (708) 981-9065
                </a>
              </p>
              <p>
                Address: 1331 Sedona Dr, Pingree Grove, IL 60140, USA
              </p>
              <p>Website: https://www.advancethermocare.com/</p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

export const Route = createFileRoute("/privacy-policy")({
  head: () => pageHead({ title, description, path: "/privacy-policy" }),
  component: PrivacyPolicy,
});
