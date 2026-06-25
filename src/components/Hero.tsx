import { ArrowRight, Truck, Shield, Award } from 'lucide-react';

const Hero = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'On orders over Rs. 500',
    },
    {
      icon: Shield,
      title: '100% Fresh',
      description: 'Quality guaranteed',
    },
    {
      icon: Award,
      title: 'Certified Organic',
      description: 'Premium selection',
    },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Fresh vegetables background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-400/90 text-white rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            New: Daily Fresh Stock Updates
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            Farm Fresh{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              Fruits & Vegetables
            </span>{' '}
            Delivered Daily
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Experience the taste of premium organic produce sourced directly from local farms. Fresh, healthy, and delivered straight to your doorstep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a href="#products" className="btn-secondary text-lg px-8 py-4">
              Shop Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#about" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
              Learn More
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10"
              >
                <div className="w-12 h-12 bg-green-500/80 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-green-100">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Images */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
          <div className="relative w-96 h-96">
            <div className="absolute top-0 right-0 w-72 h-72 animate-float" style={{ animationDelay: '0s' }}>
              <img
                src="https://images.pexels.com/photos/934065/pexels-photo-934065.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh strawberries"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute bottom-20 left-0 w-52 h-52 animate-float" style={{ animationDelay: '0.5s' }}>
              <img
                src="https://images.pexels.com/photos/1659030/pexels-photo-1659030.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Fresh broccoli"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 right-20 w-44 h-44 animate-float" style={{ animationDelay: '1s' }}>
              <img
                src="https://images.pexels.com/photos/535648/pexels-photo-535648.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Fresh tomatoes"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="white"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
