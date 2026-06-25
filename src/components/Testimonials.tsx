import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/products';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="section-subheading">
            Hear from our happy customers who trust us for their fresh produce needs
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl p-8 lg:p-12">
            <Quote className="absolute top-6 left-8 w-12 h-12 text-green-200" />

            <div className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mb-4"
                />
                <h3 className="font-display font-bold text-xl text-gray-800 mb-1">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-green-600 font-medium mb-4">
                  {testimonials[currentIndex].role}
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 text-lg italic max-w-2xl">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer ${
                currentIndex === index ? 'ring-2 ring-green-500' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
