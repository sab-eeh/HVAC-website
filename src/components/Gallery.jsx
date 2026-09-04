import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";
import heroTech from "../assets/hero image.png";
import outdoorService from "../assets/hero image1.jpg";
import installCrew from "../assets/process.jpg";
import premiumAppliances from "../assets/appliances.jpg";
import refrigerationDetail from "../assets/detail.jpg";
import image4 from "../assets/image 4.jpeg";
import image5 from "../assets/image 5.jpeg";
import image6 from "../assets/image 6.jpeg";
import image7 from "../assets/image 7.jpeg";

const images = [
  {
    src: heroTech,
    alt: "Technician repairing an outdoor HVAC unit on a rooftop",
    span: "sm:col-span-2 md:col-span-2 md:row-span-2",
    width: 1600,
    height: 1067,
  },
  {
    src: outdoorService,
    alt: "HVAC technician servicing an air conditioner condenser beside a home",
    span: "sm:col-span-1",
    width: 1600,
    height: 1067,
  },
  {
    src: installCrew,
    alt: "HVAC installation team fitting ductwork in a new construction space",
    span: "sm:col-span-1",
    width: 1600,
    height: 1067,
  },
  {
    src: premiumAppliances,
    alt: "Luxury kitchen with premium built-in appliances and clean cabinetry",
    span: "sm:col-span-2 md:col-span-2",
    width: 1600,
    height: 1067,
  },
  {
    src: image4,
    alt: "HVAC image",
    span: "sm:col-span-1 md:col-span-1",
    width: 1600,
    height: 1067,
  },
  {
    src: image5,
    alt: "microwave and oven installation",
    span: "sm:col-span-1 md:col-span-1",
    width: 1600,
    height: 1067,
  },
  {
    src: image6,
    alt: "appliance installation",
    span: "sm:col-span-1 md:col-span-1",
    width: 1600,
    height: 1067,
  },
  {
    src: image7,
    alt: "Appliance installation",
    span: "sm:col-span-1 md:col-span-1",
    width: 1600,
    height: 1067,
  },
];

export function Gallery() {
  const [active, setActive] = useState(null);
  const openerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      openerRef.current?.focus();
    };
  }, [active]);

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Work"
          title="Clean installs and dependable service work"
          text="A curated look at the kind of HVAC, refrigeration and appliance projects we take pride in delivering."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[240px]">
          {images.map((img) => (
            <RevealItem key={img.alt} className={img.span ?? "sm:col-span-1"}>
              <button
                type="button"
                aria-label={`View larger image: ${img.alt}`}
                onClick={(event) => {
                  openerRef.current = event.currentTarget;
                  setActive(img);
                }}
                className="group block h-full w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={img.width}
                  height={img.height}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-dialog-title"
            onClick={(event) => event.target === event.currentTarget && setActive(null)}
          >
            <h2 id="gallery-dialog-title" className="sr-only">
              Enlarged image: {active.alt}
            </h2>
            <button
              type="button"
              onClick={() => setActive(null)}
              ref={closeRef}
              aria-label="Close image"
              className="absolute right-5 top-5 rounded-md border border-ink-foreground/25 bg-white/5 p-2 text-ink-foreground backdrop-blur-sm"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              src={active.src}
              alt={active.alt}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
