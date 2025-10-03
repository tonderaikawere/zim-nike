# Nike E-Commerce Website

## Project Overview

A modern, fully functional e-commerce website inspired by Nike's design language. Built with React, TypeScript, and Tailwind CSS, featuring a complete shopping experience with payment integration.

**Developed by**: Tonde

## Features

- 🛍️ Complete e-commerce functionality
- 💳 Integrated payment processing
- 📱 Responsive design for all devices
- 🎨 Modern Nike-inspired UI/UX
- 🔐 User authentication and profiles
- 📦 Order management and tracking
- 🛒 Shopping cart with persistent state
- 🔍 Product search and filtering

## Getting Started

To run this project locally, you'll need Node.js installed on your machine.

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd nike-ecommerce

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory and add your environment variables:

```env
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_API_URL=your_api_url
```

## Technology Stack

### Frontend
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components

### State Management & Data
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **React Router** - Client-side routing

### Payment & E-commerce
- **Stripe** - Payment processing
- **Local Storage** - Cart persistence
- **Context API** - Global state management

### Icons & Styling
- **Lucide React** - Beautiful, customizable icons
- **Tailwind Animate** - CSS animations
- **Custom Design System** - Nike-inspired color palette

## Deployment

This project can be deployed to any static hosting service:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

### Build for Production

```sh
npm run build
```

## Contributing

This project was developed by Tonde. Feel free to submit issues and enhancement requests!

## License

This project is for educational and portfolio purposes. Nike branding is used for design inspiration only.
