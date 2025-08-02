import { Github, Twitter, Linkedin, Mail, Code, Rocket, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const journey = [
    {
      year: '2022',
      title: 'Founded SeedToStack',
      description: 'Started sharing startup insights and experiences through writing',
      icon: Rocket
    },
    {
      year: '2021',
      title: 'Senior Product Manager',
      description: 'Led product development for a growing SaaS platform',
      icon: Users
    },
    {
      year: '2020',
      title: 'First Startup Exit',
      description: 'Successfully sold my first venture after 3 years of building',
      icon: Award
    },
    {
      year: '2019',
      title: 'Full-Stack Developer',
      description: 'Mastered modern web technologies and cloud architecture',
      icon: Code
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-brand/5 to-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                  Alex
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Startup founder, product builder, and storyteller. I help entrepreneurs turn their ideas into successful ventures through practical insights and proven strategies.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="gradient" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-brand to-brand-light rounded-3xl mx-auto relative overflow-hidden">
                  <div className="absolute inset-4 bg-background/10 rounded-2xl backdrop-blur-sm border border-white/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">A</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              My Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From developer to founder, here's how I've grown through the startup ecosystem.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand to-brand-light" />
            
            <div className="space-y-12">
              {journey.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-8 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-brand to-brand-light rounded-2xl flex items-center justify-center shrink-0">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-brand/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand/10 flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-bold">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;