import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const categories = [
    { name: 'Fresh Fruits', href: '#products' },
    { name: 'Vegetables', href: '#products' },
    { name: 'Organic Products', href: '#products' },
    { name: 'Daily Deals', href: '#products' },
  ];

  const support = [
    { name: 'FAQs', href: '#' },
    { name: 'Shipping Info', href: '#' },
    { name: 'Return Policy', href: '#' },
    { name: 'Track Order', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Fresh Harvest</h3>
                <p className="text-xs text-gray-400">Premium Produce</p>
              </div>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Bringing farm-fresh fruits and vegetables directly to your table. Quality produce from local farms, delivered with care.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <MapPin className="w-5 h-5" />
                <span>123 Fresh Farm Road, Green Valley, Mumbai 400001</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:hello@freshharvest.com"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>hello@freshharvest.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 p-8 bg-gray-800 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-xl mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400">Get updates on fresh arrivals and special offers!</p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-5 py-3 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
              />
              <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              {currentYear} Fresh Harvest Market. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for healthy living
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
