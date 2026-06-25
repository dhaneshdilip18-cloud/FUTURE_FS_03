import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Phone, Leaf } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Categories', href: '#categories' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full"></div>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-gray-800">
                Fresh Harvest
              </h1>
              <p className="text-xs text-gray-500 font-medium">
                Premium Produce
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-green-600 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <button className="relative p-2 rounded-full hover:bg-green-50 transition-colors duration-300">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <a
              href="#contact"
              className="btn-primary"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-green-50 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t animate-fade-in">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 text-gray-700 font-medium hover:bg-green-50 hover:text-green-600 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 px-6 pt-4 border-t mt-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-gray-700 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  +91 98765 43210
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary text-center"
                >
                  Order Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
