import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      lines: ['123 Fresh Farm Road', 'Green Valley, Mumbai 400001'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: ['+91 98765 43210', '+91 87654 32109'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: ['hello@freshharvest.com', 'orders@freshharvest.com'],
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      lines: ['Mon-Sat: 8AM - 8PM', 'Sunday: 9AM - 6PM'],
    },
  ];

  const whatsappNumber = '919876543210';
  const whatsappMessage = encodeURIComponent('Hello! I would like to place an order for fresh produce.');

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-subheading">
            Have questions or want to place an order? We are here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-xl text-gray-800 mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-600">
                  We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none resize-none"
                    placeholder="I would like to order fresh vegetables..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}

            {/* WhatsApp Button */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-center text-gray-600 mb-4">Or contact us directly via WhatsApp</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors duration-300 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Order via WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {info.title}
                  </h4>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-green-100 to-yellow-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-green-600 mb-3 mx-auto" />
                    <p className="text-gray-800 font-semibold">Fresh Harvest Market</p>
                    <p className="text-gray-600">123 Fresh Farm Road, Green Valley</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
