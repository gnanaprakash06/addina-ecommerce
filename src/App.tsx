import FeaturedProducts from "./components/FeaturedProducts";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import PromoBanners from "./components/PromoBanners";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Features />
            <PromoBanners />
            <FeaturedProducts />
        </div>
    );
}

export default App;
