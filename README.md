# Harmand — Jewelry Store

A full-stack e-commerce site for a Paris-based haute joaillerie atelier. Includes a public storefront and a private admin dashboard, with automatic English/French translation.

## Tech Stack

**Frontend:** React (Vite), React Router, Tailwind CSS
**Backend:** Node.js, Express, MongoDB (Mongoose)
**Auth:** JWT, bcrypt
**Image hosting:** Supabase Storage
**Translation:** DeepL API

## Features

- Public storefront with product catalog, category filtering, and product detail pages
- Admin dashboard with login, product CRUD, image upload, and live search
- Automatic French translation of product content on save
- Fully responsive, bilingual UI (EN/FR)

## Getting Started

### Backend
```bash
cd server
npm install
```
Create a `.env` file in `server/` based on `.env.example`, then:
```bash
npm run dev
```

### Frontend
```bash
cd client
npm install
npm run dev
```

## Project Structure
```
jewelry-store/
  client/   → React frontend
  server/   → Express API
```