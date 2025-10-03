import React, { createContext, useContext, useState, useCallback } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  gender: 'men' | 'women' | 'kids' | 'unisex';
  ageGroup?: 'little-kids' | 'big-kids' | 'adult';
  brand: string;
  description: string;
  tags: string[];
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: Product[];
  isSearching: boolean;
  performSearch: (query: string) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Mock product database - in a real app, this would come from an API
const allProducts: Product[] = [
  {
    id: '1',
    name: 'Air Force Runner',
    price: 95.00,
    image: '/src/assets/shoe-1.jpg',
    category: 'Running',
    gender: 'unisex',
    brand: 'Nike',
    description: 'Experience unmatched comfort and performance with the Air Force Runner.',
    tags: ['running', 'comfort', 'performance', 'air', 'force']
  },
  {
    id: '2',
    name: 'Court Vision Pro',
    price: 120.00,
    image: '/src/assets/shoe-2.jpg',
    category: 'Basketball',
    gender: 'men',
    brand: 'Nike',
    description: 'Dominate the court with the Court Vision Pro basketball shoes.',
    tags: ['basketball', 'court', 'vision', 'pro', 'performance']
  },
  {
    id: '3',
    name: 'Flex Trainer',
    price: 85.00,
    image: '/src/assets/shoe-3.jpg',
    category: 'Training',
    gender: 'women',
    brand: 'Nike',
    description: 'Versatile training shoe perfect for gym workouts and fitness activities.',
    tags: ['training', 'flex', 'gym', 'fitness', 'versatile']
  },
  {
    id: '4',
    name: 'React Velocity',
    price: 105.00,
    image: '/src/assets/shoe-4.jpg',
    category: 'Running',
    gender: 'unisex',
    brand: 'Nike',
    description: 'Revolutionary running shoe with React foam technology.',
    tags: ['running', 'react', 'velocity', 'foam', 'technology']
  },
  {
    id: '5',
    name: 'Air Max Elite',
    price: 140.00,
    image: '/src/assets/shoe-1.jpg',
    category: 'Running',
    gender: 'men',
    brand: 'Nike',
    description: 'The future of running with advanced Air Max technology.',
    tags: ['air max', 'elite', 'running', 'future', 'technology']
  },
  {
    id: '6',
    name: 'Court Legend',
    price: 130.00,
    image: '/src/assets/shoe-2.jpg',
    category: 'Basketball',
    gender: 'men',
    brand: 'Nike',
    description: 'Elevated basketball performance with legendary court presence.',
    tags: ['basketball', 'court', 'legend', 'performance', 'elevated']
  },
  {
    id: '7',
    name: 'Air Max 270 Kids',
    price: 75.00,
    image: '/src/assets/shoe-3.jpg',
    category: 'Lifestyle',
    gender: 'kids',
    ageGroup: 'big-kids',
    brand: 'Nike',
    description: 'Comfortable and stylish shoes designed specifically for kids.',
    tags: ['kids', 'air max', 'lifestyle', 'comfortable', 'stylish']
  },
  {
    id: '8',
    name: 'Revolution 6 Women',
    price: 65.00,
    image: '/src/assets/shoe-4.jpg',
    category: 'Running',
    gender: 'women',
    ageGroup: 'adult',
    brand: 'Nike',
    description: 'Lightweight running shoes designed for women runners.',
    tags: ['women', 'running', 'revolution', 'lightweight', 'comfort']
  },
  {
    id: '9',
    name: 'Little Swoosh Sneakers',
    price: 45.00,
    image: '/src/assets/shoe-1.jpg',
    category: 'Lifestyle',
    gender: 'kids',
    ageGroup: 'little-kids',
    brand: 'Nike',
    description: 'Perfect first sneakers for toddlers and little kids.',
    tags: ['little kids', 'toddler', 'first shoes', 'comfortable', 'easy wear']
  },
  {
    id: '10',
    name: 'Youth Basketball Pro',
    price: 85.00,
    image: '/src/assets/shoe-2.jpg',
    category: 'Basketball',
    gender: 'kids',
    ageGroup: 'big-kids',
    brand: 'Nike',
    description: 'High-performance basketball shoes for young athletes.',
    tags: ['big kids', 'basketball', 'performance', 'youth', 'athletic']
  }
];

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = useCallback((query: string) => {
    setIsSearching(true);
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    // Simulate API delay
    setTimeout(() => {
      const results = allProducts.filter(product => {
        const searchTerm = query.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
          product.gender.toLowerCase().includes(searchTerm)
        );
      });

      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  }, []);

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      searchResults,
      isSearching,
      performSearch,
      clearSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

// Export the products for use in other components
export { allProducts };
