
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import ValueProposition from '@/components/sections/ValueProposition';
import { Button } from '@/components/ui/button';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Company logos for trusted partners section
  const trustedCompanies = [
    { name: "TechCorp", logo: "/techcorp-logo.png" },
    { name: "InnovateSoft", logo: "/innovatesoft-logo.png" },
    { name: "DataFlow", logo: "/dataflow-logo.png" },
    { name: "CloudNexus", logo: "/cloudnexus-logo.png" },
    { name: "SecureEdge", logo: "/secureedge-logo.png" },
    { name: "DevStream", logo: "/devstream-logo.png" },
    { name: "QuantumIT", logo: "/quantumit-logo.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <ValueProposition />
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to transform your business?
                </h2>
                <p className="text-white/80 text-lg mb-6">
                  Join thousands of businesses that are already leveraging our platform to optimize operations, 
                  increase efficiency, and drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                    Schedule a Demo
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" 
                  alt="Team collaboration" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-muted-foreground font-medium">Trusted by industry leaders</p>
            </div>
            
            <div className="relative">
              {/* First row of logos with animation */}
              <motion.div 
                className="flex items-center gap-8 md:gap-16"
                initial={{ x: 0 }}
                animate={{ x: "-20%" }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "mirror", 
                  duration: 20, 
                  ease: "linear" 
                }}
              >
                {trustedCompanies.map((company, i) => (
                  <div key={i} className="flex flex-col items-center justify-center min-w-[140px]">
                    <div className="h-10 w-36 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center">
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                        {company.name}
                      </span>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate first few items to ensure smooth loop */}
                {trustedCompanies.slice(0, 3).map((company, i) => (
                  <div key={`dup-${i}`} className="flex flex-col items-center justify-center min-w-[140px]">
                    <div className="h-10 w-36 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center">
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                        {company.name}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
