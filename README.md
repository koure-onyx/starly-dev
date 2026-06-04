# STARLY Portfolio - Next.js Project

A modern, interactive portfolio website built with Next.js, featuring WebGL animations, typewriter effects, and glass morphism design.

## Features

- **Next.js 16** with TypeScript
- **Tailwind CSS 4** for styling
- **Three.js** for WebGL background animations
- **Interactive animations**: typewriter effect, magnetic buttons, scroll reveals
- **Glass morphism design** with backdrop blur effects
- **Responsive layout** with mobile optimization
- **Vercel deployment ready**

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── HeroSection.tsx      # Hero section with typewriter effect
│   ├── Navigation.tsx       # Navigation header
│   ├── WorkflowSection.tsx  # Workflow showcase section
│   ├── ProfileCard.tsx      # Profile sidebar card
│   ├── Footer.tsx          # Footer component
│   └── WebGLBackground.tsx # Three.js WebGL background
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd starly-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Install Three.js (if not automatically installed):
```bash
npm install three @types/three
```

### Running Locally

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project and deploy.

### Option 2: Git Integration

1. Push your code to a Git repository (GitHub, GitLab, etc.)

2. Connect to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will automatically detect it's a Next.js project
   - Deploy

### Option 3: Manual Deployment

1. Build your project:
```bash
npm run build
```

2. Create a `vercel.json` file (already included in this project)

3. Deploy the `.next` folder to Vercel

## Customization

### Colors and Theme

Edit the colors in `src/app/globals.css`:

```css
@theme {
  --color-primary-fixed: #60ff99;
  --color-teal-accent: #2DD4BF;
  /* ... other colors */
}
```

### Content

Update content in:
- `src/components/HeroSection.tsx` - Main hero text and CTAs
- `src/components/WorkflowSection.tsx` - Workflow steps
- `src/components/ProfileCard.tsx` - Profile information

### Images

Replace the profile image in `ProfileCard.tsx`:

```tsx
<img 
  src="/your-image.jpg" 
  alt="Your Name" 
  className="w-full h-full object-cover grayscale brightness-75" 
/>
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Troubleshooting

### Three.js Issues

If you encounter Three.js-related errors:

1. Ensure Three.js is installed:
```bash
npm install three @types/three
```

2. Check your TypeScript configuration in `tsconfig.json`

3. Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

### Build Errors

1. Run the build command to see detailed error messages:
```bash
npm run build
```

2. Check for missing dependencies or TypeScript errors

## License

© 2024 STARLY SYSTEMS. ALL RIGHTS RESERVED.