import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { Heart, Star, Truck, RotateCcw, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import shoe1 from '@/assets/shoe-1.jpg';
import shoe2 from '@/assets/shoe-2.jpg';
import shoe3 from '@/assets/shoe-3.jpg';
import shoe4 from '@/assets/shoe-4.jpg';

// Mock product data - in a real app, this would come from an API
const products = [
  {
    id: '1',
    name: 'Air Force Runner',
    price: 95.00,
    originalPrice: 120.00,
    image: shoe1,
    category: 'Running',
    description: 'Experience unmatched comfort and performance with the Air Force Runner. Designed for serious athletes and casual runners alike, featuring advanced cushioning technology and breathable materials.',
    features: [
      'Advanced Air cushioning technology',
      'Breathable mesh upper',
      'Durable rubber outsole',
      'Lightweight design',
      'Enhanced stability'
    ],
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    colors: ['Black', 'White', 'Red'],
    rating: 4.8,
    reviews: 324,
    inStock: true
  },
  {
    id: '2',
    name: 'Court Vision Pro',
    price: 120.00,
    image: shoe2,
    category: 'Basketball',
    description: 'Dominate the court with the Court Vision Pro. Built for basketball players who demand excellence, featuring superior grip and ankle support.',
    features: [
      'High-top design for ankle support',
      'Superior court grip',
      'Reinforced toe area',
      'Moisture-wicking interior',
      'Professional-grade construction'
    ],
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    colors: ['Black', 'White', 'Blue'],
    rating: 4.6,
    reviews: 189,
    inStock: true
  },
  {
    id: '3',
    name: 'Flex Trainer',
    price: 85.00,
    image: shoe3,
    category: 'Training',
    description: 'Versatile training shoe perfect for gym workouts, cross-training, and fitness activities. Flexible design adapts to your every movement.',
    features: [
      'Multi-directional flexibility',
      'Stable platform for lifting',
      'Breathable construction',
      'Quick-dry materials',
      'Versatile design'
    ],
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    colors: ['Black', 'Gray', 'Blue'],
    rating: 4.7,
    reviews: 256,
    inStock: true
  },
  {
    id: '4',
    name: 'React Velocity',
    price: 105.00,
    image: shoe4,
    category: 'Running',
    description: 'Revolutionary running shoe with React foam technology for maximum energy return and comfort during long runs.',
    features: [
      'React foam midsole',
      'Energy return technology',
      'Lightweight construction',
      'Engineered mesh upper',
      'Responsive cushioning'
    ],
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    colors: ['Black', 'White', 'Orange'],
    rating: 4.9,
    reviews: 412,
    inStock: true
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose a size before adding to cart",
        variant: "destructive",
      });
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      size: selectedSize,
    };

    addItem(cartItem);
    
    toast({
      title: "Added to cart!",
      description: `${product.name} (Size ${selectedSize}) has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className="aspect-square"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1"
                size="lg"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Shipping & Returns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <Truck className="h-5 w-5 text-secondary" />
                <div>
                  <p className="font-semibold text-sm">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">On orders over $75</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <RotateCcw className="h-5 w-5 text-secondary" />
                <div>
                  <p className="font-semibold text-sm">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <Shield className="h-5 w-5 text-secondary" />
                <div>
                  <p className="font-semibold text-sm">Warranty</p>
                  <p className="text-xs text-muted-foreground">1-year manufacturer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="group cursor-pointer border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden bg-muted">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute bottom-4 left-4">
                        {relatedProduct.category}
                      </Badge>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold group-hover:text-secondary transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-lg font-bold">${relatedProduct.price.toFixed(2)}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
