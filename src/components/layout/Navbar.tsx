
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localStorage.getItem('theme') as 'light' | 'dark' || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Update localStorage and apply class to document
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Catalog', path: '/catalog' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold text-primary flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white text-xs font-bold">SP</span>
          </div>
          <span className="animate-fade-in">SynergySoft</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="mr-2"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm" className="animate-fade-in">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
