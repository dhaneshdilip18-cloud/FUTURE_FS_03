import { Apple, Carrot, Leaf } from 'lucide-react';
import { categories } from '../data/products';

const iconMap = {
  Apple: Apple,
  Carrot: Carrot,
  Leaf: Leaf,
};

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Our Categories
          </span>
          <h2 className="section-heading">Browse by Category</h2>
          <p className="section-subheading">
            Discover our wide selection of fresh produce, from organic fruits to
            locally sourced vegetables
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            return (
              <a
                key={category.id}
                href="#products"
                className="group relative overflow-hidden rounded-3xl h-80 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-green-900/80 transition-all duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors duration-300">
                      {IconComponent && (
                        <IconComponent className="w-7 h-7 text-white" />
                      )}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-200 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-orange-400">
                        {category.itemCount} items
                      </span>
                      <span className="inline-flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Shop Now
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
