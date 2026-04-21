import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProductShowcase from './components/ProductShowcase';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg-blobs">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>
      <div className="bg-grid"></div>

      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <ProductShowcase />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
