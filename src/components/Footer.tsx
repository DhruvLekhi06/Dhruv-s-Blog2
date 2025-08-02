import { Mail, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Navigation': [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    'Categories': [
      { name: 'Startup', href: '/blog?category=startup' },
      { name: 'Technology', href: '/blog?category=technology' },
      { name: 'Growth', href: '/blog?category=growth' },
      { name: 'Product', href: '/blog?category=product' },
    ],
    'Resources': [
      { name: 'Newsletter', href: '#newsletter' },
      { name: 'RSS Feed', href: '/rss.xml' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@seedtostack.com', label: 'Email' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link 
              to="/" 
              className="flex items-center space-x-2 font-display font-bold text-xl bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-brand to-brand-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span>SeedToStack</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Helping entrepreneurs turn ideas into successful ventures through practical insights and proven strategies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-brand transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {currentYear} SeedToStack. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 sm:mt-0">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;