# 🚀 Deploy to Cloudflare Pages

## One-time setup (5 minutes)

### Option A: GitHub + Cloudflare Pages (Recommended — auto-deploys on push)

1. Push this folder to a GitHub repo
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/) → **Create a project** → **Connect to Git**
3. Select your repo
4. Set build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20`
5. Click **Save and Deploy** — done ✅

Your site will be live at `https://black-apex-consultancy.pages.dev`  
Every push to `main` auto-deploys.

---

### Option B: Wrangler CLI (Deploy directly from your machine)

```bash
# 1. Install Node.js 20+ and npm

# 2. Install Wrangler globally
npm install -g wrangler

# 3. Login to Cloudflare
wrangler login

# 4. Install project deps
npm install

# 5. Build + deploy in one command
npm run deploy
```

---

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build for production

```bash
npm run build
# Output in /dist — ready to upload anywhere
```

---

## What's optimised for Cloudflare

| Feature | Detail |
|---|---|
| **CDN caching** | Assets cached for 1 year (`immutable`) via `public/_headers` |
| **SPA routing** | `public/_redirects` sends all routes to `index.html` |
| **Security headers** | X-Frame-Options, CSP, Referrer-Policy set |
| **Code splitting** | React, Framer Motion, Lenis, icons in separate chunks |
| **Font preloading** | Google Fonts preconnect in `<head>` |
| **Image lazy loading** | All `<img>` tags use `loading="lazy"` |
| **Smooth scroll** | Lenis at 1.4s duration with custom easing |
| **Scroll progress bar** | Gold accent bar at top tracks page position |
| **Page loader** | Elegant fade-in after fonts load |
