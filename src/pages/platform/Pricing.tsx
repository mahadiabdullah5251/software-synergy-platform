
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PageLayout from '@/components/layout/PageLayout';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  
  const plans = [
    {
      name: "Starter",
      description: "Everything you need to get started with basic features",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Up to 5 team members",
        "Basic analytics dashboard",
        "10GB storage",
        "Email support",
        "API access",
        "Basic integrations"
      ],
      highlighted: false,
      ctaText: "Start Free Trial"
    },
    {
      name: "Professional",
      description: "Advanced features for growing businesses",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "50GB storage",
        "Priority email & chat support",
        "Advanced API access",
        "Premium integrations",
        "Workflow automation",
        "Custom reporting"
      ],
      highlighted: true,
      ctaText: "Start Free Trial",
      popularLabel: "Most Popular"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      monthlyPrice: 249,
      annualPrice: 199,
      features: [
        "Unlimited team members",
        "Enterprise analytics",
        "500GB storage",
        "24/7 phone, email & chat support",
        "Full API access",
        "All integrations",
        "Advanced automation",
        "Custom reporting",
        "Dedicated account manager",
        "SLA guarantees"
      ],
      highlighted: false,
      ctaText: "Contact Sales",
      contactSales: true
    }
  ];

  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial on our Starter and Professional plans with no credit card required."
    },
    {
      question: "Can I change plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and for annual enterprise plans, we can also accept wire transfers."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans. You only pay the advertised subscription price."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. For monthly plans, you won't be charged for the next month. For annual plans, we offer prorated refunds."
    }
  ];

  return (
    <PageLayout 
      title="Simple, Transparent Pricing" 
      description="Choose the plan that fits your business needs. All plans include a 14-day free trial."
    >
      {/* Pricing Toggle */}
      <section className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'monthly' 
                    ? 'bg-white dark:bg-slate-700 shadow-sm' 
                    : 'text-muted-foreground'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'annual' 
                    ? 'bg-white dark:bg-slate-700 shadow-sm' 
                    : 'text-muted-foreground'
                }`}
                onClick={() => setBillingCycle('annual')}
              >
                Annual (20% off)
              </button>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm border ${
                  plan.highlighted 
                    ? 'border-primary shadow-lg scale-105 relative z-10' 
                    : 'border-slate-200 dark:border-slate-700'
                }`}
              >
                {plan.popularLabel && (
                  <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {plan.popularLabel}
                    </span>
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-muted-foreground">
                      /month{billingCycle === 'annual' && ', billed annually'}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full mb-6" 
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.ctaText}
                  </Button>
                  
                  <div className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="text-primary h-4 w-4 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="max-w-3xl mx-auto divide-y divide-slate-200 dark:divide-slate-700">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="py-6"
              >
                <div className="flex items-start">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex">
                        <h3 className="text-lg font-semibold">{faq.question}</h3>
                        <HelpCircle className="h-5 w-5 text-muted-foreground ml-2 mt-0.5" />
                      </TooltipTrigger>
                      <TooltipContent>Click to expand</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-muted-foreground mt-2">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our sales team to discuss your specific requirements and get a tailored solution for your enterprise.
            </p>
            <Button size="lg">Contact Sales</Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;
