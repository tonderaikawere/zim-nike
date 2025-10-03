import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import shoe1 from "@/assets/shoe-1.jpg";
import shoe2 from "@/assets/shoe-2.jpg";
import shoe3 from "@/assets/shoe-3.jpg";
import shoe4 from "@/assets/shoe-4.jpg";
import { Filter, Heart, Tag } from "lucide-react";

const products = [
  { id: 1, name: "Air Zoom Structure", originalPrice: "$150.00", salePrice: "$95.00", discount: "37%", image: shoe1 },
  { id: 2, name: "Kyrie Low 4", originalPrice: "$130.00", salePrice: "$85.00", discount: "35%", image: shoe2 },
  { id: 3, name: "Revolution 6", originalPrice: "$85.00", salePrice: "$55.00", discount: "35%", image: shoe3 },
  { id: 4, name: "Renew Run 2", originalPrice: "$100.00", salePrice: "$65.00", discount: "35%", image: shoe4 },
  { id: 5, name: "Downshifter 11", originalPrice: "$75.00", salePrice: "$50.00", discount: "33%", image: shoe1 },
  { id: 6, name: "Precision 5", originalPrice: "$120.00", salePrice: "$75.00", discount: "38%", image: shoe2 },
  { id: 7, name: "Flex Control 4", originalPrice: "$95.00", salePrice: "$60.00", discount: "37%", image: shoe3 },
  { id: 8, name: "Tanjun", originalPrice: "$70.00", salePrice: "$45.00", discount: "36%", image: shoe4 },
];

const Sale = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-[400px] bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white overflow-hidden">
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4 animate-fade-in">
              <Tag className="h-8 w-8" />
              <Badge className="bg-white text-red-600 text-lg px-4 py-1">Up to 40% OFF</Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Sale Collection
            </h1>
            <p className="text-xl text-white/90 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Don't miss out on incredible deals. Limited time offers on premium footwear.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8 p-6 bg-secondary/10 rounded-lg border-2 border-secondary/20">
              <div className="flex items-center gap-4">
                <Tag className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-bold text-lg">Flash Sale Active!</h3>
                  <p className="text-sm text-muted-foreground">Extra 10% off with code: <span className="font-bold text-secondary">FLASH10</span> at checkout</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <aside className="md:w-64 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filters
                  </h3>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Discount</h4>
                    <div className="space-y-2">
                      {["All Discounts", "30% or more", "40% or more", "50% or more"].map((discount) => (
                        <label key={discount} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" defaultChecked={discount === "All Discounts"} />
                          <span className="text-sm">{discount}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Category</h4>
                    <div className="space-y-2">
                      {["All", "Running", "Basketball", "Training", "Lifestyle"].map((cat) => (
                        <label key={cat} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" defaultChecked={cat === "All"} />
                          <span className="text-sm">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Size</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {["7", "8", "9", "10", "11", "12"].map((size) => (
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
                  <p className="text-muted-foreground">Showing {products.length} sale items</p>
                  <select className="border rounded-md px-4 py-2 text-sm">
                    <option>Featured</option>
                    <option>Discount: High to Low</option>
                    <option>Price: Low to High</option>
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
                          <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                            {product.discount} OFF
                          </Badge>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
                          >
                            <Heart className="h-5 w-5" />
                          </Button>
                        </div>
                        <div className="p-6 space-y-2">
                          <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-3">
                            <p className="text-2xl font-bold text-red-600">{product.salePrice}</p>
                            <p className="text-sm text-muted-foreground line-through">{product.originalPrice}</p>
                          </div>
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

export default Sale;
