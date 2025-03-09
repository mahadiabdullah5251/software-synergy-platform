
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';

const Solutions = () => {
  const industries = [
    {
      name: "Financial Services",
      description: "Streamline compliance, automate reporting, and enhance customer experiences with our financial services solutions.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470",
      benefits: [
        "Automated compliance monitoring",
        "Secure client portals",
        "Risk assessment tools"
      ]
    },
    {
      name: "Healthcare",
      description: "Improve patient outcomes while reducing administrative burden with our HIPAA-compliant healthcare solutions.",
      image: "https://images.unsplash.com/photo-1581595219315-4f0259e345a1?q=80&w=1470",
      benefits: [
        "Patient record management",
        "Appointment scheduling",
        "Billing automation"
      ]
    },
    {
      name: "Manufacturing",
      description: "Optimize production processes, manage supply chains, and reduce waste with our manufacturing solutions.",
      image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80&w=1470",
      benefits: [
        "Inventory tracking",
        "Quality control systems",
        "Predictive maintenance"
      ]
    },
    {
      name: "Retail",
      description: "Create seamless omnichannel experiences, manage inventory, and personalize customer interactions.",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1470",
      benefits: [
        "POS integration",
        "Customer loyalty programs",
        "Inventory management"
      ]
    }
  ];

  const useCases = [
    {
      title: "Operational Efficiency",
      description: "Streamline processes and eliminate redundancies to reduce costs and increase productivity.",
      icon: "⚡"
    },
    {
      title: "Customer Experience",
      description: "Create personalized, seamless interactions across all touchpoints to increase satisfaction and loyalty.",
      icon: "😊"
    },
    {
      title: "Data Management",
      description: "Centralize, organize, and analyze your data to make better-informed business decisions.",
      icon: "📊"
    },
    {
      title: "Team Collaboration",
      description: "Enable seamless communication and collaboration regardless of team location or time zone.",
      icon: "🤝"
    }
  ];

  return (
    <PageLayout 
      title="Enterprise Solutions" 
      description="Tailored software solutions designed to address your industry-specific challenges and drive business growth."
    >
      {/* Industry Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Solutions By Industry
          </motion.h2>
          
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}
              >
                <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                  <h3 className="text-2xl font-bold mb-4">{industry.name}</h3>
                  <p className="text-muted-foreground mb-6">{industry.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {industry.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button>
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className={`rounded-xl overflow-hidden shadow-lg ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Common Use Cases</h2>
            <p className="text-muted-foreground">
              Our platform is designed to solve a wide range of business challenges 
              across departments and industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
              >
                <div className="text-3xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Solutions;
