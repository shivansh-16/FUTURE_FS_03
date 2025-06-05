# Tesla Reimagined - Developer Documentation

A comprehensive guide for developers working on the Tesla website rebrand project.

## 📁 Project Structure

```
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── layout/         # Navigation, footer, page structure
│   │   │   ├── sections/       # Homepage sections (hero, features, etc.)
│   │   │   └── ui/             # shadcn/ui components and utilities
│   │   ├── data/               # Static data and configurations
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utilities, API client, animations
│   │   ├── pages/              # Route components
│   │   ├── App.tsx             # Main app component and routing
│   │   ├── main.tsx            # React app entry point
│   │   └── index.css           # Global styles and design tokens
│   └── index.html              # HTML template
├── server/                     # Backend Express application
│   ├── index.ts                # Server entry point
│   ├── routes.ts               # API route definitions
│   ├── storage.ts              # Data storage interface
│   └── vite.ts                 # Vite development setup
├── shared/                     # Shared TypeScript types
│   └── schema.ts               # Database schemas and types
└── configuration files         # Build, lint, and deployment configs
```

## 🔧 Development Setup

### Prerequisites
- Node.js 20+
- npm or yarn package manager

### Installation & Running
```bash
# Install dependencies
npm install

# Start development server (runs both frontend and backend)
npm run dev

# The app will be available at http://localhost:5000
```

### Environment Variables
No external API keys are currently required. The app uses in-memory storage for development.

## 🎨 Design System & Styling

### CSS Custom Properties (Design Tokens)
Located in `client/src/index.css`:

```css
:root {
  --electric-blue: 195 100% 50%;    /* Primary brand color */
  --energy-orange: 14 100% 60%;     /* Secondary accent */
  --deep-charcoal: 0 0% 10%;        /* Dark backgrounds */
  --warm-white: 0 0% 98%;           /* Light backgrounds */
}
```

### Utility Classes
- `.gradient-text` - Electric blue to orange text gradient
- `.glass-effect` - Transparent backdrop with blur
- `.hero-gradient` - Dark gradient background
- `.animate-float` - Floating animation for elements

### Component Styling Guidelines
- Use Tailwind CSS classes for styling
- Leverage design tokens with `hsl(var(--token-name))`
- Maintain consistent spacing (py-20 for sections, px-4 for containers)
- Use gradient buttons for primary CTAs

## 🧱 Component Architecture

### Layout Components (`client/src/components/layout/`)

**Navbar** (`navbar.tsx`)
- Fixed navigation with glass effect
- Responsive design with mobile menu
- Navigation links configured in array for easy updates

**Footer** (`footer.tsx`)
- Site-wide footer with links and social media
- Organized into sections for maintainability

### Section Components (`client/src/components/sections/`)

**Hero** (`hero.tsx`)
- Homepage hero with animations and stats
- Background effects and call-to-action buttons

**ProductShowcase** (`product-showcase.tsx`)
- Vehicle grid display
- Pulls data from `client/src/data/vehicles.ts`

**Innovation** (`innovation.tsx`)
- Technology features showcase
- Uses data from `client/src/data/innovations.ts`

### UI Components (`client/src/components/ui/`)
- Based on shadcn/ui component library
- Customized with Tesla brand colors and styling
- Consistent design patterns across all components

## 🛣 Routing & Pages

### Adding New Routes
1. Create page component in `client/src/pages/`
2. Add route to `client/src/App.tsx`:
```tsx
import NewPage from "@/pages/new-page";

// Add to Switch component
<Route path="/new-page" component={NewPage} />
```
3. Update navigation in `client/src/components/layout/navbar.tsx`

### Page Structure Template
```tsx
import { useEffect } from "react";

export default function PageName() {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Page Title - Tesla Reimagined";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Page description for SEO");
    }
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Page content */}
    </div>
  );
}
```

## 🔌 Backend & API

### API Routes (`server/routes.ts`)

**Newsletter Subscription**
```
POST /api/newsletter/subscribe
Body: { email: string }
```

**Contact Form**
```
POST /api/contact
Body: { name: string, email: string, subject: string, message: string }
```

**Get Contact Messages**
```
GET /api/contact/messages
```

### Storage Interface (`server/storage.ts`)
- `IStorage` interface defines all data operations
- `MemStorage` provides in-memory implementation
- Easily replaceable with database implementation

### Adding New API Endpoints
1. Add method to `IStorage` interface
2. Implement method in `MemStorage` class
3. Create route handler in `server/routes.ts`
4. Add schema validation using Zod

## 📊 Data Management

### Static Data (`client/src/data/`)

**Vehicles** (`vehicles.ts`)
- Vehicle specifications and images
- Used by product showcase and vehicles page

**Innovations** (`innovations.ts`)
- Technology features with icons and descriptions
- Powers the innovation section

### Dynamic Data
- Contact messages stored in memory
- Newsletter subscriptions tracked
- Easily extendable for additional data types

## 🎭 Animations & Interactions

### CSS Animations (`client/src/index.css`)
- `@keyframes float` - Subtle floating movement
- `@keyframes glow` - Glowing effect for buttons
- `@keyframes slideUp` - Entrance animations

### Animation Classes
- `animate-float` - Apply floating animation
- `animate-glow` - Apply glow effect
- `animate-slide-up` - Apply slide-up entrance

## 🚀 Build & Deployment

### Development
```bash
npm run dev  # Starts both frontend and backend
```

### Production Build
The project is configured for Replit deployment with automatic build processes.

### Environment Configuration
- Development: Uses Vite for frontend, Express for backend
- Production: Static files served by Express server

## 🔍 Debugging & Troubleshooting

### Common Issues

**React Key Warnings**
- Ensure unique keys in map operations
- Use dedicated ID fields rather than array indices

**CSS Not Loading**
- Check import order in `index.css`
- Verify Tailwind CSS configuration

**API Errors**
- Check browser network tab for request details
- Verify request body format and headers

### Development Tools
- React Developer Tools for component debugging
- Browser DevTools for styling and network issues
- TypeScript compiler for type checking

### Log Locations
- Browser console for frontend errors
- Terminal/Replit console for backend logs
- Network tab for API request debugging

## 🔒 Security Considerations

### Input Validation
- All API endpoints use Zod schemas for validation
- XSS prevention through React's built-in escaping
- CORS configured for production environments

### Data Handling
- No sensitive data stored in frontend
- Contact form data sanitized before storage
- Email validation on both frontend and backend

## 📈 Performance Optimization

### Image Optimization
- Use appropriate image sizes for different breakpoints
- Implement lazy loading for below-fold images
- Optimize image formats (WebP where supported)

### Code Splitting
- Pages are automatically code-split by Vite
- Dynamic imports for heavy components when needed

### Bundle Optimization
- Tree shaking enabled for unused code removal
- Minification in production builds
- CSS purging for smaller stylesheets

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] All navigation links work correctly
- [ ] Forms submit and show appropriate feedback
- [ ] Responsive design works on all screen sizes
- [ ] Animations perform smoothly
- [ ] Error states display properly

### Automated Testing Setup
Ready for Jest and React Testing Library integration when needed.

## 🔄 Future Enhancements

### Recommended Improvements
1. **Database Integration**: Replace in-memory storage with PostgreSQL
2. **User Authentication**: Add user accounts and personalization
3. **CMS Integration**: Content management for easier updates
4. **Advanced Analytics**: User behavior tracking and insights
5. **Internationalization**: Multi-language support
6. **Progressive Web App**: Offline functionality and mobile app feel

### Scalability Considerations
- API rate limiting for production
- Database connection pooling
- CDN integration for static assets
- Monitoring and logging infrastructure

---

For questions or contributions, follow the project's coding standards and submit pull requests with comprehensive descriptions.