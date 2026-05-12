import BestSeller from "./components/BestSeller";
import ClientFeedback from "./components/ClientFeedback";
import FeaturedProducts from "./components/FeaturedProducts";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HotDealBanner from "./components/HotDealBanner";
import Navbar from "./components/NavBar";
import Newsletter from "./components/NewsLetter";
import PromoBanners from "./components/PromoBanners";
import RecentBlog from "./components/RecentBlog";
import SpecialOffers from "./components/SpecialOffers";
import TrendyCollection from "./components/TrendyCollection";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Features />
            <PromoBanners />
            <FeaturedProducts />
            <HotDealBanner />
            <TrendyCollection />
            <SpecialOffers />
            <ClientFeedback />
            <BestSeller />
            <RecentBlog />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default App;
