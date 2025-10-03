import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { MapPin, Phone, Clock, Navigation, Search } from 'lucide-react';

const stores = [
  {
    id: 1,
    name: "Nike Store - Downtown",
    address: "123 Main Street, Downtown, City 12345",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
    distance: "0.5 miles",
    services: ["Nike By You", "Member Services", "Returns & Exchanges"]
  },
  {
    id: 2,
    name: "Nike Outlet - Mall Plaza",
    address: "456 Shopping Center Blvd, Mall Plaza, City 12346",
    phone: "+1 (555) 234-5678",
    hours: "Mon-Sat: 9AM-10PM, Sun: 10AM-8PM",
    distance: "2.3 miles",
    services: ["Outlet Prices", "Returns & Exchanges", "Gift Cards"]
  },
  {
    id: 3,
    name: "Nike Running Store",
    address: "789 Athletic Avenue, Sports District, City 12347",
    phone: "+1 (555) 345-6789",
    hours: "Mon-Fri: 10AM-8PM, Sat-Sun: 9AM-9PM",
    distance: "3.1 miles",
    services: ["Running Analysis", "Nike By You", "Member Services"]
  },
  {
    id: 4,
    name: "Nike Factory Store",
    address: "321 Outlet Drive, Factory District, City 12348",
    phone: "+1 (555) 456-7890",
    hours: "Daily: 9AM-9PM",
    distance: "5.7 miles",
    services: ["Factory Prices", "Bulk Orders", "Returns & Exchanges"]
  }
];

const StoreLocator = () => {
  useScrollToTop();
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredStores, setFilteredStores] = useState(stores);

  const handleSearch = () => {
    if (!searchLocation.trim()) {
      setFilteredStores(stores);
      return;
    }
    
    const filtered = stores.filter(store => 
      store.name.toLowerCase().includes(searchLocation.toLowerCase()) ||
      store.address.toLowerCase().includes(searchLocation.toLowerCase())
    );
    setFilteredStores(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Find a Nike Store</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Discover Nike stores near you. Get directions, store hours, and services available at each location.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Enter city, state, or zip code"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10 bg-background text-foreground"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button onClick={handleSearch} variant="secondary">
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Store Results */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Nike Stores Near You</h2>
              <p className="text-muted-foreground">
                {filteredStores.length} store{filteredStores.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Store List */}
              <div className="space-y-6">
                {filteredStores.map((store) => (
                  <Card key={store.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{store.name}</h3>
                          <p className="text-secondary font-medium">{store.distance} away</p>
                        </div>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Navigation className="h-4 w-4" />
                          Directions
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                        <p className="text-muted-foreground">{store.address}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-secondary" />
                        <p className="text-muted-foreground">{store.phone}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-secondary" />
                        <p className="text-muted-foreground">{store.hours}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Services Available:</h4>
                        <div className="flex flex-wrap gap-2">
                          {store.services.map((service, index) => (
                            <span
                              key={index}
                              className="bg-muted px-3 py-1 rounded-full text-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1">
                          Call Store
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Store Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="lg:sticky lg:top-8">
                <Card className="h-[600px]">
                  <CardContent className="p-0 h-full">
                    <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                        <p className="text-muted-foreground">
                          Map integration would be implemented here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Store Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nike Store Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the full range of Nike services at our retail locations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👟</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Nike By You</h3>
                  <p className="text-muted-foreground text-sm">
                    Customize your shoes with our personalization service
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏃</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Running Analysis</h3>
                  <p className="text-muted-foreground text-sm">
                    Get your gait analyzed to find the perfect running shoe
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎁</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Member Services</h3>
                  <p className="text-muted-foreground text-sm">
                    Exclusive member benefits and personalized service
                  </p>
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

export default StoreLocator;
