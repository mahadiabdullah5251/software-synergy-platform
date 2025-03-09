
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Copy, File, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PageLayout from '@/components/layout/PageLayout';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'core-concepts', name: 'Core Concepts' },
    { id: 'api-reference', name: 'API Reference' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'integrations', name: 'Integrations' },
    { id: 'troubleshooting', name: 'Troubleshooting' },
  ];
  
  const popularDocs = [
    { 
      title: 'Quick Start Guide', 
      description: 'Get up and running with SynergySoft in less than 10 minutes.',
      category: 'Getting Started',
      readTime: '5 min read'
    },
    { 
      title: 'API Authentication', 
      description: 'Learn how to authenticate with our API using OAuth 2.0 or API keys.',
      category: 'API Reference',
      readTime: '8 min read'
    },
    { 
      title: 'Data Model Overview', 
      description: 'Understand the core data model and how entities relate to each other.',
      category: 'Core Concepts',
      readTime: '12 min read'
    },
    { 
      title: 'Custom Reports', 
      description: 'Build powerful custom reports using our analytics engine.',
      category: 'Tutorials',
      readTime: '15 min read'
    },
    { 
      title: 'Salesforce Integration', 
      description: 'Step-by-step guide to integrating with Salesforce CRM.',
      category: 'Integrations',
      readTime: '10 min read'
    },
    { 
      title: 'Common Error Codes', 
      description: 'Reference for error codes and troubleshooting steps.',
      category: 'Troubleshooting',
      readTime: '7 min read'
    },
  ];
  
  const codeExample = `
// Initialize the SynergySoft client
const client = new SynergySoft.Client({
  apiKey: 'YOUR_API_KEY',
  environment: 'production'
});

// Fetch user data
const users = await client.users.list({
  limit: 10,
  include: ['profile', 'permissions']
});

// Log the results
console.log(\`Found \${users.length} users\`);
users.forEach(user => {
  console.log(\`\${user.name} (\${user.email})\`);
});
`;

  return (
    <PageLayout 
      title="Documentation" 
      description="Comprehensive guides and API reference to help you build great products with SynergySoft."
    >
      {/* Search Bar */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto relative"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search documentation..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-colors cursor-pointer"
              >
                <h3 className="font-medium">{category.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Docs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Popular Documentation
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDocs.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-colors cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <File className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{doc.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-primary">{doc.category}</span>
                      <span className="text-muted-foreground">{doc.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-2">Get Started with our API</h2>
              <p className="text-muted-foreground">
                Integrate with our platform using our powerful and flexible API.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-900 text-slate-50 p-6 rounded-lg shadow-lg relative"
            >
              <button 
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                aria-label="Copy code"
              >
                <Copy className="h-5 w-5" />
              </button>
              <pre className="font-mono text-sm overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-center"
            >
              <Button>View API Reference</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Quick Links
          </motion.h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Installation Guide",
              "Authentication",
              "Webhooks",
              "Error Handling",
              "Rate Limits",
              "Changelog",
              "SDKs & Libraries",
              "Examples & Templates",
              "FAQs",
            ].map((link, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-colors group"
              >
                <span className="group-hover:text-primary transition-colors">
                  {link}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Documentation;
