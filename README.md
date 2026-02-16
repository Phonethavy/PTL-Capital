# PTL Capital Landing Page

A modern, animated landing page for PTL Capital built with Next.js, React, and Tailwind CSS.

## Features

- Responsive design that works on all screen sizes
- Beautiful animated entrance effects
- Background image integration
- Email signup form
- Social media links
- Modern glassmorphism UI effects
- Smooth scrolling and interactions

## Tech Stack

- **Framework**: Next.js 14+
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **UI Components**: Shadcn/ui Stack
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind setup
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   └── landing-page.tsx     # Main landing page component
├── public/
│   └── bg1.png             # Background image
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project dependencies
```

## Customization

### Colors & Typography

Edit the color schemes and fonts in:
- `app/globals.css` - Global styles
- `tailwind.config.ts` - Tailwind theme configuration
- `components/landing-page.tsx` - Component-specific styles

### Text Content

Update the heading, subtitle, and links in `components/landing-page.tsx`:
```tsx
<h1>Your Title Here</h1>
<p>Your subtitle here</p>
```

### Background Image

Replace `public/bg1.png` with your own image to use a different background.

### Forms & Links

- Update the email form handler in the `onSubmit` event
- Replace social media links with your actual URLs

## License

Private project for PTL Capital
