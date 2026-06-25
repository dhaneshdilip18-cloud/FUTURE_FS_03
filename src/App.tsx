import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
