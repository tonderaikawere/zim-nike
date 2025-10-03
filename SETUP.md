# Nike E-Commerce Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Features Implemented

### ✅ Core E-Commerce Functionality
- **Shopping Cart**: Persistent cart with local storage
- **Product Catalog**: Interactive product grid with quick add
- **Product Details**: Individual product pages with size/color selection
- **Checkout Process**: Complete checkout with form validation
- **Payment Integration**: Ready for Stripe integration
- **Order Confirmation**: Success page with order details

### ✅ User Experience
- **Authentication**: Login/Register with form validation
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Nike-inspired design system
- **Smooth Animations**: Hover effects and transitions
- **Toast Notifications**: User feedback for actions

### ✅ Technical Features
- **TypeScript**: Full type safety
- **State Management**: React Context for cart
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: React Router with protected routes
- **Component Library**: shadcn/ui components

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components (49 components)
│   ├── Header.tsx      # Navigation with cart
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Landing page hero
│   ├── ProductGrid.tsx # Interactive product grid
│   └── ShoppingCart.tsx # Cart sidebar
├── contexts/           # React contexts
│   └── CartContext.tsx # Shopping cart state
├── pages/              # Route components
│   ├── Index.tsx       # Home page
│   ├── Men.tsx         # Men's category
│   ├── Women.tsx       # Women's category
│   ├── Kids.tsx        # Kids' category
│   ├── Sale.tsx        # Sale items
│   ├── ProductDetail.tsx # Product details
│   ├── Checkout.tsx    # Checkout process
│   ├── Auth.tsx        # Login/Register
│   ├── OrderSuccess.tsx # Order confirmation
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static files
```

## Key Components

### Shopping Cart (`CartContext.tsx`)
- Persistent state with localStorage
- Add/remove/update quantity
- Calculate totals and item counts
- Type-safe cart operations

### Checkout (`Checkout.tsx`)
- Complete form validation
- Shipping and billing information
- Payment form (ready for Stripe)
- Order summary and calculations

### Product Detail (`ProductDetail.tsx`)
- Size and color selection
- Add to cart with validation
- Related products
- Product features and specifications

### Authentication (`Auth.tsx`)
- Login and registration forms
- Form validation with Zod
- Password visibility toggle
- Social login placeholders

## Environment Variables

Create a `.env` file with:

```env
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Nike E-Commerce
```

## Payment Integration

The checkout is ready for Stripe integration:

1. Add your Stripe public key to `.env`
2. Install Stripe SDK: `npm install @stripe/stripe-js`
3. Update checkout component with Stripe Elements
4. Set up webhook endpoints for order processing

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Manual Deployment
```bash
npm run build
# Serve dist/ folder with any static hosting
```

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This project was developed by **Tonde** as a modern Nike-inspired e-commerce website. The design is for educational and portfolio purposes only.

## License

This project is for educational purposes. Nike branding is used for design inspiration only.
