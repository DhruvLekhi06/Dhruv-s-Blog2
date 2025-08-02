import { useState } from 'react';
import { MessageCircle, Heart, Reply, MoreHorizontal, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: Comment[];
  isLiked: boolean;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Sarah Chen',
      avatar: 'SC',
      content: 'Great insights! This really helped me understand the MVP validation process. I\'m currently working on my first startup and this advice is gold.',
      timestamp: '2 hours ago',
      likes: 12,
      isLiked: false,
      replies: [
        {
          id: 2,
          author: 'Alex (Author)',
          avatar: 'A',
          content: 'Thanks Sarah! Happy to hear it\'s helpful. Feel free to reach out if you have specific questions about your MVP.',
          timestamp: '1 hour ago',
          likes: 5,
          isLiked: false,
          replies: []
        }
      ]
    },
    {
      id: 3,
      author: 'Marcus Rodriguez',
      avatar: 'MR',
      content: 'The part about customer interviews was eye-opening. I\'ve been building in isolation and this made me realize I need to get out and talk to potential users.',
      timestamp: '4 hours ago',
      likes: 8,
      isLiked: true,
      replies: []
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !newAuthor.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      author: newAuthor,
      avatar: newAuthor.split(' ').map(n => n[0]).join('').toUpperCase(),
      content: newComment,
      timestamp: 'Just now',
      likes: 0,
      isLiked: false,
      replies: []
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setNewAuthor('');
  };

  const handleSubmitReply = (parentId: number) => {
    if (!replyContent.trim()) return;

    const reply: Comment = {
      id: Date.now(),
      author: 'Anonymous',
      avatar: 'A',
      content: replyContent,
      timestamp: 'Just now',
      likes: 0,
      isLiked: false,
      replies: []
    };

    setComments(comments.map(comment => 
      comment.id === parentId 
        ? { ...comment, replies: [...comment.replies, reply] }
        : comment
    ));

    setReplyContent('');
    setReplyingTo(null);
  };

  const toggleLike = (commentId: number, isReply: boolean = false, parentId?: number) => {
    if (isReply && parentId) {
      setComments(comments.map(comment => 
        comment.id === parentId 
          ? {
              ...comment,
              replies: comment.replies.map(reply =>
                reply.id === commentId
                  ? { 
                      ...reply, 
                      isLiked: !reply.isLiked,
                      likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1
                    }
                  : reply
              )
            }
          : comment
      ));
    } else {
      setComments(comments.map(comment => 
        comment.id === commentId 
          ? { 
              ...comment, 
              isLiked: !comment.isLiked,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
            }
          : comment
      ));
    }
  };

  const CommentItem = ({ comment, isReply = false, parentId }: { comment: Comment, isReply?: boolean, parentId?: number }) => (
    <div className={`${isReply ? 'ml-12 mt-4' : 'mb-6'}`}>
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-gradient-to-r from-brand to-brand-light rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0">
          {comment.avatar}
        </div>
        
        <div className="flex-1">
          <div className="bg-card rounded-2xl p-4 border border-border/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">{comment.author}</span>
                <span className="text-muted-foreground text-xs">{comment.timestamp}</span>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-sm text-foreground leading-relaxed mb-3">
              {comment.content}
            </p>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleLike(comment.id, isReply, parentId)}
                className={`flex items-center gap-1 ${comment.isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
              >
                <Heart className={`w-4 h-4 ${comment.isLiked ? 'fill-current' : ''}`} />
                <span className="text-xs">{comment.likes}</span>
              </Button>
              
              {!isReply && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                  className="flex items-center gap-1 text-muted-foreground"
                >
                  <Reply className="w-4 h-4" />
                  <span className="text-xs">Reply</span>
                </Button>
              )}
              
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                <Flag className="w-4 h-4" />
                <span className="text-xs">Report</span>
              </Button>
            </div>
          </div>
          
          {/* Reply form */}
          {replyingTo === comment.id && (
            <div className="mt-4 ml-4">
              <div className="flex gap-2">
                <Textarea
                  placeholder="Write a reply..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  className="flex-1 min-h-[80px]"
                />
                <div className="flex flex-col gap-2">
                  <Button 
                    onClick={() => handleSubmitReply(comment.id)}
                    variant="gradient" 
                    size="sm"
                    disabled={!replyContent.trim()}
                  >
                    Reply
                  </Button>
                  <Button 
                    onClick={() => setReplyingTo(null)}
                    variant="outline" 
                    size="sm"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Replies */}
          {comment.replies.map(reply => (
            <CommentItem 
              key={reply.id} 
              comment={reply} 
              isReply={true} 
              parentId={comment.id}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <MessageCircle className="w-6 h-6 text-brand" />
          <h2 className="font-display text-2xl font-bold">
            Comments ({comments.length + comments.reduce((acc, c) => acc + c.replies.length, 0)})
          </h2>
        </div>

        {/* Comment form */}
        <div className="mb-12 bg-card rounded-2xl p-6 border border-border/50">
          <h3 className="font-semibold mb-4">Join the discussion</h3>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <Input
              placeholder="Your name"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              className="w-full"
            />
            <Textarea
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full min-h-[120px]"
            />
            <div className="flex justify-end">
              <Button 
                type="submit" 
                variant="gradient"
                disabled={!newComment.trim() || !newAuthor.trim()}
              >
                Post Comment
              </Button>
            </div>
          </form>
        </div>

        {/* Comments list */}
        <div className="space-y-6">
          {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
          
          {comments.length === 0 && (
            <div className="text-center py-12">
              <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No comments yet. Be the first to share your thoughts!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommentSection;