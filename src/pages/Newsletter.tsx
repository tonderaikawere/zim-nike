import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Gift, Zap, Star, Users, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms'),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

const interests = [
  { id: 'running', label: 'Running', icon: '🏃' },
  { id: 'basketball', label: 'Basketball', icon: '🏀' },
  { id: 'training', label: 'Training & Gym', icon: '💪' },
  { id: 'lifestyle', label: 'Lifestyle', icon: '👟' },
  { id: 'kids', label: 'Kids', icon: '👶' },
  { id: 'women', label: 'Women', icon: '👩' },
  { id: 'men', label: 'Men', icon: '👨' },
  { id: 'sales', label: 'Sales & Offers', icon: '🏷️' },
];

const Newsletter = () => {
  useScrollToTop();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      interests: [],
      agreeToTerms: false,
    },
  });

  const watchedInterests = watch('interests') || [];

  const handleInterestChange = (interestId: string, checked: boolean) => {
    const currentInterests = watchedInterests;
    if (checked) {
      setValue('interests', [...currentInterests, interestId]);
    } else {
      setValue('interests', currentInterests.filter(id => id !== interestId));
    }
  };

  const onSubmit = async (data: NewsletterForm) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Newsletter signup:', data);
    
    toast({
      title: "Welcome to Nike!",
      description: "You've successfully signed up for our newsletter. Check your email for a welcome message.",
    });
    
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Mail className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Stay Connected</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Be the first to know about new releases, exclusive offers, and Nike stories that inspire.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Newsletter Benefits */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Why Join Nike Email?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Gift className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Exclusive Offers</h3>
                        <p className="text-muted-foreground">
                          Get access to member-only discounts and early access to sales.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Zap className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">First to Know</h3>
                        <p className="text-muted-foreground">
                          Be among the first to discover new product launches and collections.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Star className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Personalized Content</h3>
                        <p className="text-muted-foreground">
                          Receive content tailored to your interests and favorite sports.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Community Access</h3>
                        <p className="text-muted-foreground">
                          Join exclusive events and connect with the Nike community.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Newsletter Preview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Latest Newsletter Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="border-l-4 border-secondary pl-4">
                        <h4 className="font-semibold">New Air Max Collection</h4>
                        <p className="text-sm text-muted-foreground">
                          Discover the latest Air Max innovations with enhanced comfort and style.
                        </p>
                      </div>
                      <div className="border-l-4 border-secondary pl-4">
                        <h4 className="font-semibold">Member Exclusive: 20% Off</h4>
                        <p className="text-sm text-muted-foreground">
                          Limited time offer for Nike members on selected items.
                        </p>
                      </div>
                      <div className="border-l-4 border-secondary pl-4">
                        <h4 className="font-semibold">Training Tips from Pros</h4>
                        <p className="text-sm text-muted-foreground">
                          Expert advice to help you reach your fitness goals.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Signup Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Sign Up for Nike Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          {...register('firstName')}
                          className={errors.firstName ? 'border-red-500' : ''}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          {...register('lastName')}
                          className={errors.lastName ? 'border-red-500' : ''}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label className="text-base font-semibold">What interests you?</Label>
                      <p className="text-sm text-muted-foreground mb-4">
                        Select your interests to receive personalized content
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {interests.map((interest) => (
                          <div key={interest.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={interest.id}
                              checked={watchedInterests.includes(interest.id)}
                              onCheckedChange={(checked) => 
                                handleInterestChange(interest.id, checked as boolean)
                              }
                            />
                            <Label 
                              htmlFor={interest.id} 
                              className="text-sm font-normal cursor-pointer flex items-center gap-2"
                            >
                              <span>{interest.icon}</span>
                              {interest.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                      {errors.interests && (
                        <p className="text-red-500 text-sm mt-2">{errors.interests.message}</p>
                      )}
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        {...register('agreeToTerms')}
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed cursor-pointer">
                        I agree to Nike's{' '}
                        <a href="#" className="text-secondary hover:underline">
                          Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-secondary hover:underline">
                          Terms of Use
                        </a>
                        . I also agree to receive marketing communications from Nike.
                      </Label>
                    </div>
                    {errors.agreeToTerms && (
                      <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
                    )}

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Signing Up...' : 'Sign Up for Nike Email'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Newsletter;
