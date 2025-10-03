import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollToTop, scrollToTop } from '@/hooks/use-scroll-to-top';
import { useNavigate } from 'react-router-dom';
import { Target, Users, Globe, Award, Heart, Zap, ArrowRight, Play } from 'lucide-react';

const AboutUs = () => {
  useScrollToTop();
  const navigate = useNavigate();

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "We push the boundaries of athletic performance through cutting-edge technology and design."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inclusivity",
      description: "Sport is for everyone. We create products that serve athletes of all backgrounds and abilities."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Sustainability",
      description: "We're committed to protecting the planet for future generations of athletes."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product design to customer service."
    }
  ];

  const milestones = [
    {
      year: "1964",
      title: "The Beginning",
      description: "Founded as Blue Ribbon Sports by Bill Bowerman and Phil Knight"
    },
    {
      year: "1971",
      title: "The Swoosh",
      description: "The iconic Nike Swoosh logo was created by Carolyn Davidson"
    },
    {
      year: "1987",
      title: "Just Do It",
      description: "Launched the legendary 'Just Do It' campaign that became a cultural phenomenon"
    },
    {
      year: "2024",
      title: "Digital Future",
      description: "Leading the digital transformation of athletic retail and e-commerce"
    }
  ];

  const leadership = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "Leading Nike's vision for the future of sport and innovation.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Driving digital transformation and technological advancement.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emma Rodriguez",
      role: "Chief Design Officer",
      bio: "Shaping the future of athletic design and performance.",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Nike</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Our mission is to bring inspiration and innovation to every athlete in the world. 
              If you have a body, you are an athlete.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/20 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To bring inspiration and innovation to every athlete in the world. We believe that if you have a body, you are an athlete, and we're here to serve you with products that help you perform at your best.
                </p>
                <p className="text-muted-foreground">
                  Since our founding, we've been driven by a simple idea: that passion, determination, and hard work can take you anywhere. We create products that help athletes of all levels achieve their goals and push their limits.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg p-8 text-center">
                  <Heart className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">60+ Years</h3>
                  <p className="text-muted-foreground">
                    Of inspiring athletes and pushing the boundaries of what's possible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do, from product development to community engagement.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                      {value.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From humble beginnings to global leadership in athletic innovation.
              </p>
            </div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-secondary">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-secondary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the visionaries driving Nike's mission forward.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-16 w-16 text-muted-foreground" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{leader.name}</h3>
                    <p className="text-secondary font-medium mb-3">{leader.role}</p>
                    <p className="text-muted-foreground text-sm">{leader.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global Impact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Global Impact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our commitment extends beyond products to communities worldwide.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">190+</div>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">75,000+</div>
                <p className="text-muted-foreground">Employees Worldwide</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">$50B+</div>
                <p className="text-muted-foreground">Annual Revenue</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Whether you're an athlete, innovator, or dreamer, there's a place for you at Nike.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                variant="secondary"
                onClick={() => {
                  navigate("/careers");
                  scrollToTop();
                }}
              >
                View Careers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => {
                  navigate("/sustainability");
                  scrollToTop();
                }}
              >
                Learn About Sustainability
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
