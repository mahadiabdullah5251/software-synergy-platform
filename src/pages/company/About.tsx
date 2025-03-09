
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';

const About = () => {
  const stats = [
    { value: '8+', label: 'Years in Business' },
    { value: '500+', label: 'Clients Worldwide' },
    { value: '50+', label: 'Team Members' },
    { value: '99.9%', label: 'Uptime Guarantee' }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287",
      bio: "With over 15 years of industry experience, Alex founded SynergySoft with a vision to transform how businesses leverage technology."
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288",
      bio: "Sarah leads our technical vision and development. She brings expertise from her previous roles at leading tech companies."
    },
    {
      name: "Marcus Williams",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287",
      bio: "Marcus ensures our products solve real customer problems and deliver exceptional user experiences."
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Customer Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361",
      bio: "Elena champions our customers' needs and ensures our solutions drive measurable business outcomes."
    }
  ];

  const values = [
    {
      title: "Customer Success",
      description: "We're committed to our customers' success and measure our own success by their outcomes.",
      icon: "🌟"
    },
    {
      title: "Innovation",
      description: "We continuously push boundaries and embrace new technologies to solve complex problems.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "We operate with transparency and honesty in all our interactions and decisions.",
      icon: "🤝"
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer support.",
      icon: "🏆"
    }
  ];

  return (
    <PageLayout 
      title="About SynergySoft" 
      description="We're on a mission to help businesses thrive in the digital era through innovative software solutions."
    >
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, SynergySoft began with a simple yet powerful vision: to make 
                enterprise-grade software accessible to businesses of all sizes.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small team of passionate engineers has grown into a global 
                company serving hundreds of clients across industries. Throughout our journey, 
                we've remained committed to our core values of innovation, integrity, and 
                customer success.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to be at the forefront of digital transformation, helping 
                businesses optimize operations, drive growth, and deliver exceptional customer 
                experiences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470" 
                alt="SynergySoft team collaboration" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Leadership Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-primary font-medium mb-4">{member.role}</div>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals to join our team and help us build
              the future of enterprise software.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">View Open Positions</Button>
              <Button size="lg" variant="outline">Learn About Our Culture</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
