# Channel Dashboard

A modern, responsive dashboard application built with Next.js 15.5.8 and Tailwind CSS, replicating the Bland AI dashboard interface.

## Features

- 🎨 Modern, clean UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 15.5.8
- 🎨 Styled with Tailwind CSS
- 🔄 Client-side navigation
- 📊 Comprehensive dashboard pages

## Pages

All dashboard pages are available under `/dashboard`:

- **Dashboard/Home** - Main dashboard with call overview
- **Analytics** - Call analytics and metrics
- **Personas** - AI persona management (BETA)
- **Call Logs** - Complete call log history
- **Send Call** - Send individual calls with configuration
- **Conversational Pathways** - Create and manage conversation flows
- **Batches** - Batch call management
- **Tools** - Tool management (BETA)
- **Events** - Event tracking
- **Billing & Credits** - Billing and subscription management
- **Phone Numbers** - Phone number management
- **Voices** - Voice library and management
- **Knowledge Bases** - Knowledge base management
- **Web Widget** - Web widget configuration
- **SMS** - SMS dashboard
- **Compliance & Policy** - Compliance management
- **Add Ons** - Available add-ons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Technology Stack

- **Next.js 15.5.8** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons
- **clsx** - Conditional class names

## Project Structure

```
channel-app/
├── app/
│   ├── components/         # Reusable components
│   │   ├── Sidebar.tsx     # Desktop sidebar navigation
│   │   └── MobileSidebar.tsx # Mobile sidebar navigation
│   ├── dashboard/          # Dashboard pages
│   │   ├── layout.tsx      # Dashboard layout
│   │   └── [page]/         # Individual page components
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page (redirects to dashboard)
└── public/                 # Static assets
```

## Mobile Responsiveness

The application is fully responsive with:
- Mobile sidebar with hamburger menu
- Responsive grid layouts
- Touch-friendly buttons and interactions
- Adaptive typography and spacing

## License

Private project - All rights reserved
# channelai
