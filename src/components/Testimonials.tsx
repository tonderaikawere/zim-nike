import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Tendai Moyo",
    location: "Harare",
    rating: 5,
    comment: "Best running shoes I've ever owned! Perfect for my morning runs around the park.",
    phone: "+263 77 123 4567",
  },
  {
    id: 2,
    name: "Rumbidzai Chikwanha",
    location: "Bulawayo",
    rating: 5,
    comment: "The quality is outstanding and they're so comfortable. Worth every dollar!",
    phone: "+263 71 234 5678",
  },
  {
    id: 3,
    name: "Tafara Ndlovu",
    location: "Mutare",
    rating: 5,
    comment: "Great for basketball practice. The grip is incredible and they look amazing too.",
    phone: "+263 78 345 6789",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real experiences from real people across Zimbabwe
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed">{testimonial.comment}</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.phone}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
