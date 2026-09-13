Advance Thermo Care

A modern, production-ready website for Advance Thermo Care, providing HVAC, refrigeration, and high-end appliance services in Pingree Grove, Illinois.

Live Website: https://www.advancethermocare.com/

Overview

The website is designed with a premium, professional visual identity and a responsive, service-focused user experience.

It includes a complete service catalog, company information, contact functionality, SEO foundations, accessible navigation, and an integrated service-request workflow.

Services

HVAC

Furnaces

Air Conditioners

Heat Pumps & Ductwork

Thermostats

Refrigeration

Condenser

Evaporator

Walk-In Coolers

Free-Standing Refrigerators

Wine Coolers

High-End Appliances

Sub-Zero

Viking

Thermador

Wolf

KitchenAid

Key Features

Premium responsive UI

20 public routes

Data-driven service pages

Responsive navigation and service menu

Service request form

Supabase request storage

Automated business and customer emails

SEO metadata

Accessibility-focused components

Responsive image handling

Subtle Framer Motion animations

Vercel deployment support

Tech Stack

Technology

Purpose

React

UI

Vite

Build & development

JavaScript / JSX

Application code

Tailwind CSS

Styling

TanStack Router

Routing

TanStack Start

Server functions

Framer Motion

Animation

Lucide React

Icons

Supabase

Database

Nodemailer

Email delivery

Vercel

Deployment

Architecture

The application uses a reusable, data-driven structure rather than separate layouts for every service.

src/
├── components/
├── data/
├── pages/
├── server/
└── lib/

Core content is centralized in:

src/data/
├── siteConfig.js
├── services.js
├── brands.js
└── testimonials.js

Service category and detail pages use reusable templates, keeping the application consistent and easy to maintain.

Routes

The website contains 20 public routes covering:

Homepage

About

Contact

HVAC

Refrigeration

High-End Appliances

Individual HVAC services

Individual refrigeration services

Individual appliance brands

Contact & Email

Service requests are securely processed through the server and stored in Supabase.

The system supports:

Request validation

Request persistence

Business notification emails

Customer confirmation emails

Email delivery status tracking

Business email:

service@advancethermocare.com

Local Development

Requirements

Node.js

npm or Bun

Git

Installation

git clone <repository-url>
cd precision-pro-services
npm install

Development

npm run dev

Production Build

npm run build

Lint

npm run lint

Environment Variables

Create a .env file containing the required server-side configuration:

SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=service@advancethermocare.com
SMTP_PASSWORD=your_titan_email_password

CONTACT_NOTIFICATION_EMAIL=your_business_email

Never commit .env files or production credentials to the repository.

Deployment

The production website is deployed through Vercel with the custom domain:

https://www.advancethermocare.com/

Production environment variables must be configured in Vercel before deploying.

Business Information

Advance Thermo Care
1331 Sedona Dr, Pingree Grove, IL 60140
Phone: 708 981 9065
Email: service@advancethermocare.com

Project Status

Production Ready

The website, service catalog, responsive interface, contact-request system, database integration, transactional email workflow, SEO foundations, and production deployment are in place.
