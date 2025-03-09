
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Check, Star, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Product } from '@/lib/types';
import { useToast } from '@/components/ui/use-toast';

// Mock products - in a real app, this would come from an API or context
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

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    // In a real app, you would fetch this from an API
    const foundProduct = mockProducts.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product?.name} has been added to your cart.`,
      duration: 3000,
    });
  };
  
  const handleDemo = () => {
    if (product?.demoUrl) {
      window.open(product.demoUrl, '_blank');
    } else {
      toast({
        title: "Demo not available",
        description: "Please contact sales for a personalized demo.",
        duration: 3000,
      });
    }
  };
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading product...</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/catalog" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Catalog
            </Link>
          </div>
          
          {/* Product Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800"
            >
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="mb-2">
                    {product.category}
                  </Badge>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                      <span className="ml-1 font-medium">{product.rating.toFixed(1)}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">${product.price}</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto"
                    onClick={handleDemo}
                  >
                    Request Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Tabs Section */}
          <Tabs 
            defaultValue="overview" 
            className="mb-16"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="mb-8 w-full justify-start border-b rounded-none bg-transparent">
              <TabsTrigger 
                value="overview"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="features"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none"
              >
                Features
              </TabsTrigger>
              <TabsTrigger 
                value="integrations"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none"
              >
                Integrations
              </TabsTrigger>
              <TabsTrigger 
                value="reviews"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
                <p className="mb-6">{product.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-2">Industry Best Practices</h3>
                      <p className="text-muted-foreground text-sm">
                        Built according to industry standards and best practices to ensure reliability and performance.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-2">Enterprise Ready</h3>
                      <p className="text-muted-foreground text-sm">
                        Scalable architecture designed to handle enterprise-level demands and workloads.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-2">24/7 Support</h3>
                      <p className="text-muted-foreground text-sm">
                        Around-the-clock support team ready to help you with any issues or questions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10" />
                  <img 
                    src={product.imageUrl} 
                    alt={`${product.name} overview`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm hover:bg-white">
                      Watch Demo Video
                    </Button>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="features" className="mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">{feature}</h3>
                        <p className="text-muted-foreground">
                          {`Experience the power of ${feature.toLowerCase()} with our advanced technology platform.`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Additional Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>User management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Role-based access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Data encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>API access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Custom branding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Webhooks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Automated backups</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Audit logs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>SSO integration</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="integrations" className="mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Integrations</h2>
                <p className="mb-8">
                  {product.name} seamlessly integrates with your favorite tools and services to enhance your workflow and productivity.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {product.integrations.map((integration, index) => (
                    <div 
                      key={index} 
                      className="border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-primary transition-colors"
                    >
                      <div className="h-16 w-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                        <span className="text-xl font-bold">
                          {integration.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-medium">{integration}</h3>
                    </div>
                  ))}
                </div>
                
                <div className="bg-primary/5 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Need a custom integration?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Our team can help you integrate with any service or platform not listed above. 
                    Contact our integration specialists to discuss your specific needs.
                  </p>
                  <Button>Contact Integration Team</Button>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
                    <p className="text-muted-foreground mb-4">
                      See what our customers are saying about {product.name}
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-6 w-6 ${star <= Math.round(product.rating) 
                            ? 'text-amber-500 fill-amber-500' 
                            : 'text-gray-300 dark:text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-3xl font-bold mb-1">{product.rating.toFixed(1)}/5.0</p>
                    <p className="text-muted-foreground">{product.reviewCount} reviews</p>
                  </div>
                </div>
                
                {/* Sample Reviews */}
                <div className="space-y-6 mb-8">
                  {/* Review 1 */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex justify-between mb-4">
                        <div>
                          <h4 className="font-medium">John Smith</h4>
                          <p className="text-sm text-muted-foreground">CTO, TechCorp</p>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= 5 
                                ? 'text-amber-500 fill-amber-500' 
                                : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p>
                        "{product.name} has transformed how we handle our operations. The intuitive interface and powerful features have made our team more productive than ever."
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Review 2 */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex justify-between mb-4">
                        <div>
                          <h4 className="font-medium">Emily Johnson</h4>
                          <p className="text-sm text-muted-foreground">Marketing Director, BrandGrowth</p>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= 4 
                                ? 'text-amber-500 fill-amber-500' 
                                : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p>
                        "We've seen significant improvements in our workflow since implementing {product.name}. Customer support has been exceptional whenever we needed assistance."
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Review 3 */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex justify-between mb-4">
                        <div>
                          <h4 className="font-medium">Michael Chen</h4>
                          <p className="text-sm text-muted-foreground">Operations Manager, GlobalTech</p>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= 5 
                                ? 'text-amber-500 fill-amber-500' 
                                : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p>
                        "The integration capabilities of {product.name} are unmatched. We've connected it with all our existing tools, creating a seamless workflow across the organization."
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="text-center">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
          
          {/* Related Products */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mockProducts
                .filter(p => p.id !== product.id && (p.category === product.category || p.tags.some(t => product.tags.includes(t))))
                .slice(0, 4)
                .map((relatedProduct) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <Link to={`/product/${relatedProduct.id}`}>
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={relatedProduct.imageUrl} 
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">{relatedProduct.name}</h3>
                        <div className="flex items-center mb-2">
                          <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                          <span className="text-xs ml-1">{relatedProduct.rating.toFixed(1)}</span>
                          <span className="text-xs text-muted-foreground ml-1">
                            ({relatedProduct.reviewCount})
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                          {relatedProduct.shortDescription}
                        </p>
                        <p className="font-semibold">${relatedProduct.price}/mo</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
