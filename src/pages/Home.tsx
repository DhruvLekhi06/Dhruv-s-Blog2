import { ArrowRight, TrendingUp, Users, Zap, Star, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BlogCard from '@/components/BlogCard';

const Home = () => {
  const featuredPosts = [
    {
      id: 1,
      category: 'Startup',
      title: 'Building Your First MVP: Lessons from the Trenches',
      excerpt: 'From idea to validation in 30 days. Here\'s what I learned building my first startup.',
      readTime: '8 min read',
      date: 'Jan 15, 2024',
      featured: true,
      tags: ['MVP', 'Validation', 'Startup']
    },
    {
      id: 2,
      category: 'Technology',
      title: 'The Modern Tech Stack Every Startup Needs',
      excerpt: 'Essential tools and technologies that will accelerate your startup\'s growth.',
      readTime: '12 min read',
      date: 'Jan 10, 2024',
      featured: false,
      tags: ['Tech Stack', 'Tools', 'Development']
    },
    {
      id: 3,
      category: 'Growth',
      title: 'Scaling from 0 to 1000 Users: A Complete Guide',
      excerpt: 'Practical strategies for acquiring your first thousand users without burning cash.',
      readTime: '15 min read',
      date: 'Jan 5, 2024',
      featured: false,
      tags: ['Growth', 'Users', 'Marketing']
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-brand/5 to-brand/10 pt-20 pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                From{' '}
                <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                  Seed
                </span>{' '}
                to{' '}
                <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                  Stack
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in animation-delay-300">
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A startup founder's journey through entrepreneurship, technology, and building successful ventures. 
                Join me as I share insights from the trenches.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-500">
              <Button asChild variant="hero" size="xl">
                <Link to="/blog">
                  Explore Articles <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/about">Learn About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover insights on entrepreneurship, technology, and scaling startups from idea to execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                index={index}
                size={post.featured ? 'large' : 'default'}
              />
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button asChild variant="cta" size="lg">
              <Link to="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Building the Future,{' '}
                <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                  One Startup at a Time
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I believe every great company starts with a simple idea and the courage to pursue it. 
                Through SeedToStack, I share the real stories, lessons, and strategies that turn concepts into companies.
              </p>
              <div className="space-y-4">
                {[
                  'Real startup experiences and lessons learned',
                  'Technical insights for non-technical founders',
                  'Growth strategies that actually work',
                  'Building products people love'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-brand to-brand-light rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="bg-gradient-to-br from-brand/10 to-brand-light/10 rounded-3xl p-8 border border-brand/20">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand to-brand-light rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Innovation Focus</h3>
                        <p className="text-muted-foreground">Building tomorrow's solutions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand to-brand-light rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Growth Mindset</h3>
                        <p className="text-muted-foreground">Continuous learning and improvement</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand to-brand-light rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Community Building</h3>
                        <p className="text-muted-foreground">Connecting entrepreneurs worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;