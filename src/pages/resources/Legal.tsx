
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Legal = () => {
  return (
    <PageLayout 
      title="Legal" 
      description="Terms, policies, and legal information"
      className="container mx-auto px-4 py-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Tabs defaultValue="terms" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-4">
            <TabsTrigger value="terms">Terms of Service</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="cookies">Cookie Policy</TabsTrigger>
            <TabsTrigger value="licenses">Licenses</TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="terms">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
                  <p className="text-muted-foreground mb-4">Last updated: March 1, 2025</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h3>
                      <p>By accessing or using SynergySoft services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">2. Use License</h3>
                      <p>Permission is granted to temporarily use SynergySoft services for personal, non-commercial transitory viewing only.</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">3. Disclaimer</h3>
                      <p>The materials on SynergySoft's website are provided on an 'as is' basis. SynergySoft makes no warranties, expressed or implied, and hereby disclaims all warranties.</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">4. Limitations</h3>
                      <p>In no event shall SynergySoft or its suppliers be liable for any damages arising out of the use or inability to use SynergySoft services.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="privacy">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
                  <p className="text-muted-foreground mb-4">Last updated: February 15, 2025</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">1. Information Collection</h3>
                      <p>We collect information when you register on our site, place an order, subscribe to a newsletter, or fill out a form.</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">2. Information Use</h3>
                      <p>Any information we collect from you may be used to personalize your experience, improve our website, improve customer service, or process transactions.</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">3. Information Protection</h3>
                      <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or access your personal information.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="cookies">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
                  <p className="text-muted-foreground mb-4">Last updated: January 30, 2025</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">1. What Are Cookies</h3>
                      <p>Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">2. How We Use Cookies</h3>
                      <p>We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="licenses">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">License Information</h2>
                  <p className="text-muted-foreground mb-4">Last updated: March 10, 2025</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Software Licenses</h3>
                      <p>SynergySoft products are licensed, not sold. Your rights to use the software are governed by the terms of the license agreement that accompanies the software.</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Third-Party Licenses</h3>
                      <p>SynergySoft products may include third-party software components. The use of these components is subject to the license terms provided with the product.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold mb-6">Legal Contacts</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Legal Department</h3>
                <p className="text-sm text-muted-foreground mb-1">For legal inquiries:</p>
                <p className="text-sm">legal@synergysoft.example.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Privacy Questions</h3>
                <p className="text-sm text-muted-foreground mb-1">For privacy-related concerns:</p>
                <p className="text-sm">privacy@synergysoft.example.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Compliance</h3>
                <p className="text-sm text-muted-foreground mb-1">For compliance questions:</p>
                <p className="text-sm">compliance@synergysoft.example.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Mailing Address</h3>
                <p className="text-sm text-muted-foreground mb-1">SynergySoft Legal Department</p>
                <p className="text-sm">123 Tech Way, Suite 400</p>
                <p className="text-sm">San Francisco, CA 94107</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </PageLayout>
  );
};

export default Legal;
