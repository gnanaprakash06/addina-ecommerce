import { ChevronLeft, ChevronRight } from "lucide-react";
import featuredProducts from "../static/featuredProducts";
import ProductGrid from "./ProductGrid";

export default function FeaturedProducts() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <section className="w-full px-4 md:px-8 lg:px-16 py-16">
                <div className="text-center mb-10">
                    <span className="inline-block bg-[#F4EDE5] text-[#C69C6D] text-[10px] font-bold px-3 py-1 rounded-sm tracking-widest uppercase mb-3">
                        Top Sale
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Featured Product
                    </h2>
                </div>

                <div className="relative group">
                    <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-500 hover:text-[#C69C6D] opacity-0 group-hover:opacity-100 transition-opacity md:flex cursor-pointer border border-gray-100">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-500 hover:text-[#C69C6D] opacity-0 group-hover:opacity-100 transition-opacity md:flex cursor-pointer border border-gray-100">
                        <ChevronRight size={20} />
                    </button>

                    <ProductGrid products={featuredProducts} />
                </div>
            </section>
        </div>
    );
}
