# Sofaliving — Next.js + JavaScript + Tailwind CSS

A responsive furniture storefront inspired by the supplied Sofaliving reference design.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production build
```bash
npm run build
npm start
```

## Consultation email setup
The consultation form validates input in the browser and sends it to `/api/consultation`.
To email requests, create a Resend account and add these environment variables to `.env.local`:

```env
RESEND_API_KEY=re_your_key
RESEND_FROM_EMAIL=Sofaliving <bookings@your-verified-domain.com>
CONSULTATION_TO_EMAIL=you@example.com
```

The sender domain must be verified with Resend. Without these variables, the API returns a clear configuration error instead of pretending that a request was saved.

## Before launch
- Replace the sample product names, prices, statistics and contact details with real business information.
- Replace demo Unsplash image URLs with licensed, optimized product photography that you own or are permitted to use.
- Configure a verified email sender and test form delivery.
- Add privacy, terms, returns, shipping and warranty pages appropriate to your business.
- Connect a database and order/payment provider if you intend to accept online orders. This starter is a storefront and inquiry experience, not a complete checkout system.
