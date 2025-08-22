# Integrate Strong LLC - Personal Training Website

A modern, responsive React website for Integrate Strong LLC, an in-home personal training business specializing in fitness for middle-aged adults and seniors.

## Features

- **Modern Single Page Application**: Built with React and Vite for fast performance
- **Dark Theme**: Professional dark color palette optimized for accessibility
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Smooth Navigation**: Single-page design with smooth scrolling between sections
- **Professional Styling**: Built with Tailwind CSS for modern, clean aesthetics

## Sections

1. **Hero/Intro Section**: Compelling introduction with key benefits
2. **Services Section**: Details about training offerings (strength, balance, general fitness, etc.)
3. **Pricing Section**: Transparent pricing for session packages (12, 24, 36 sessions)
4. **About Section**: Information about the trainer's experience and credentials

## Technology Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Modern JavaScript (ES6+)**: Clean, maintainable code

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository or download the project files
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

The build files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`. The main colors are:

- **Primary**: Dark blue/slate tones for backgrounds
- **Accent**: Amber/orange tones for highlights and CTAs
- **Text**: Light grays and whites for readability

### Content

All content can be easily modified by editing the component files in `/src/components/`:

- `Hero.jsx` - Main landing section
- `Services.jsx` - Training services offered
- `Pricing.jsx` - Pricing packages and details
- `About.jsx` - Trainer information and credentials
- `Navigation.jsx` - Site navigation
- `Footer.jsx` - Footer content and links

### Contact Information

Update contact information in:
- `About.jsx` - Contact details in the about section
- `Footer.jsx` - Footer contact information
- `Pricing.jsx` - Contact links in pricing CTAs

## Deployment

This project can be deployed to any static hosting service:

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Host directly from your GitHub repository
- **Traditional Web Hosting**: Upload the contents of the `dist` folder

## Browser Support

This website supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For questions about this website, contact: info@integratestrong.com

---

Built with care for Integrate Strong LLC