
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Partners = () => {
  const partnerCategories = [
    {
      title: "Technology Partners",
      description: "Companies that integrate their technology with SynergySoft",
      partners: [
        "CloudTech Solutions",
        "DataSync Systems",
        "IntegrateHub",
        "APIConnect"
      ]
    },
    {
      title: "Solution Partners",
      description: "Companies that build solutions on top of SynergySoft",
      partners: [
        "EnterpriseWorks",
        "BusinessSuite",
        "DataDrivenSolutions",
        "SmartProcess Systems"
      ]
    },
    {
      title: "Service Partners",
      description: "Companies that provide services for SynergySoft",
      partners: [
        "Implementation Experts",
        "Training Solutions",
        "Support Systems",
        "Consulting Group"
      ]
    }
  ];

  return (
    <PageLayout 
      title="Partners" 
      description="Grow your business with our partner ecosystem"
      className="container mx-auto px-4 py-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Partner Ecosystem</h2>
          <p className="text-lg text-muted-foreground">
            Whether you're looking to integrate with our platform, build solutions on top of it, or provide services to our customers,
            we have a partnership program for you.
          </p>
          <div className="mt-8">
            <Button size="lg">Become a Partner</Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-8">Our Partner Categories</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partnerCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.partners.map((partner, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {partner}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Partner Benefits</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Co-Marketing</h3>
            <p className="text-sm text-muted-foreground">Joint marketing activities to promote our partnership</p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Technical Support</h3>
            <p className="text-sm text-muted-foreground">Dedicated technical support for integration</p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Training Resources</h3>
            <p className="text-sm text-muted-foreground">Access to training materials and certifications</p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Revenue Sharing</h3>
            <p className="text-sm text-muted-foreground">Competitive commission structure on referrals</p>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Partners;
