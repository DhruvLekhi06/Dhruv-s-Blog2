import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CommentSection from '@/components/CommentSection';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog post data - in a real app, this would come from an API/database
  const blogPosts = {
    '1': {
      title: 'Building Your First MVP: Lessons from the Trenches',
      content: `
        <p>Starting a startup is one of the most exhilarating and terrifying experiences you can have. After going through the process myself and helping dozens of other founders, I've learned that building your first MVP (Minimum Viable Product) is both an art and a science.</p>
        
        <h2>What is an MVP Really?</h2>
        <p>An MVP isn't just a stripped-down version of your product—it's a learning tool. The goal isn't to build something perfect; it's to build something that lets you learn about your customers as quickly and cheaply as possible.</p>
        
        <h2>The 3-Week Rule</h2>
        <p>I've found that the best MVPs can be built in about 3 weeks. This forces you to focus on the absolute essentials and prevents you from getting lost in feature creep. Here's how to structure those 3 weeks:</p>
        
        <ul>
          <li><strong>Week 1:</strong> Define the core problem and solution hypothesis</li>
          <li><strong>Week 2:</strong> Build the absolute minimum functionality</li>
          <li><strong>Week 3:</strong> Test with real users and iterate</li>
        </ul>
        
        <h2>Common MVP Mistakes</h2>
        <p>Over the years, I've seen founders make the same mistakes repeatedly:</p>
        
        <ol>
          <li><strong>Building for themselves:</strong> You are not your customer (usually)</li>
          <li><strong>Perfectionism:</strong> Your MVP should be embarrassing to show</li>
          <li><strong>Feature creep:</strong> "Just one more feature" is the death of MVPs</li>
          <li><strong>No clear success metrics:</strong> How will you know if it's working?</li>
        </ol>
        
        <h2>Tools That Actually Matter</h2>
        <p>You don't need a complex tech stack for your MVP. Here's what I recommend:</p>
        
        <ul>
          <li><strong>Frontend:</strong> React or Vue.js for web, React Native for mobile</li>
          <li><strong>Backend:</strong> Node.js with Express or Python with FastAPI</li>
          <li><strong>Database:</strong> PostgreSQL for structured data, Firebase for quick setup</li>
          <li><strong>Hosting:</strong> Vercel for frontend, Railway or Heroku for backend</li>
        </ul>
        
        <h2>The Real Secret</h2>
        <p>The real secret to a successful MVP isn't the technology—it's talking to your users. I recommend doing at least 10 customer interviews before writing a single line of code. These conversations will save you months of building the wrong thing.</p>
        
        <p>Remember: The goal of an MVP is to learn, not to impress. Focus on gathering data and feedback, not on building the perfect product. You'll have plenty of time to make it beautiful once you know it's solving a real problem.</p>
      `,
      excerpt: 'From idea to validation in 30 days. Here\'s what I learned building my first startup and the mistakes you should avoid.',
      category: 'Startup',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true,
      tags: ['MVP', 'Validation', 'Startup'],
      views: 1247,
      author: 'Alex Chen'
    },
    '2': {
      title: 'The Modern Tech Stack Every Startup Needs',
      content: `
        <p>Choosing the right technology stack for your startup can make or break your early momentum. After building several products and consulting with dozens of startups, I've identified the core technologies that give you the best balance of speed, scalability, and maintainability.</p>
        
        <h2>The Foundation: Frontend</h2>
        <p>Your frontend is what users see and interact with. For most startups, I recommend:</p>
        
        <ul>
          <li><strong>React or Next.js:</strong> Huge community, excellent tooling, easy to hire for</li>
          <li><strong>TypeScript:</strong> Catch bugs early and improve developer experience</li>
          <li><strong>Tailwind CSS:</strong> Rapid UI development without the bloat</li>
        </ul>
        
        <h2>The Engine: Backend</h2>
        <p>Your backend handles business logic, data processing, and API endpoints:</p>
        
        <ul>
          <li><strong>Node.js with Express:</strong> JavaScript everywhere, fast development</li>
          <li><strong>Python with FastAPI:</strong> Great for data-heavy applications</li>
          <li><strong>Supabase or Firebase:</strong> Backend-as-a-service for rapid prototyping</li>
        </ul>
        
        <h2>The Brain: Database</h2>
        <p>Choose based on your data structure and scaling needs:</p>
        
        <ul>
          <li><strong>PostgreSQL:</strong> Reliable, feature-rich, handles complex queries</li>
          <li><strong>MongoDB:</strong> Flexible schema, good for rapid iteration</li>
          <li><strong>Redis:</strong> Caching and session management</li>
        </ul>
        
        <h2>The Infrastructure</h2>
        <p>Keep it simple in the beginning:</p>
        
        <ul>
          <li><strong>Vercel/Netlify:</strong> Frontend hosting with global CDN</li>
          <li><strong>Railway/Heroku:</strong> Backend hosting with easy deployment</li>
          <li><strong>AWS S3:</strong> File storage and static assets</li>
        </ul>
        
        <h2>The Extras That Matter</h2>
        <p>These tools will save you time and headaches:</p>
        
        <ul>
          <li><strong>Stripe:</strong> Payment processing</li>
          <li><strong>SendGrid:</strong> Email delivery</li>
          <li><strong>LogRocket:</strong> User session recording</li>
          <li><strong>Sentry:</strong> Error monitoring</li>
        </ul>
        
        <p>Remember: The best tech stack is the one your team can build with quickly and confidently. Don't choose based on hype—choose based on your team's expertise and your product's needs.</p>
      `,
      excerpt: 'Essential tools and technologies that will accelerate your startup\'s growth without breaking the bank.',
      category: 'Technology',
      date: '2024-01-10',
      readTime: '12 min read',
      featured: false,
      tags: ['Tech Stack', 'Tools', 'Development'],
      views: 892,
      author: 'Alex Chen'
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild variant="gradient">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-brand/5 to-brand/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex items-center gap-2 mb-4">
              <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.featured && (
                <span className="bg-gradient-to-r from-brand to-brand-light text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none animate-fade-in">
            <div 
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75'
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm hover:bg-secondary/80 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gradient-to-r from-brand/5 to-brand-light/5 rounded-2xl border border-brand/20">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-brand to-brand-light rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                A
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">{post.author}</h3>
                <p className="text-muted-foreground mb-4">
                  Startup founder and product builder sharing insights from the entrepreneurial trenches. 
                  Passionate about helping other founders avoid the mistakes I've made.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/about">Learn More About Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Comment Section */}
      <CommentSection />

      {/* Related Posts */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-8">More Articles</h2>
          <div className="text-center">
            <Button asChild variant="cta" size="lg">
              <Link to="/blog">
                View All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;