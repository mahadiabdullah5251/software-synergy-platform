
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Support = () => {
  return (
    <PageLayout 
      title="Support" 
      description="Get the help you need, when you need it"
      className="container mx-auto px-4 py-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <Card>
          <CardHeader>
            <CardTitle>Help Center</CardTitle>
            <CardDescription>Browse our extensive knowledge base</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our help center contains hundreds of articles to help you get the most out of SynergySoft products.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Browse Articles</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technical Support</CardTitle>
            <CardDescription>Get help from our technical experts</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our dedicated support team is available to help you solve any technical issues you may encounter.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Submit a Ticket</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Forum</CardTitle>
            <CardDescription>Connect with other users</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Join our active community to share ideas, ask questions, and learn from other SynergySoft users.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Join Community</Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
        <p className="mb-6">Our support team is available Monday through Friday, 9am to 5pm Eastern Time.</p>
        <div className="flex flex-col md:flex-row gap-4">
          <Button>Email Support</Button>
          <Button variant="outline">Call Us</Button>
          <Button variant="outline">Live Chat</Button>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Support;
