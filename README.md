# Palarity AB — Official Website

Official landing page for Palarity AB, an indie game studio based in Uppsala, Sweden. Features a countdown to Summer Sale 2026 and email subscription for updates.

🌐 **Live Site:** [https://www.palarity.dev](https://www.palarity.dev)

## Features

- ⏱️ **Live Countdown Timer** to Summer Sale 2026
- 📧 **Email Subscription** for launch updates and beta access
- 🎨 **Modern, Responsive Design** built with React
- 📊 **Google Analytics Integration** with cookie consent
- 🔗 **Social Links Modal** for contact information
- ⚡ **Fast Static Site** deployed on GitHub Pages

## Tech Stack

- **React** 18.3
- **Vite** 6.0 (build tool)
- **Lucide React** (icons)
- **React GA4** (analytics)
- **GitHub Pages** (hosting)

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Nicheen/PalarityDomain.git
cd PalarityDomain
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (if needed) for environment variables

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Project Structure

```
PalarityDomain/
├── public/
│   └── assets/          # Static assets (images, logos)
├── src/
│   ├── components/      # React components
│   │   ├── Countdown.jsx
│   │   ├── SocialModal.jsx
│   │   └── CookieConsent.jsx
│   ├── utils/          # Utility functions
│   │   └── analytics.js
│   ├── App.jsx         # Main app component
│   ├── App.css         # Styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
└── vite.config.js      # Vite configuration
```

## Building for Production

Build the project for production:

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

This command will:
1. Build the project (`npm run build`)
2. Deploy the `dist/` folder to the `gh-pages` branch
3. Update the live site at `https://www.palarity.dev`

**Note:** Make sure you have push access to the repository before deploying.

### Deployment Configuration

The site is configured to deploy to GitHub Pages with a custom domain. The deployment settings are in:
- `vite.config.js` — base URL configuration
- `CNAME` file in `public/` — custom domain settings

## SEO Optimization

The site includes comprehensive SEO features:
- Meta tags (description, keywords, robots)
- Open Graph tags for social media
- Twitter Card metadata
- JSON-LD structured data
- Canonical URLs
- Sitemap (if configured)
- Noscript fallback content

## Analytics

The site uses Google Analytics 4 (GA4) with:
- Cookie consent banner
- Event tracking for user interactions
- Page view tracking
- Privacy-respecting implementation

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run lint` | Run ESLint |

## Environment Variables

Create a `.env` file if you need to configure:
- `VITE_GA_TRACKING_ID` — Google Analytics tracking ID (if not hardcoded)
- Other API keys or configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a private project for Palarity AB. If you're part of the team:

1. Create a feature branch
2. Make your changes
3. Test locally with `npm run dev`
4. Build and verify with `npm run build && npm run preview`
5. Submit a pull request

## Updating Content

### Countdown Date
Edit the target date in `src/components/Countdown.jsx`

### Social Links
Update links in `src/components/SocialModal.jsx`

### Site Metadata
Update SEO tags in `index.html`

### Styles
Modify `src/App.css` for styling changes

## License

© 2024 Palarity AB. All rights reserved.

## Contact

- Website: [palarity.dev](https://www.palarity.dev)
- Location: Uppsala, Sweden

---

**Made with ❤️ by Palarity AB**