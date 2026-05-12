import FeaturedProducts from "./components/FeaturedProducts";
import Features from "./components/Features";
import Hero from "./components/Hero";
import HotDealBanner from "./components/HotDealBanner";
import Navbar from "./components/NavBar";
import PromoBanners from "./components/PromoBanners";
import SpecialOffers from "./components/SpecialOffers";
import TrendyCollection from "./components/TrendyCollection";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />

            <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
                <Features />
                <PromoBanners />
                <FeaturedProducts />
            </main>

            <HotDealBanner />

            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
                <TrendyCollection />
                <SpecialOffers />
            </div>
        </div>
    );
}

export default App;
