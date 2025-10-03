import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

export const NewsletterSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex p-4 rounded-full bg-secondary/20">
              <Mail className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Stay in the Loop</h2>
            <p className="text-lg text-primary-foreground/80">
              Be the first to know about new releases, exclusive offers, and athlete stories. Join our community of champions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-1"
            />
            <Button variant="secondary" size="lg" className="sm:w-auto">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};
