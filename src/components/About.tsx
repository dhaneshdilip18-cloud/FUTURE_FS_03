import { Heart, Users, Truck, Award, CheckCircle, Leaf } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Local Farmers' },
    { value: '10K+', label: 'Happy Customers' },
    { value: '99%', label: 'Satisfaction Rate' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Quality First',
      description: 'We personally inspect every shipment to ensure only the freshest produce reaches your table.',
    },
    {
      icon: Users,
      title: 'Supporting Local',
      description: 'By partnering with local farmers, we strengthen our community and reduce carbon footprint.',
    },
    {
      icon: Truck,
      title: 'Daily Fresh',
      description: 'Our products are harvested and delivered within 24 hours for maximum freshness.',
    },
    {
      icon: Award,
      title: 'Certified Organic',
      description: 'All our organic products are certified by USDA, ensuring genuine organic produce.',
    },
  ];

  const milestones = [
    'Family-owned business since 2009',
    'Direct partnerships with 50+ local farms',
    '100% satisfaction guarantee',
    'Sustainable farming practices',
    'Free delivery on orders over Rs. 500',
    'Weekly fresh stock updates',
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Farm fresh produce"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-green-100 rounded-3xl -z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-orange-100 rounded-3xl -z-0"></div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:right-10 bg-white rounded-2xl shadow-xl p-6 z-20">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-800">100%</p>
                  <p className="text-sm text-gray-500">Organic Produce</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Bringing Farm Fresh{' '}
              <span className="text-green-600">Goodness</span> to Your Table
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              At Fresh Harvest Market, we believe that everyone deserves access to the freshest, highest quality fruits and vegetables. For over 15 years, we've been connecting local farmers with families who care about what they eat.
            </p>

            {/* Milestones */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{milestone}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#products" className="btn-outline">
                View Products
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose Us</h2>
            <p className="section-subheading">
              We are committed to providing the best experience for our customers
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
