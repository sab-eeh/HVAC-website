import { motion } from "framer-motion";
import { Phone, ShieldCheck, Clock, Star } from "lucide-react";

import heroImg from "../assets/hero image1.jpg";

import { siteConfig } from "../data/siteConfig";

import Button from "./Button";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-foreground text-white sm:min-h-[720px] lg:min-h-[760px]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          width={1200}
          height={630}
          fetchPriority="high"
          className="h-full w-full object-cover object-[68%_center] sm:object-[70%_center] lg:object-[72%_center]"
        />
      </div>

      {/* Main dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/45" />

      {/* Stronger overlay on the left for text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/10 via-black/10 to-black/10" />

      {/* Subtle bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/45 to-transparent" />

      <div className="container-x relative flex min-h-[680px] items-center py-20 sm:min-h-[720px] lg:min-h-[760px] lg:py-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
          className="w-full max-w-6xl"
        >
          <motion.p variants={item} className="eyebrow !text-primary">
            {siteConfig.serviceArea}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 max-w-6xl text-[2.7rem] font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-[4rem]"
          >
            HVAC, Refrigeration & Appliance Repair in Pingree Grove, IL
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Professional HVAC repair, heating and cooling service, refrigeration repair,
            and high-end appliance repair in Pingree Grove, IL and surrounding areas.
            Backed by {siteConfig.yearsExperience}+ years of experience with precise
            diagnostics, honest recommendations and reliable workmanship.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button to="/contact" size="lg">
              Schedule Service
            </Button>

            <Button
              href={siteConfig.phoneHref}
              variant="outline"
              size="lg"
              className="border-white/50 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {siteConfig.phone}
            </Button>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-white/90"
          >
            <li className="flex items-center gap-2">
              <ShieldCheck
                className="h-4 w-4 text-primary"
                aria-hidden="true"
              />
              Licensed & insured
            </li>

            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              {siteConfig.availability}
            </li>

            <li className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" aria-hidden="true" />
              5-star rated locally
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;