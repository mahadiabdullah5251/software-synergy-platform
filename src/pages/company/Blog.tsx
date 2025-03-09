
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PageLayout from '@/components/layout/PageLayout';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    "All",
    "Product Updates",
    "Case Studies",
    "Industry Insights",
    "Development",
    "Company News"
  ];
  
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways to Optimize Your Business Operations with Software",
      excerpt: "Discover how the right software solutions can streamline your business operations and boost overall efficiency.",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472",
      author: "Alex Johnson",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470",
      date: "June 12, 2023",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Introducing Our New Analytics Dashboard",
      excerpt: "Our latest product update brings powerful new analytics features to help you make data-driven decisions.",
      category: "Product Updates",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415",
      author: "Sarah Chen",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287",
      date: "May 28, 2023",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "How TechCorp Increased Productivity by 35% with SynergySoft",
      excerpt: "Learn how TechCorp implemented our solutions to dramatically improve their team's productivity and collaboration.",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470",
      author: "Marcus Williams",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287",
      date: "May 15, 2023",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "The Future of Enterprise Software: AI and Automation",
      excerpt: "Explore how artificial intelligence and automation are reshaping the enterprise software landscape.",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470",
      author: "Elena Rodriguez",
      authorAvatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1374",
      date: "April 30, 2023",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "SynergySoft Named Top Enterprise Solution Provider",
      excerpt: "We're proud to announce that SynergySoft has been recognized as a top enterprise solution provider.",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1287",
      author: "Alex Johnson",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470",
      date: "April 18, 2023",
      readTime: "2 min read"
    },
    {
      id: 6,
      title: "Best Practices for Implementing Enterprise Software",
      excerpt: "Follow these best practices to ensure a smooth and successful enterprise software implementation.",
      category: "Development",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470",
      author: "Sarah Chen",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287",
      date: "April 5, 2023",
      readTime: "8 min read"
    }
  ];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout 
      title="Blog" 
      description="Insights, updates, and expert perspectives on enterprise software and digital transformation."
    >
      {/* Search and Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-1/3 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-72 md:h-auto">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-sm font-medium text-primary mb-2">
                    {filteredPosts[0].category}
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{filteredPosts[0].excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={filteredPosts[0].authorAvatar} 
                        alt={filteredPosts[0].author} 
                        className="h-10 w-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <div className="font-medium">{filteredPosts[0].author}</div>
                        <div className="text-sm text-muted-foreground">
                          {filteredPosts[0].date} · {filteredPosts[0].readTime}
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="gap-1">
                      Read
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={post.authorAvatar} 
                        alt={post.author} 
                        className="h-8 w-8 rounded-full object-cover mr-2"
                      />
                      <div className="text-sm">
                        <div className="font-medium">{post.author}</div>
                        <div className="text-muted-foreground">
                          {post.date}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No posts found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest insights and updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow"
              />
              <Button>Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
