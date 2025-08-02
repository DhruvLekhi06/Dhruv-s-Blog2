import { ArrowRight, Calendar, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    featured: boolean;
    tags: string[];
  };
  index: number;
  size?: 'default' | 'large';
}

const BlogCard = ({ post, index, size = 'default' }: BlogCardProps) => {
  const isLarge = size === 'large';

  return (
    <article
      className={`group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-brand/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 animate-fade-in ${
        isLarge ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {post.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-brand to-brand-light text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Star className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      <div className={`p-6 ${isLarge ? 'lg:p-8' : ''} h-full flex flex-col`}>
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
          <span className="text-muted-foreground text-sm">{post.readTime}</span>
        </div>

        <h3 className={`font-display font-bold mb-3 group-hover:text-brand transition-colors ${
          isLarge ? 'text-2xl lg:text-3xl' : 'text-xl'
        }`}>
          <Link to={`/blog/${post.id}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        <p className={`text-muted-foreground mb-6 flex-grow ${
          isLarge ? 'text-lg leading-relaxed' : ''
        }`}>
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <Button asChild variant="ghost" size="sm" className="group-hover:text-brand">
            <Link to={`/blog/${post.id}`}>
              Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;