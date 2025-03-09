
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';

const Features = () => {
  const features = [
    {
      title: "Enterprise-Grade Security",
      description: "Bank-level security with encryption at rest and in transit, role-based access control, and compliance with industry standards.",
      icon: "🔒"
    },
    {
      title: "Advanced Analytics",
      description: "Gain deep insights with real-time dashboards, custom reports, and predictive analytics powered by machine learning.",
      icon: "📊"
    },
    {
      title: "Workflow Automation",
      description: "Streamline operations with powerful automation tools that reduce manual tasks and eliminate human error.",
      icon: "⚙️"
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing tools through our extensive API library and pre-built integrations.",
      icon: "🔄"
    },
    {
      title: "Scalable Infrastructure",
      description: "Built on cloud-native architecture that scales with your business from startup to enterprise.",
      icon: "🚀"
    },
    {
      title: "Collaborative Workspace",
      description: "Enable team collaboration with shared projects, real-time editing, and communication tools.",
      icon: "👥"
    }
  ];

  const featureList = [
    "Single sign-on capabilities",
    "Real-time data synchronization",
    "Custom branding options",
    "Audit logs and compliance reporting",
    "Advanced permission settings",
    "Automated backup and recovery",
    "Multi-language support",
    "White-label solutions",
    "24/7 system monitoring"
  ];

  return (
    <PageLayout 
      title="Powerful Features" 
      description="Discover the comprehensive set of tools and capabilities that make SynergySoft the leading choice for businesses."
    >
      {/* Core Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature List */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Everything You Need to Succeed
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featureList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Features;
