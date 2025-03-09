
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';

const Careers = () => {
  const perks = [
    {
      title: "Flexible Work",
      description: "Work from anywhere with flexible hours that fit your lifestyle.",
      icon: "🌍"
    },
    {
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision coverage for you and your family.",
      icon: "🏥"
    },
    {
      title: "Competitive Pay",
      description: "Above-industry salaries with equity options and performance bonuses.",
      icon: "💰"
    },
    {
      title: "Professional Growth",
      description: "Dedicated learning budget and career development opportunities.",
      icon: "📈"
    },
    {
      title: "Work-Life Balance",
      description: "Generous PTO, paid parental leave, and wellness programs.",
      icon: "⚖️"
    },
    {
      title: "Team Events",
      description: "Regular team retreats, social events, and volunteer opportunities.",
      icon: "🎉"
    }
  ];

  const openPositions = [
    {
      title: "Senior Backend Developer",
      department: "Engineering",
      location: "Remote (US/Europe)",
      type: "Full-time"
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote (Worldwide)",
      type: "Full-time"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "London, UK",
      type: "Full-time"
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote (US)",
      type: "Full-time"
    }
  ];

  const values = [
    "Radical candor and transparency",
    "Deep respect for our customers",
    "Bias for action and outcomes",
    "Continuous learning and growth",
    "Inclusive and diverse teams",
    "Work-life integration"
  ];

  return (
    <PageLayout 
      title="Careers at SynergySoft" 
      description="Join our team and help build the future of enterprise software. Discover exciting opportunities across engineering, design, sales, marketing, and more."
    >
      {/* Hero Video */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-black">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470" 
            alt="Team collaboration" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="container mx-auto px-4 h-full relative z-20 flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Do the best work of your life
            </h2>
            <p className="text-white/90 text-lg mb-8">
              At SynergySoft, we're solving complex challenges that impact businesses 
              worldwide. Join us in building products that matter.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <p className="text-muted-foreground mb-4">
                We're building a company where people are excited to come to work every day. 
                Our culture is founded on trust, autonomy, and a genuine passion for solving 
                customer problems.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe in giving people the freedom to do their best work, providing the 
                resources they need to succeed, and celebrating wins together as a team.
              </p>
              
              <div className="space-y-3 mb-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-primary h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="gap-2">
                Read more about our culture
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471"
                alt="Team meeting"
                className="rounded-lg h-40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374"
                alt="Office space"
                className="rounded-lg h-40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470"
                alt="Team event"
                className="rounded-lg h-40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470"
                alt="Whiteboard session"
                className="rounded-lg h-40 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Perks & Benefits</h2>
            <p className="text-muted-foreground">
              We believe in taking care of our team with competitive compensation
              and benefits that help you thrive both personally and professionally.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
              >
                <div className="text-3xl mb-4">{perk.icon}</div>
                <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
                <p className="text-muted-foreground">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground">
              Join our team and help us build products that transform how businesses operate.
              We're always looking for talented individuals to join our mission.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold mb-1">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{position.department}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="text-muted-foreground">
                      {position.type}
                    </div>
                  </div>
                </div>
                <Button className="flex-shrink-0">Apply Now</Button>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground mb-4">
              Don't see a position that matches your skills?
            </p>
            <Button variant="outline">
              Send us your resume
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
