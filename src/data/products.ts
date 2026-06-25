export interface Product {
  id: number;
  name: string;
  category: 'fruits' | 'vegetables' | 'organic';
  price: number;
  unit: string;
  image: string;
  isNew?: boolean;
  isOrganic?: boolean;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
  description: string;
  itemCount: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export const categories: Category[] = [
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    icon: 'Apple',
    image: 'https://images.pexels.com/photos/161084/pexels-photo-161084.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Handpicked seasonal fruits from local orchards',
    itemCount: 24,
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    icon: 'Carrot',
    image: 'https://images.pexels.com/photos/2745888/pexels-photo-2745888.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Farm-fresh vegetables delivered daily',
    itemCount: 32,
  },
  {
    id: 'organic',
    name: 'Organic Products',
    icon: 'Leaf',
    image: 'https://images.pexels.com/photos/236963/pexels-photo-236963.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '100% certified organic produce',
    itemCount: 18,
  },
];

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Organic Strawberries',
    category: 'fruits',
    price: 299,
    unit: 'kg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgu96IEZDzoKCvvfcZsBrM4QghceVosENB1HdX3hA52g&s',
    isNew: true,
    isOrganic: true,
    description: 'Sweet, juicy strawberries from organic farms',
  },
  {
    id: 2,
    name: 'Fresh Mangos',
    category: 'fruits',
    price: 180,
    unit: 'kg',
    image: 'https://static.vecteezy.com/system/resources/previews/065/923/639/large_2x/a-close-up-shot-of-a-pile-of-ripe-and-juicy-mangos-ready-to-eat-photo.jpg',
    isNew: true,
    description: 'Ripe, tropical mangos ready to eat',
  },
  {
    id: 3,
    name: 'Organic Avocados',
    category: 'organic',
    price: 399,
    unit: 'kg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmedb9tqN_jF6w98mtpYt7r_ZhZzItRosswGZHq8D6zA&s=10',
    isOrganic: true,
    description: 'Perfectly ripe avocados for your salads',
  },
  {
    id: 4,
    name: 'Fresh Tomatoes',
    category: 'vegetables',
    price: 60,
    unit: 'kg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTn5NJ_R7If0hkJF5ldid17sMUOKKEqwOwIq9qtM93A&s=10',
    description: 'Vine-ripened tomatoes full of flavor',
  },
  {
    id: 5,
    name: 'Organic Spinach',
    category: 'organic',
    price: 120,
    unit: 'kg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPvWT2TMcPro9LG74yGFTiQjotYdL0yZBOtLlYCFPUw&s=10',
    isOrganic: true,
    description: 'Nutrient-rich organic spinach leaves',
  },
  {
    id: 6,
    name: 'Sweet Oranges',
    category: 'fruits',
    price: 150,
    unit: 'kg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmqlDdIg3UU1qCy3bCL7UdzK89wXr1P3Vyd1KbrGxZA&s=10',
    description: 'Juicy, sweet oranges perfect for juicing',
  },
  {
    id: 7,
    name: 'Fresh Broccoli',
    category: 'vegetables',
    price: 80,
    unit: 'kg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNw7yI0lmvrKfvx_mHbooEktF7fYlEhkSNH1ubZyGUg&s=10',
    description: 'Crunchy, fresh broccoli heads',
  },
  {
    id: 8,
    name: 'Organic Carrots',
    category: 'organic',
    price: 90,
    unit: 'kg',
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600',
    isOrganic: true,
    description: 'Sweet, organic carrots from local farms',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Health Enthusiast',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: "Fresh Harvest Market has completely changed how my family eats. The quality of their organic produce is outstanding, and I love knowing exactly where my food comes from. The daily stock updates make meal planning so easy!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Local Restaurant Owner',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: "As a chef, I am very particular about my ingredients. Fresh Harvest Market consistently delivers the freshest vegetables and fruits. Their customer service is excellent, and the WhatsApp ordering is incredibly convenient.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Busy Mom',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: "With three kids, I need reliable, healthy food options. Fresh Harvest Market makes it so easy to get fresh produce delivered. The prices are fair, and the quality is always top-notch. Highly recommend!",
    rating: 5,
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Fitness Trainer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: "I've tried many local markets, but none compare to Fresh Harvest. Their selection is incredible, and they always have what I need for my healthy meal prep. The freshness is unbeatable!",
    rating: 5,
  },
];

export const dailyStock = [
  { name: 'Organic Apples', status: 'In Stock', quantity: '50 kg' },
  { name: 'Fresh Bananas', status: 'In Stock', quantity: '30 kg' },
  { name: 'Baby Spinach', status: 'Limited', quantity: '15 kg' },
  { name: 'Red Bell Peppers', status: 'In Stock', quantity: '40 kg' },
  { name: 'Organic Kale', status: 'In Stock', quantity: '25 kg' },
  { name: 'Sweet Potatoes', status: 'In Stock', quantity: '60 kg' },
];
