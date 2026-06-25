import { useState } from 'react';
import { ShoppingBasket, Star, Plus, Leaf, Sparkles } from 'lucide-react';
import { featuredProducts, dailyStock } from '../data/products';
import type { Product } from '../data/products';

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'fruits' | 'vegetables' | 'organic'>('all');

  const filteredProducts = activeTab === 'all'
    ? featuredProducts
    : featuredProducts.filter((p) => p.category === activeTab);

  const tabs = [
    { id: 'all' as const, label: 'All Products' },
    { id: 'fruits' as const, label: 'Fruits' },
    { id: 'vegetables' as const, label: 'Vegetables' },
    { id: 'organic' as const, label: 'Organic' },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Fresh Arrivals
          </span>
          <h2 className="section-heading">Featured Products</h2>
          <p className="section-subheading">
            Hand-picked selection of the freshest produce just for you
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Daily Stock Update Section */}
        <div className="mt-20 bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                Updated Today
              </div>
              <h3 className="font-display text-3xl font-bold text-gray-800 mb-4">
                Daily Fresh Stock Updates
              </h3>
              <p className="text-gray-600 mb-6">
                Check our real-time inventory to see what's fresh today. We update our stock daily to ensure you get the best produce available.
              </p>
              <div className="flex items-center gap-4">
                <a href="#contact" className="btn-primary">
                  <ShoppingBasket className="w-5 h-5 mr-2" />
                  Request Stock List
                </a>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Today's Availability
                </h4>
                <div className="space-y-3">
                  {dailyStock.slice(0, 5).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="font-medium text-gray-700">{item.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">{item.quantity}</span>
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            item.status === 'In Stock'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="card group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-md">
              <Sparkles className="w-3 h-3" />
              New
            </span>
          )}
          {product.isOrganic && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-600 text-white text-xs font-semibold rounded-md">
              <Leaf className="w-3 h-3" />
              Organic
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-green-600 hover:text-white">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-green-600 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">(4.9)</span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-800">&#8377;{product.price}</span>
            <span className="text-sm text-gray-500">/{product.unit}</span>
          </div>
          <button className="px-4 py-2 bg-green-50 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
