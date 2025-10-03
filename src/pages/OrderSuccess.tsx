import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Package, Truck, Mail } from 'lucide-react';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const orderData = location.state || {
    orderTotal: 0,
    orderNumber: 'NK' + Date.now()
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <CheckCircle className="h-20 w-20 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold">Order Confirmed!</h1>
            <p className="text-muted-foreground text-lg">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Order Number:</span>
                <span className="font-mono">{orderData.orderNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total Amount:</span>
                <span className="text-2xl font-bold">${orderData.orderTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Payment Status:</span>
                <span className="text-green-600 font-semibold">Paid</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Estimated Delivery:</span>
                <span>3-5 business days</span>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Package className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <h3 className="font-semibold mb-2">Order Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Your order is being prepared for shipment
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <Truck className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <h3 className="font-semibold mb-2">Fast Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  Free shipping on orders over $75
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <h3 className="font-semibold mb-2">Email Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Track your order via email notifications
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              A confirmation email has been sent to your email address with your order details and tracking information.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/')} variant="outline">
                Continue Shopping
              </Button>
              <Button onClick={() => navigate('/orders')}>
                View Order History
              </Button>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              If you have any questions about your order, please don't hesitate to contact us.
            </p>
            <Button variant="outline" size="sm">
              Contact Support
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
