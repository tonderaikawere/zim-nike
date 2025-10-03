import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import womenCollection from "@/assets/women-collection.jpg";
import shoe1 from "@/assets/shoe-1.jpg";
import shoe2 from "@/assets/shoe-2.jpg";
import shoe3 from "@/assets/shoe-3.jpg";
import shoe4 from "@/assets/shoe-4.jpg";
import { Filter, Heart } from "lucide-react";

const products = [
  { id: 1, name: "Air Zoom Tempo", price: "$130.00", category: "Running", image: shoe1 },
  { id: 2, name: "Court Vision Mid", price: "$115.00", category: "Lifestyle", image: shoe2 },
  { id: 3, name: "Free Metcon 4", price: "$105.00", category: "Training", image: shoe3 },
  { id: 4, name: "React Miler", price: "$120.00", category: "Running", image: shoe4 },
  { id: 5, name: "Air Max Bella", price: "$95.00", category: "Training", image: shoe1 },
  { id: 6, name: "Blazer Mid '77", price: "$100.00", category: "Lifestyle", image: shoe2 },
  { id: 7, name: "Pegasus 39", price: "$125.00", category: "Running", image: shoe3 },
  { id: 8, name: "Flex Essential", price: "$85.00", category: "Training", image: shoe4 },
];

const Women = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-[400px] bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={womenCollection} alt="Women's Collection" className="w-full h-full object-cover" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              Women's Collection
            </h1>
            <p className="text-xl text-white/90 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Empowering every stride. Performance meets style in our women's collection.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <aside className="md:w-64 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filters
                  </h3>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Category</h4>
                    <div className="space-y-2">
                      {["All", "Running", "Training", "Lifestyle", "Walking"].map((cat) => (
                        <label key={cat} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" defaultChecked={cat === "All"} />
                          <span className="text-sm">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Price Range</h4>
                    <div className="space-y-2">
                      {["Under $100", "$100 - $150", "Over $150"].map((range) => (
                        <label key={range} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Size</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {["5", "6", "7", "8", "9", "10"].map((size) => (
                        <Button key={size} variant="outline" size="sm">
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              <div className="flex-1">
                <div className="mb-6 flex justify-between items-center">
                  <p className="text-muted-foreground">Showing {products.length} products</p>
                  <select className="border rounded-md px-4 py-2 text-sm">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product, index) => (
                    <Card
                      key={product.id}
                      className="group cursor-pointer border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg overflow-hidden animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden bg-muted">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
                          >
                            <Heart className="h-5 w-5" />
                          </Button>
                          <div className="absolute bottom-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            {product.category}
                          </div>
                        </div>
                        <div className="p-6 space-y-2">
                          <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-2xl font-bold">{product.price}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Women;
