import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { Package, Truck, CheckCircle, Clock, MapPin, Phone, Mail } from 'lucide-react';

const mockOrders = [
  {
    id: 'NK-2024-001234',
    status: 'delivered',
    statusText: 'Delivered',
    orderDate: '2024-01-15',
    deliveryDate: '2024-01-18',
    total: 245.99,
    items: [
      { name: 'Air Max Elite', size: '10', quantity: 1, price: 140.00 },
      { name: 'Nike Training Shorts', size: 'L', quantity: 2, price: 52.99 }
    ],
    tracking: [
      { status: 'Order Placed', date: '2024-01-15 10:30 AM', completed: true },
      { status: 'Processing', date: '2024-01-15 2:45 PM', completed: true },
      { status: 'Shipped', date: '2024-01-16 9:15 AM', completed: true },
      { status: 'Out for Delivery', date: '2024-01-18 8:00 AM', completed: true },
      { status: 'Delivered', date: '2024-01-18 3:22 PM', completed: true }
    ],
    shippingAddress: '123 Main St, Anytown, ST 12345'
  },
  {
    id: 'NK-2024-001235',
    status: 'shipped',
    statusText: 'Shipped',
    orderDate: '2024-01-20',
    estimatedDelivery: '2024-01-23',
    total: 189.99,
    items: [
      { name: 'Court Legend', size: '9', quantity: 1, price: 130.00 },
      { name: 'Nike Dri-FIT Shirt', size: 'M', quantity: 1, price: 59.99 }
    ],
    tracking: [
      { status: 'Order Placed', date: '2024-01-20 2:15 PM', completed: true },
      { status: 'Processing', date: '2024-01-20 4:30 PM', completed: true },
      { status: 'Shipped', date: '2024-01-21 11:45 AM', completed: true },
      { status: 'Out for Delivery', date: '', completed: false },
      { status: 'Delivered', date: '', completed: false }
    ],
    shippingAddress: '456 Oak Ave, Another City, ST 67890',
    trackingNumber: 'TRK123456789'
  }
];

const OrderStatus = () => {
  useScrollToTop();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof mockOrders>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    const results = mockOrders.filter(order => 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.trackingNumber?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(results);
    setHasSearched(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-500';
      case 'shipped': return 'bg-blue-500';
      case 'processing': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="h-5 w-5" />;
      case 'shipped': return <Truck className="h-5 w-5" />;
      case 'processing': return <Clock className="h-5 w-5" />;
      default: return <Package className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Package className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Track Your Order</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Enter your order number or tracking number to get real-time updates on your Nike order.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto flex gap-2">
              <Input
                placeholder="Enter order number or tracking number"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-background text-foreground"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button onClick={handleSearch} variant="secondary">
                Track Order
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {!hasSearched ? (
              /* Guest Order Lookup */
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Find Your Order</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="orderNumber">Order Number</Label>
                      <Input
                        id="orderNumber"
                        placeholder="e.g., NK-2024-001234"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    
                    <div className="text-center">
                      <p className="text-muted-foreground mb-4">Or try these sample orders:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            setSearchQuery('NK-2024-001234');
                            setSearchResults([mockOrders[0]]);
                            setHasSearched(true);
                          }}
                        >
                          NK-2024-001234
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            setSearchQuery('NK-2024-001235');
                            setSearchResults([mockOrders[1]]);
                            setHasSearched(true);
                          }}
                        >
                          NK-2024-001235
                        </Button>
                      </div>
                    </div>

                    <Button onClick={handleSearch} className="w-full">
                      Track My Order
                    </Button>
                  </CardContent>
                </Card>

                {/* Help Section */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Phone className="h-8 w-8 mx-auto mb-3 text-secondary" />
                      <h3 className="font-bold mb-2">Call Us</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Speak with a customer service representative
                      </p>
                      <p className="font-semibold">1-800-NIKE-123</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <Mail className="h-8 w-8 mx-auto mb-3 text-secondary" />
                      <h3 className="font-bold mb-2">Email Support</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Get help via email within 24 hours
                      </p>
                      <p className="font-semibold">support@nike.com</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <Package className="h-8 w-8 mx-auto mb-3 text-secondary" />
                      <h3 className="font-bold mb-2">Order Issues</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Report problems with your order
                      </p>
                      <Button variant="outline" size="sm">Contact Us</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : searchResults.length > 0 ? (
              /* Order Results */
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold">Order Details</h2>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setHasSearched(false);
                      setSearchQuery('');
                      setSearchResults([]);
                    }}
                  >
                    Search Another Order
                  </Button>
                </div>

                {searchResults.map((order) => (
                  <div key={order.id} className="space-y-6">
                    {/* Order Summary */}
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Order {order.id}</CardTitle>
                          <Badge className={`${getStatusColor(order.status)} text-white`}>
                            {getStatusIcon(order.status)}
                            <span className="ml-2">{order.statusText}</span>
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Order Date</h4>
                            <p className="text-muted-foreground">{order.orderDate}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">
                              {order.status === 'delivered' ? 'Delivered' : 'Estimated Delivery'}
                            </h4>
                            <p className="text-muted-foreground">
                              {order.deliveryDate || order.estimatedDelivery}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Total</h4>
                            <p className="text-muted-foreground">${order.total.toFixed(2)}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Tracking Timeline */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Tracking Information</CardTitle>
                        {order.trackingNumber && (
                          <p className="text-muted-foreground">
                            Tracking Number: {order.trackingNumber}
                          </p>
                        )}
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {order.tracking.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                step.completed ? 'bg-secondary text-white' : 'bg-muted text-muted-foreground'
                              }`}>
                                {step.completed ? (
                                  <CheckCircle className="h-4 w-4" />
                                ) : (
                                  <div className="w-2 h-2 bg-current rounded-full" />
                                )}
                              </div>
                              <div className="flex-1">
                                <h4 className={`font-semibold ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  {step.status}
                                </h4>
                                {step.date && (
                                  <p className="text-sm text-muted-foreground">{step.date}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Order Items */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Items in This Order</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                              <div>
                                <h4 className="font-semibold">{item.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                  Size: {item.size} | Quantity: {item.quantity}
                                </p>
                              </div>
                              <p className="font-semibold">${item.price.toFixed(2)}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Shipping Address */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MapPin className="h-5 w-5" />
                          Shipping Address
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{order.shippingAddress}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              /* No Results */
              <div className="text-center py-12">
                <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-2xl font-bold mb-2">Order Not Found</h2>
                <p className="text-muted-foreground mb-6">
                  We couldn't find an order with that number. Please check your order number and try again.
                </p>
                <Button onClick={() => {
                  setHasSearched(false);
                  setSearchQuery('');
                }}>
                  Try Again
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrderStatus;
