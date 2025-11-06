# Portfolio

This is a React version of the portfolio website, built with Vite and React. This project is set up to utilize React Bits components for enhanced UI elements.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Using React Bits

React Bits is a collection of pre-built, animated React components. To add components from React Bits:

### Option 1: Using CLI (Recommended)

You can install components directly using the React Bits CLI:

```bash
npx shadcn@latest add https://reactbits.dev/r/[COMPONENT-NAME]
```

Replace `[COMPONENT-NAME]` with the specific component you want to add. Browse available components at [reactbits.dev](https://reactbits.dev).

### Option 2: Manual Installation

1. Visit [reactbits.dev](https://reactbits.dev)
2. Browse and select the component you want
3. Click on the component's "Code" tab
4. Copy the source code
5. Create a new component file in `src/components/` and paste the code
6. Install any required dependencies mentioned in the component documentation

### Example: Adding a React Bits Component

Let's say you want to add an animated button:

```bash
npx shadcn@latest add https://reactbits.dev/r/AnimatedButton
```

Then import and use it in your components:

```jsx
import { AnimatedButton } from '@/components/ui/animated-button'

function MyComponent() {
  return <AnimatedButton>Click Me</AnimatedButton>
}
```

## Project Structure

```
test-site/
├── public/
│   └── assets/          # Images and static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/           # Custom React hooks
│   │   └── useIntersectionObserver.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── styles.css       # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Features

- ✅ Exact replica of the original website
- ✅ React components with hooks
- ✅ Smooth scroll animations
- ✅ Typing animation in hero section
- ✅ Responsive design
- ✅ Ready for React Bits integration

## Notes

- This test-site is separate from the main portfolio and won't be hosted until you're ready
- All assets are copied from the main project's `assets/` folder
- The styling matches the original website exactly
- React Bits components can be added incrementally as needed

## Development

The development server will run on `http://localhost:5173` by default (Vite's default port).

## Deployment

When you're ready to deploy:

1. Build the project: `npm run build`
2. The `dist/` folder will contain the production-ready files
3. Deploy the `dist/` folder to your hosting platform
