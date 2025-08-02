import { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'hello@seedtostack.com',
      description: 'Send me an email anytime!'
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'San Francisco, CA',
      description: 'Pacific Time Zone'
    },
    {
      icon: Clock,
      title: 'Response Time',
      detail: '24-48 hours',
      description: 'I reply to all messages'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-brand/5 to-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Let's{' '}
              <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Have a question about startups, want to collaborate, or just want to say hi? 
              I'd love to hear from you and help however I can.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-brand to-brand-light rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                      <p className="text-foreground font-medium mb-1">{info.detail}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      className={`w-12 h-12 bg-secondary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${color}`}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                <h2 className="font-display text-2xl font-bold mb-6">Send a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. I'll get back to you within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="transition-all duration-300 focus:border-brand"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="transition-all duration-300 focus:border-brand"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="transition-all duration-300 focus:border-brand"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me more about what you're working on or what you'd like to discuss..."
                        className="transition-all duration-300 focus:border-brand resize-none"
                      />
                    </div>

                    <Button type="submit" variant="gradient" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;