
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/ProductCard';
import { Product } from '@/lib/types';
import { motion } from 'framer-motion';

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
  }
];

const FeaturedProducts = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <motion.span
              className="block text-sm font-medium text-primary mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Products
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Popular Solutions
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover our most popular digital products that help businesses like yours scale efficiently.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 md:mt-0"
          >
            <Button variant="outline">View All Products</Button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProductCard
                product={product}
                featured={index === 0}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
