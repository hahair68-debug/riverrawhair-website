# River Raw Hair - Next.js website starter

This is a deploy-ready starter for `riverrawhair.com` built with Next.js App Router.

## Pages included

- Home
- About Us
- Raw Hair
- Wigs
- Closures & Frontals
- Blog
- Contact

## Before publishing

Replace these placeholders with your real brand data:

1. WhatsApp number
2. Sales email
3. Office or factory address
4. Product photos
5. Factory photos and packing photos
6. Testimonials
7. Exact product specifications

## Local run

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Create a new GitHub repository
2. Upload this project to the repository
3. Import the repository into Vercel
4. Deploy
5. In Vercel, add your domain `riverrawhair.com`
6. Update the DNS records at your domain provider to point to Vercel

## Main files

- `app/page.tsx` - homepage
- `app/about/page.tsx`
- `app/raw-hair/page.tsx`
- `app/wigs/page.tsx`
- `app/closures/page.tsx`
- `app/blog/page.tsx`
- `app/contact/page.tsx`
- `app/globals.css` - all site styling
- `components/site-data.ts` - shared text content

## Fastest way to customize

Edit `components/site-data.ts` first.
That file controls most of the site text.
