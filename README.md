# 🎨 PixelFreight Studio Website

The official website for PixelFreight - a creative digital studio specializing in modern web experiences, design systems, and digital solutions.

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fpixelfreight.com)](https://pixelfreight.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

## 🚀 Live Demo

- **Production:** [pixelfreight.com](https://pixelfreight.com)
- **Staging:** [staging-pixelfreight.vercel.app](https://staging-pixelfreight.vercel.app)

## 📋 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Performance](#performance)

## 🎯 About

PixelFreight's main website serves as our digital portfolio and business front, showcasing our capabilities in:

- **Web Development** - Modern, performant web applications
- **UI/UX Design** - User-centered design solutions
- **Brand Identity** - Visual identity and brand systems
- **Digital Strategy** - Comprehensive digital solutions

The website demonstrates our technical expertise while providing an engaging user experience that reflects our design philosophy.

## ⚡ Tech Stack

### Core Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://reactjs.org/)** - Component-based UI library

### Styling & Animation
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[GSAP](https://greensock.com/gsap/)** - Professional animation library
- **[Framer Motion](https://www.framer.com/motion/)** - React animation library (optional)

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Lint-staged](https://github.com/okonet/lint-staged)** - Run linters on staged files

### Deployment & Hosting
- **[Vercel](https://vercel.com/)** - Deployment platform
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring

## ✨ Features

### 🎨 Design & UX
- **Responsive Design** - Mobile-first approach
- **Dark/Light Mode** - Theme switching capability
- **Smooth Animations** - GSAP-powered micro-interactions
- **Accessibility** - WCAG 2.1 AA compliant
- **Performance Optimized** - Core Web Vitals optimized

### 🛠 Technical Features
- **Server-Side Rendering** - SEO and performance optimized
- **Image Optimization** - Next.js Image component
- **Font Optimization** - Self-hosted fonts with fallbacks
- **SEO Optimized** - Meta tags, structured data, sitemap
- **Analytics Ready** - Google Analytics 4 integration

### 📱 Content Sections
- **Hero Section** - Dynamic introduction with animations
- **Portfolio Showcase** - Interactive project gallery
- **Services Overview** - Capabilities and offerings
- **About Section** - Studio story and team
- **Contact Form** - Integrated contact system
- **Blog/Insights** - Content management (optional)

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** or **pnpm**
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/pixelfreight-website.git
   cd pixelfreight-website
   ```

2. **Install dependencies:**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME="PixelFreight"
   
   # Analytics (optional)
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   
   # Contact Form (optional)
   EMAILJS_SERVICE_ID=your-emailjs-service-id
   EMAILJS_TEMPLATE_ID=your-emailjs-template-id
   EMAILJS_PUBLIC_KEY=your-emailjs-public-key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript type checking

# Testing (if implemented)
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode

# Utilities
npm run analyze      # Analyze bundle size
npm run clean        # Clean build files
```

### Development Workflow

1. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes:**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

5. **Push and create a pull request**

### GSAP Integration

GSAP animations are organized in the `lib/animations/` directory:

```typescript
// Example animation usage
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fade in animation
export const fadeInUp = (element: string | Element) => {
  gsap.fromTo(element, 
    { y: 50, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8,
      ease: "power2.out"
    }
  );
};
```

### Tailwind Configuration

Custom configuration in `tailwind.config.js`:

```javascript
// Custom colors, fonts, and utilities
theme: {
  extend: {
    colors: {
      brand: {
        50: '#f0f9ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'slide-up': 'slideUp 0.6s ease-out',
    }
  }
}
```

## 📁 Project Structure

```
pixelfreight-website/
├── 📁 public/                 # Static assets
│   ├── 📁 images/            # Image assets
│   ├── 📁 icons/             # Icon files
│   └── 📁 fonts/             # Self-hosted fonts
├── 📁 src/
│   ├── 📁 app/               # Next.js App Router
│   │   ├── 📁 (routes)/      # Route groups
│   │   ├── 📁 api/           # API routes
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   ├── 📁 components/        # React components
│   │   ├── 📁 ui/            # Reusable UI components
│   │   ├── 📁 sections/      # Page sections
│   │   ├── 📁 forms/         # Form components
│   │   └── 📁 layout/        # Layout components
│   ├── 📁 lib/               # Utility libraries
│   │   ├── 📁 animations/    # GSAP animations
│   │   ├── 📁 utils/         # Helper functions
│   │   └── 📁 constants/     # App constants
│   ├── 📁 hooks/             # Custom React hooks
│   ├── 📁 types/             # TypeScript definitions
│   └── 📁 styles/            # Additional styles
├── 📁 content/               # Content files (MDX, JSON)
├── .env.example              # Environment variables template
├── .env.local                # Local environment variables
├── .eslintrc.json            # ESLint configuration
├── .gitignore                # Git ignore rules
├── .prettierrc               # Prettier configuration
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

### Key Directories

| Directory | Purpose |
|-----------|---------|
| `src/app/` | Next.js App Router pages and layouts |
| `src/components/` | Reusable React components |
| `src/lib/animations/` | GSAP animation definitions |
| `src/hooks/` | Custom React hooks |
| `src/types/` | TypeScript type definitions |
| `public/` | Static assets served directly |
| `content/` | Content files (portfolio items, blog posts) |

## 🚢 Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to Vercel when changes are pushed to:
- **`main` branch** → Production deployment
- **`develop` branch** → Staging deployment

### Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   npx vercel --prod
   ```

### Environment Variables

Set these in your deployment platform:

```env
# Production
NEXT_PUBLIC_SITE_URL=https://pixelfreight.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact form
EMAILJS_SERVICE_ID=service_xxxxxxx
EMAILJS_TEMPLATE_ID=template_xxxxxxx
EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Code Standards

- **TypeScript** - Use strict typing
- **ESLint + Prettier** - Follow configured rules
- **Conventional Commits** - Use semantic commit messages
- **Component Structure** - Follow established patterns

### Commit Convention

```bash
feat: add new feature
fix: resolve bug
docs: update documentation
style: code style changes
refactor: code refactoring
test: add or update tests
chore: maintenance tasks
```

### Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request
6. Wait for review and approval

## ⚡ Performance

### Current Metrics

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:**
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1

### Optimization Techniques

- **Image Optimization** - Next.js Image component with WebP
- **Font Optimization** - Self-hosted fonts with `font-display: swap`
- **Code Splitting** - Automatic route-based splitting
- **Bundle Analysis** - Regular bundle size monitoring
- **Caching Strategy** - Optimized cache headers

### Bundle Analysis

```bash
npm run analyze
```

This generates a bundle analysis report to identify optimization opportunities.

## 📄 License

This project is proprietary and confidential. All rights reserved by PixelFreight Studio.

## 📞 Support

For questions or support:

- **Email:** hello@pixelfreight.com
- **Website:** [pixelfreight.com](https://pixelfreight.com)
- **Documentation:** [docs.pixelfreight.com](https://docs.pixelfreight.com)

## 🙏 Acknowledgments

- Design inspiration from leading digital agencies
- Animation techniques from GSAP community
- Performance optimization from Next.js best practices
- Accessibility guidelines from WCAG standards

---

**Built with ❤️ by the PixelFreight team**

*Last updated: June 13, 2024*