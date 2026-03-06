# Movrr Waitlist Design System Documentation

This document provides a comprehensive guide to the design system used in the Movrr Waitlist project. Use this as a reference when applying the same design system to other Movrr projects.

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Component Patterns](#component-patterns)
5. [Utility Classes](#utility-classes)
6. [Animations](#animations)
7. [Design Tokens](#design-tokens)
8. [Implementation Guide](#implementation-guide)

---

## Color System

The design system uses **OKLCH color space** for better color consistency and perceptual uniformity. The palette emphasizes bold minimalism with a vibrant green primary and energy orange accent.

### Primary Colors

```css
/* Brand Green - Primary Action Color */
--primary: oklch(0.669 0.1897 146.47); /* #23b245 - Movrr brand green */
--primary-foreground: oklch(1 0 0); /* Pure white */

/* Deep Black - Secondary/Contrast Color */
--secondary: oklch(0.15 0 0); /* Deep black for Nike-style contrast */
--secondary-foreground: oklch(1 0 0); /* Pure white */

/* Energy Orange - CTA/Accent Color */
--accent: oklch(0.65 0.18 45); /* #ff6b35 - Energy orange for CTAs */
--accent-foreground: oklch(1 0 0); /* Pure white */
```

### Neutral Colors

```css
/* Background & Surface */
--background: oklch(1 0 0); /* Pure white background */
--foreground: oklch(0.15 0 0); /* Deep black for maximum contrast */
--card: oklch(0.98 0.002 240); /* Light gray for cards */
--card-foreground: oklch(0.15 0 0);

/* Muted Colors */
--muted: oklch(0.96 0.002 240);
--muted-foreground: oklch(0.45 0.005 240); /* Urban gray */

/* Borders & Inputs */
--border: oklch(0.9 0.002 240);
--input: oklch(1 0 0);
--ring: oklch(0.6 0.15 142); /* Green ring with subtle transparency */
```

### Semantic Colors

```css
/* Destructive Actions */
--destructive: oklch(0.577 0.245 27.325);
--destructive-foreground: oklch(1 0 0);

/* Chart Colors */
--chart-1: oklch(0.669 0.1897 146.47); /* Brand green */
--chart-2: oklch(0.65 0.18 45); /* Energy orange */
--chart-3: oklch(0.15 0 0); /* Deep black */
--chart-4: oklch(0.45 0.005 240); /* Urban gray */
--chart-5: oklch(1 0 0); /* Pure white */
```

### Special Effects

```css
/* Glass Morphism */
--glass-bg: oklch(1 0 0 / 0.85);
--glass-border: oklch(0.92 0.005 240 / 0.4);
--glass-shadow: 0 8px 32px oklch(0.25 0.015 240 / 0.1);

/* Gradients */
--gradient-primary: linear-gradient(
  135deg,
  oklch(0.98 0.002 120) 0%,
  oklch(0.96 0.005 160) 100%
);
--gradient-accent: linear-gradient(
  135deg,
  oklch(0.65 0.18 142) 0%,
  oklch(0.62 0.15 264) 100%
);
```

### Color Usage Guidelines

- **Primary Green (`--primary`)**: Use for main CTAs, brand elements, and primary actions
- **Secondary Black (`--secondary`)**: Use for high-contrast elements, footers, and bold statements
- **Accent Orange (`--accent`)**: Use for urgent CTAs, highlights, and attention-grabbing elements
- **Muted Colors**: Use for secondary text, borders, and subtle backgrounds

---

## Typography

### Font Families

```css
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, monospace;
```

**Font Loading** (from `layout.tsx`):
- **Inter**: Primary font for all UI text
- **JetBrains Mono**: Monospace font for code/technical content
- Both use `display: "swap"` for optimal loading

### Typography Scale

```css
/* Headings */
h1 {
  @apply text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance;
}

h2 {
  @apply text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance;
}

h3 {
  @apply text-2xl md:text-3xl font-semibold tracking-tight text-balance;
}

/* Body Text */
p {
  @apply text-base md:text-lg leading-relaxed text-pretty;
}
```

### Typography Patterns

- **Hero Headlines**: `text-5xl md:text-7xl lg:text-8xl font-black`
- **Section Headings**: `text-5xl md:text-6xl font-black`
- **Body Text**: `text-xl leading-relaxed`
- **Labels**: `text-sm font-bold uppercase tracking-wide`
- **Small Text**: `text-xs text-white/70`

### Font Weights

- `font-black` (900): Hero headlines, brand name
- `font-bold` (700): Section headings, CTAs
- `font-semibold` (600): Subheadings
- `font-medium` (500): Body emphasis, labels
- Regular (400): Body text

---

## Spacing & Layout

### Container

```css
.container {
  @apply max-w-[1400px]! mx-auto px-4 sm:px-6 lg:px-8;
}
```

- **Max Width**: 1400px
- **Responsive Padding**: 
  - Mobile: `px-4` (16px)
  - Tablet: `px-6` (24px)
  - Desktop: `px-8` (32px)

### Section Spacing

```css
.section-padding {
  @apply py-16 md:py-24 lg:py-32;
}
```

- **Mobile**: `py-16` (64px)
- **Tablet**: `py-24` (96px)
- **Desktop**: `py-32` (128px)

### Border Radius

```css
--radius: 0.75rem; /* 12px - Base radius */
--radius-sm: calc(var(--radius) - 4px); /* 8px */
--radius-md: calc(var(--radius) - 2px); /* 10px */
--radius-lg: var(--radius); /* 12px */
--radius-xl: calc(var(--radius) + 4px); /* 16px */
```

**Common Usage**:
- **Buttons**: `rounded-lg` (12px) or `rounded-3xl` (24px) for large CTAs
- **Cards**: `rounded-xl` (12px)
- **Inputs**: `rounded-3xl` (24px) for modern feel
- **Badges**: `rounded-full` (pill shape)

---

## Component Patterns

### Buttons

#### Primary CTA Button
```tsx
<Button
  size="lg"
  className="bg-primary hover:bg-primary/90 text-primary-foreground 
             h-14 text-xl font-bold rounded-3xl uppercase tracking-wider 
             shadow-2xl transform hover:scale-105 transition-all duration-200"
>
  Sign Up Now
</Button>
```

#### Secondary CTA Button
```tsx
<Button
  size="lg"
  variant="outline"
  className="h-16 text-xl font-bold rounded-full border-2"
>
  Join Another Rider
</Button>
```

#### Black Secondary Button
```tsx
<Button
  size="lg"
  className="w-full bg-secondary hover:bg-secondary/90 text-white 
             h-16 text-xl font-bold rounded-3xl uppercase tracking-wider"
>
  Join the Waitlist
</Button>
```

### Form Elements

#### Input Fields
```tsx
<Input
  className="h-14 border-2 border-muted rounded-3xl"
  placeholder="Enter your email"
/>
```

#### Labels
```tsx
<Label className="text-sm font-bold text-secondary uppercase tracking-wide">
  Email
</Label>
```

#### Select Dropdowns
```tsx
<SelectTrigger className="w-full min-h-14 border-2 border-muted rounded-3xl">
  <SelectValue placeholder="Select option" />
</SelectTrigger>
```

### Cards

#### Standard Card
```tsx
<div className="bg-card border border-border rounded-xl p-6 
                shadow-lg hover:shadow-xl transition-all duration-300 
                transform hover:-translate-y-1">
  {/* Card content */}
</div>
```

#### Glass Card
```tsx
<div className="glass-card backdrop-filter-blur-12px">
  {/* Glass morphism effect */}
</div>
```

### Hero Section Pattern

```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0">
    <Image src="..." fill className="object-cover" />
  </div>
  
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/60 to-transparent" />
  
  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 text-center">
    {/* Hero content */}
  </div>
</section>
```

---

## Utility Classes

### Conversion-Focused Utilities

#### Primary CTA
```css
.cta-primary {
  @apply bg-primary text-primary-foreground hover:bg-primary/90
         px-8 py-4 text-lg font-semibold rounded-lg
         shadow-2xl hover:shadow-accent/25
         border-2 border-transparent hover:border-primary/20
         transition-all duration-200 ease-out
         transform hover:scale-105 active:scale-95;
}
```

#### Secondary CTA
```css
.cta-secondary {
  @apply border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground
         px-6 py-3 font-medium rounded-lg
         transition-all duration-200 ease-out
         transform hover:scale-105 active:scale-95;
}
```

### Trust & Social Proof

```css
.trust-badge {
  @apply bg-card border border-border rounded-lg p-4
         shadow-sm hover:shadow-md transition-shadow duration-200;
}

.stat-highlight {
  @apply text-3xl md:text-4xl font-bold text-primary;
}
```

### Urgency Elements

```css
.urgency-banner {
  @apply bg-accent text-accent-foreground px-4 py-2 rounded-full
         text-sm font-medium animate-pulse;
}

.limited-spots {
  @apply bg-destructive/10 text-destructive border border-destructive/20
         px-3 py-1 rounded-full text-xs font-medium;
}
```

### Form Styling

```css
.form-field {
  @apply w-full px-4 py-3 border border-border rounded-lg
         bg-background text-foreground
         focus:border-primary focus:ring-2 focus:ring-primary/20
         transition-all duration-200 ease-out
         placeholder:text-muted-foreground
         focus:shadow-lg focus:shadow-primary/10;
}
```

### Layout Utilities

```css
.hero-section {
  @apply min-h-screen flex items-center justify-center
         bg-gradient-to-br from-background via-background to-muted/30;
}

.asymmetric-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-8
         [&>*:first-child]:md:col-span-2;
}
```

### Visual Effects

```css
.testimonial-card {
  @apply bg-card border border-border rounded-xl p-6
         shadow-lg hover:shadow-xl transition-all duration-300
         transform hover:-translate-y-1;
}

.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
}

.gradient-bg {
  background: var(--gradient-primary);
}
```

### Accessibility

```css
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 
         focus:ring-offset-background;
}

.touch-target {
  @apply min-h-[44px] min-w-[44px] flex items-center justify-center;
}
```

---

## Animations

### Keyframe Animations

```css
/* Float Animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Slide Up Animation */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In Animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Scale In Animation */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Animation Utilities

```css
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-out forwards;
}
```

### Transition Patterns

- **Standard**: `transition-all duration-200 ease-out`
- **Hover Scale**: `transform hover:scale-105 active:scale-95`
- **Smooth**: `transition-all duration-300 ease-out`

---

## Design Tokens

### Complete CSS Variables Reference

```css
:root {
  /* Core Colors */
  --background: oklch(1 0 0);
  --foreground: oklch(0.15 0 0);
  --card: oklch(0.98 0.002 240);
  --card-foreground: oklch(0.15 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0 0);
  
  /* Brand Colors */
  --primary: oklch(0.669 0.1897 146.47);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.15 0 0);
  --secondary-foreground: oklch(1 0 0);
  
  /* Accent & Muted */
  --accent: oklch(0.65 0.18 45);
  --accent-foreground: oklch(1 0 0);
  --muted: oklch(0.96 0.002 240);
  --muted-foreground: oklch(0.45 0.005 240);
  
  /* Semantic */
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(1 0 0);
  
  /* Borders & Inputs */
  --border: oklch(0.9 0.002 240);
  --input: oklch(1 0 0);
  --ring: oklch(0.6 0.15 142);
  
  /* Radius */
  --radius: 0.75rem;
  
  /* Special Effects */
  --glass-bg: oklch(1 0 0 / 0.85);
  --glass-border: oklch(0.92 0.005 240 / 0.4);
  --glass-shadow: 0 8px 32px oklch(0.25 0.015 240 / 0.1);
}
```

---

## Implementation Guide

### Step 1: Install Dependencies

```json
{
  "dependencies": {
    "next": "^15.5.7",
    "react": "19.1.2",
    "tailwindcss": "^4.1.9",
    "@tailwindcss/postcss": "^4.1.9",
    "tw-animate-css": "1.3.3",
    "next-themes": "^0.4.6",
    "lucide-react": "^0.454.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5"
  }
}
```

### Step 2: Configure PostCSS

```javascript
// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
```

### Step 3: Setup Global CSS

Copy the entire `globals.css` file from `movrr-waitlist/app/globals.css` to your project. This includes:
- Color system (OKLCH)
- Typography scale
- Component utilities
- Animation keyframes
- Layout utilities

### Step 4: Configure Fonts in Layout

```tsx
// app/layout.tsx
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
```

### Step 5: Use shadcn/ui Components

The design system uses **shadcn/ui** with the "new-york" style. Configure `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

### Step 6: Apply Design Patterns

When building components, follow these patterns:

1. **Use semantic color tokens**: `bg-primary`, `text-foreground`, etc.
2. **Apply consistent spacing**: Use `section-padding` and `container` utilities
3. **Use rounded corners**: `rounded-3xl` for modern inputs/buttons, `rounded-xl` for cards
4. **Add hover effects**: `hover:scale-105`, `hover:shadow-xl`
5. **Use typography scale**: Follow the h1-h3 and p patterns
6. **Apply animations**: Use `animate-slide-up`, `animate-fade-in` for entrance effects

### Step 7: Component Examples

Refer to these component files for implementation patterns:
- `components/hero-section.tsx` - Hero section with overlay
- `components/waitlist-form.tsx` - Form styling patterns
- `components/value-proposition.tsx` - Content section layout
- `components/footer.tsx` - Footer styling

---

## Design Principles

1. **Bold Minimalism**: High contrast, clean layouts, generous whitespace
2. **Energy & Movement**: Vibrant colors (green + orange), smooth animations
3. **Conversion-Focused**: Large CTAs, clear hierarchy, trust elements
4. **Mobile-First**: Responsive typography and spacing scales
5. **Accessibility**: Proper focus states, touch targets (44px minimum)
6. **Modern Feel**: Rounded corners (12-24px), glass effects, gradients

---

## Color Reference (Hex Equivalents)

For quick reference, approximate hex values:

- **Primary Green**: `#23b245` (oklch(0.669 0.1897 146.47))
- **Accent Orange**: `#ff6b35` (oklch(0.65 0.18 45))
- **Secondary Black**: `#000000` (oklch(0.15 0 0))
- **Background White**: `#ffffff` (okch(1 0 0))
- **Muted Gray**: `#737373` (oklch(0.45 0.005 240))

**Note**: OKLCH provides better color consistency than hex, so prefer CSS variables over hex values.

---

## Quick Start Checklist

- [ ] Copy `globals.css` to your project
- [ ] Install required dependencies
- [ ] Configure PostCSS with Tailwind
- [ ] Setup Inter and JetBrains Mono fonts
- [ ] Configure shadcn/ui with "new-york" style
- [ ] Apply color tokens in components
- [ ] Use typography scale (h1-h3, p)
- [ ] Apply spacing utilities (section-padding, container)
- [ ] Use rounded corners (rounded-3xl for inputs, rounded-xl for cards)
- [ ] Add hover effects and transitions
- [ ] Test responsive breakpoints

---

## Notes

- The design system uses **Tailwind CSS v4** with the new `@import "tailwindcss"` syntax
- Colors are defined in **OKLCH** color space for better perceptual uniformity
- The system is optimized for **conversion** with large CTAs and clear hierarchy
- All components follow **mobile-first** responsive design
- The design emphasizes **bold minimalism** with high contrast and clean layouts

