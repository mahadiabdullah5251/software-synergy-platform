
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Product } from '@/lib/types';

// Mock products - in a real app, this would come from an API
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Analytics Hub',
    description: 'Comprehensive analytics solution that provides deep insights into business performance, customer behavior, and market trends. Integrates with major data sources for real-time analysis.',
    shortDescription: 'Powerful analytics suite for B2B businesses with real-time insights.',
    price: 299,
    category: 'Analytics',
    features: [
      'Real-time dashboards',
      'Custom reporting',
      'Data visualization',
      'Predictive analytics',
      'API integrations'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
    integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'AWS'],
    demoUrl: 'https://demo.example.com/analytics',
    tags: ['Analytics', 'Business Intelligence', 'Data', 'Reports'],
    rating: 4.8,
    reviewCount: 147
  },
  {
    id: '2',
    name: 'DevOps Automator',
    description: 'End-to-end DevOps automation platform that streamlines CI/CD pipelines, infrastructure management, and deployment processes for software teams of all sizes.',
    shortDescription: 'Streamline development workflows with powerful automation tools.',
    price: 399,
    category: 'DevOps',
    features: [
      'CI/CD pipeline automation',
      'Infrastructure as code',
      'Containerization support',
      'Monitoring & alerting',
      'Security scanning'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1607743882420-4412ee605bac?q=80&w=2070',
    integrations: ['GitHub', 'GitLab', 'Jenkins', 'Docker', 'Kubernetes'],
    tags: ['DevOps', 'CI/CD', 'Automation', 'Cloud'],
    rating: 4.7,
    reviewCount: 112
  },
  {
    id: '3',
    name: 'SecureShield',
    description: 'Comprehensive security solution that protects business assets, monitors for threats, and ensures compliance with industry regulations.',
    shortDescription: 'Enterprise-grade security for businesses of all sizes.',
    price: 349,
    category: 'Security',
    features: [
      'Threat detection',
      'Compliance management',
      'Identity protection',
      'Data encryption',
      'Security auditing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070',
    integrations: ['AWS', 'Azure', 'Google Cloud', 'Okta'],
    tags: ['Security', 'Compliance', 'Protection', 'Enterprise'],
    rating: 4.9,
    reviewCount: 98
  },
  {
    id: '4',
    name: 'MarketingPro',
    description: 'All-in-one marketing automation platform designed for B2B companies to improve lead generation, nurture customer relationships, and maximize ROI.',
    shortDescription: 'Automate and optimize your marketing campaigns.',
    price: 249,
    category: 'Marketing',
    features: [
      'Campaign automation',
      'Lead scoring',
      'Email marketing',
      'Social media management',
      'Analytics & reporting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
    integrations: ['Salesforce', 'HubSpot', 'Mailchimp', 'Zapier'],
    tags: ['Marketing', 'Automation', 'Leads', 'Campaigns'],
    rating: 4.6,
    reviewCount: 156
  },
  {
    id: '5',
    name: 'CustomerCare CRM',
    description: 'Complete customer relationship management solution that helps businesses manage contacts, track leads, and nurture client relationships.',
    shortDescription: 'Manage customer relationships and boost retention.',
    price: 199,
    category: 'CRM',
    features: [
      'Contact management',
      'Sales pipeline',
      'Task automation',
      'Email campaigns',
      'Customer support'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070',
    integrations: ['Gmail', 'Outlook', 'Slack', 'Twilio'],
    tags: ['CRM', 'Sales', 'Customer Service', 'Management'],
    rating: 4.5,
    reviewCount: 203
  },
  {
    id: '6',
    name: 'TaskMaster',
    description: 'Productivity and project management tool that helps teams organize tasks, track progress, and meet deadlines consistently.',
    shortDescription: 'Boost team productivity with powerful project management.',
    price: 149,
    category: 'Productivity',
    features: [
      'Task management',
      'Project timelines',
      'Team collaboration',
      'Resource allocation',
      'Time tracking'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070',
    integrations: ['Google Workspace', 'Microsoft 365', 'Slack', 'Zoom'],
    tags: ['Productivity', 'Project Management', 'Teams', 'Tasks'],
    rating: 4.4,
    reviewCount: 178
  },
  {
    id: '7',
    name: 'AutoFlow',
    description: 'Business process automation platform that helps companies streamline workflows, reduce manual tasks, and improve operational efficiency.',
    shortDescription: 'Automate repetitive tasks and streamline business processes.',
    price: 299,
    category: 'Automation',
    features: [
      'Workflow automation',
      'Form processing',
      'Document management',
      'Integration capabilities',
      'Analytics dashboard'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
    integrations: ['Zapier', 'Slack', 'Google Drive', 'Dropbox'],
    tags: ['Automation', 'Workflow', 'Efficiency', 'Processes'],
    rating: 4.7,
    reviewCount: 132
  },
  {
    id: '8',
    name: 'CloudSecure',
    description: 'Cloud security solution that protects business data across multiple cloud platforms with advanced threat detection and compliance management.',
    shortDescription: 'Comprehensive cloud security for multi-cloud environments.',
    price: 399,
    category: 'Security',
    features: [
      'Multi-cloud protection',
      'Compliance monitoring',
      'Vulnerability scanning',
      'Access management',
      'Threat intelligence'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072',
    integrations: ['AWS', 'Azure', 'Google Cloud', 'IBM Cloud'],
    tags: ['Security', 'Cloud', 'Compliance', 'Enterprise'],
    rating: 4.8,
    reviewCount: 87
  }
];

const categories = ['All', 'Analytics', 'Automation', 'CRM', 'DevOps', 'Marketing', 'Productivity', 'Security'];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  
  useEffect(() => {
    const filtered = mockProducts.filter(product => {
      // Filter by search term
      const matchesSearch = 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Filter by category
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      // Filter by price
      let matchesPrice = true;
      if (priceRange === 'under200') {
        matchesPrice = product.price < 200;
      } else if (priceRange === '200to300') {
        matchesPrice = product.price >= 200 && product.price <= 300;
      } else if (priceRange === 'over300') {
        matchesPrice = product.price > 300;
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
    
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, priceRange]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-slate-50 dark:bg-slate-900/50 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Product Catalog</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Browse our curated collection of digital products designed to optimize your business operations.
              </p>
              <div className="flex items-center max-w-lg mx-auto">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow"
                />
                <Button className="ml-2">Search</Button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Product Listing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters */}
              <div className="lg:col-span-1">
                <motion.div
                  className="sticky top-24 space-y-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <h3 className="text-xl font-medium mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategory === category}
                            onCheckedChange={() => setSelectedCategory(category)}
                          />
                          <Label
                            htmlFor={`category-${category}`}
                            className="ml-2 text-sm font-medium cursor-pointer"
                          >
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-4">Price Range</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Checkbox
                          id="price-all"
                          checked={priceRange === 'all'}
                          onCheckedChange={() => setPriceRange('all')}
                        />
                        <Label
                          htmlFor="price-all"
                          className="ml-2 text-sm font-medium cursor-pointer"
                        >
                          All Prices
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox
                          id="price-under200"
                          checked={priceRange === 'under200'}
                          onCheckedChange={() => setPriceRange('under200')}
                        />
                        <Label
                          htmlFor="price-under200"
                          className="ml-2 text-sm font-medium cursor-pointer"
                        >
                          Under $200
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox
                          id="price-200to300"
                          checked={priceRange === '200to300'}
                          onCheckedChange={() => setPriceRange('200to300')}
                        />
                        <Label
                          htmlFor="price-200to300"
                          className="ml-2 text-sm font-medium cursor-pointer"
                        >
                          $200 - $300
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox
                          id="price-over300"
                          checked={priceRange === 'over300'}
                          onCheckedChange={() => setPriceRange('over300')}
                        />
                        <Label
                          htmlFor="price-over300"
                          className="ml-2 text-sm font-medium cursor-pointer"
                        >
                          Over $300
                        </Label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-4">Sort By</h3>
                    <Select defaultValue="featured">
                      <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>
              </div>
              
              {/* Products Grid */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex justify-between items-center">
                  <p className="text-muted-foreground">
                    Showing {filteredProducts.length} of {mockProducts.length} products
                  </p>
                  <Select defaultValue="grid">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="View" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grid">Grid View</SelectItem>
                      <SelectItem value="list">List View</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-medium mb-2">No products found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
