import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollToTop, scrollToTop } from '@/hooks/use-scroll-to-top';
import { useNavigate } from 'react-router-dom';
import { Leaf, Recycle, Droplets, Wind, Target, ArrowRight, CheckCircle } from 'lucide-react';

const Sustainability = () => {
  useScrollToTop();
  const navigate = useNavigate();

  const initiatives = [
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Circular Design",
      description: "Creating products designed for recyclability and reuse",
      progress: 85,
      target: "90% by 2025"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Water Conservation", 
      description: "Reducing water usage in manufacturing processes",
      progress: 70,
      target: "50% reduction by 2030"
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Carbon Neutral",
      description: "Achieving net-zero carbon emissions across operations",
      progress: 60,
      target: "Net-zero by 2050"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable Materials",
      description: "Using recycled and renewable materials in products",
      progress: 75,
      target: "100% sustainable materials by 2030"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="h-8 w-8" />
              <Badge className="bg-white text-green-600 px-4 py-2 text-sm font-bold">
                MOVE TO ZERO
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Sustainability</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Our journey to zero carbon and zero waste. Protecting the future of sport 
              and the planet for generations to come.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              View Our Impact Report
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Key Initiatives */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Commitments</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Bold goals and measurable progress toward a more sustainable future.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                      {initiative.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-3">{initiative.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{initiative.description}</p>
                    <div className="mb-2">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${initiative.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-xs text-green-600 font-semibold">{initiative.target}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-muted-foreground">Measurable progress toward our sustainability goals</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
                <p className="text-muted-foreground">Footwear with recycled materials</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-muted-foreground">Renewable energy in facilities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                <p className="text-muted-foreground">Manufacturing waste diverted</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50M+</div>
                <p className="text-muted-foreground">Plastic bottles recycled</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Together, we can create a more sustainable future for sport and the planet.
            </p>
            <Button 
              variant="secondary"
              onClick={() => {
                navigate("/about-us");
                scrollToTop();
              }}
            >
              Learn More About Our Mission
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;
