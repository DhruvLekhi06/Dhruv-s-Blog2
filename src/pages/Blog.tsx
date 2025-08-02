import { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BlogCard from '@/components/BlogCard';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Startup', 'Technology', 'Growth', 'Product', 'Marketing'];

  const blogPosts = [
    {
      id: 1,
      title: 'Building Your First MVP: Lessons from the Trenches',
      excerpt: 'From idea to validation in 30 days. Here\'s what I learned building my first startup and the mistakes you should avoid.',
      category: 'Startup',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true,
      tags: ['MVP', 'Validation', 'Startup']
    },
    {
      id: 2,
      title: 'The Modern Tech Stack Every Startup Needs',
      excerpt: 'Essential tools and technologies that will accelerate your startup\'s growth without breaking the bank.',
      category: 'Technology',
      date: '2024-01-10',
      readTime: '12 min read',
      featured: false,
      tags: ['Tech Stack', 'Tools', 'Development']
    },
    {
      id: 3,
      title: 'Scaling from 0 to 1000 Users: A Complete Guide',
      excerpt: 'Practical strategies for acquiring your first thousand users without burning through your runway.',
      category: 'Growth',
      date: '2024-01-05',
      readTime: '15 min read',
      featured: false,
      tags: ['Growth', 'Users', 'Marketing']
    },
    {
      id: 4,
      title: 'Product-Market Fit: How to Know When You\'ve Found It',
      excerpt: 'The signs, metrics, and strategies to identify and achieve true product-market fit.',
      category: 'Product',
      date: '2023-12-28',
      readTime: '10 min read',
      featured: false,
      tags: ['Product', 'Market Fit', 'Strategy']
    },
    {
      id: 5,
      title: 'Content Marketing for Technical Founders',
      excerpt: 'How to build an audience and generate leads through strategic content creation.',
      category: 'Marketing',
      date: '2023-12-20',
      readTime: '7 min read',
      featured: false,
      tags: ['Content', 'Marketing', 'Founders']
    },
    {
      id: 6,
      title: 'Fundraising 101: Preparing for Your First Round',
      excerpt: 'Everything you need to know about raising your first round of funding, from deck to close.',
      category: 'Startup',
      date: '2023-12-15',
      readTime: '18 min read',
      featured: false,
      tags: ['Fundraising', 'Investment', 'Pitch']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-brand/5 to-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Startup{' '}
              <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Real stories, practical advice, and hard-earned lessons from the entrepreneurial trenches. 
              Everything you need to build and scale your startup.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-brand text-white'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  index={index}
                  size={index === 0 ? 'large' : 'default'}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest startup insights delivered directly to your inbox. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button variant="gradient" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;