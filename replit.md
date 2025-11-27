# Marcelo Camargo Advocacia

## Overview

This is a professional website for Marcelo Camargo Advocacia, a criminal law practice with almost 20 years of experience specializing in criminal defense and jury trials. The site is built as a single-page application showcasing the lawyer's expertise, services, and contact information with a sophisticated, trust-building design.

The application is a static website built with React, Vite, and TypeScript, featuring a modern component-based architecture with shadcn/ui components and Tailwind CSS for styling. It includes smooth animations via Framer Motion and is optimized for deployment on Netlify.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for optimal static site generation
- **Wouter** for lightweight client-side routing (single-page application pattern)
- Build output directory: `dist/public` for Netlify deployment

**UI Component System**
- **shadcn/ui** component library based on Radix UI primitives
- Component style: "new-york" variant with CSS variables for theming
- Component aliases configured for clean imports (`@/components`, `@/lib`, etc.)
- Extensive collection of pre-built components (buttons, cards, forms, dialogs, etc.)

**Styling Approach**
- **Tailwind CSS** with custom configuration for design system
- CSS variables for theme colors supporting light/dark modes
- Custom typography system with serif fonts (Playfair Display/Lora) for authority and sans-serif (Inter) for readability
- Spacing scale based on 4px units for consistent rhythm
- Custom utility classes for hover effects (`hover-elevate`, `active-elevate-2`)

**Animation & Interactions**
- **Framer Motion** for scroll-triggered animations and transitions
- Viewport-based animation triggers with `whileInView` for performance
- Smooth scroll behavior for in-page navigation
- Sticky header with scroll-based styling changes

**Design Philosophy**
- Premium law firm aesthetic emphasizing authority, trust, and professionalism
- Mobile-first responsive design
- Section-based layout with hero, about, services, differentiators, contact
- Strategic use of professional photography and minimalist layouts

### Backend Architecture

**Server Setup**
- **Express.js** server for development and production
- Vite middleware integration in development mode for HMR (Hot Module Replacement)
- Static file serving in production from `dist/public`
- HTTP server creation with custom logging middleware

**State Management**
- **TanStack Query (React Query)** for server state management
- Custom query client with specific configuration (no window focus refetch, infinite stale time)
- Client-side only state (no API routes currently implemented)

**Storage Interface**
- Abstract storage interface (`IStorage`) for future database integration
- In-memory implementation (`MemStorage`) as default
- User model with id, username, password fields
- Designed for easy swap to database-backed storage

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL via `@neondatabase/serverless`
- Database schema defined in `shared/schema.ts` with user table
- Drizzle Kit for migrations (output: `./migrations`)
- Connection via `DATABASE_URL` environment variable
- Note: Database provisioning required but not currently active in the application

**Schema Design**
- Users table with UUID primary key, username (unique), and password
- Zod schema integration via `drizzle-zod` for validation
- Type-safe schema with TypeScript inference

### Authentication & Authorization

**Current State**
- User schema defined but no authentication implemented
- Session management prepared via `connect-pg-simple` (PostgreSQL session store)
- Express session middleware ready for integration
- No active login/registration flows in current implementation

**Design Consideration**
The application is currently a static marketing site. The user/auth infrastructure suggests potential for future client portal or admin features.

### Project Structure

```
client/
  ├── src/
  │   ├── components/     # React components (sections, UI primitives)
  │   ├── pages/          # Page components (Home, NotFound)
  │   ├── lib/            # Utilities (query client, utils)
  │   ├── hooks/          # Custom React hooks
  │   └── index.css       # Global styles with CSS variables
  ├── index.html          # HTML entry point
server/
  ├── index.ts            # Express server setup
  ├── routes.ts           # API route registration
  ├── storage.ts          # Storage interface & implementation
  └── vite.ts             # Vite dev server integration
shared/
  └── schema.ts           # Shared database schema & types
attached_assets/          # Images and content files
```

## External Dependencies

### UI & Styling
- **@radix-ui/***: Headless UI primitives for accessible components (20+ packages)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **framer-motion**: Animation library for smooth transitions
- **lucide-react**: Icon library

### Data & Forms
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation
- **drizzle-zod**: Drizzle ORM integration with Zod

### Database & ORM
- **drizzle-orm**: TypeScript ORM
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-kit**: Migration tool

### Routing & Server
- **wouter**: Lightweight React router
- **express**: Web server framework
- **vite**: Build tool and dev server

### Deployment
- **Netlify**: Configured for deployment via `netlify.toml`
- Build command: `npm run build`
- Publish directory: `dist/public`
- SPA redirects configured via `_redirects` file

### Development Tools
- **TypeScript**: Type safety across the stack
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for server code
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Content & Assets
- Professional photography stored in `attached_assets/`
- Custom fonts loaded from Google Fonts (Architects Daughter, DM Sans, Fira Code, Geist Mono)
- Design guidelines documented in `design_guidelines.md`

### Key Configuration Files
- `vite.config.ts`: Vite build and dev server configuration
- `tailwind.config.ts`: Tailwind theme customization
- `drizzle.config.ts`: Database connection and migration settings
- `tsconfig.json`: TypeScript compiler options with path aliases
- `components.json`: shadcn/ui configuration