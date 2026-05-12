import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import featuredProducts from "../static/featuredProducts";

export default function FeaturedProducts() {
    return (
        <section className="w-full px-4 md:px-8 lg:px-16 py-16">
            {/* --- Section Header --- */}
            <div className="text-center mb-10">
                <span className="inline-block bg-[#F4EDE5] text-[#C69C6D] text-[10px] font-bold px-3 py-1 rounded-sm tracking-widest uppercase mb-3">
                    Top Sale
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Featured Product
                </h2>
            </div>

            {/* --- Products Slider/Grid Area --- */}
            <div className="relative group">
                {/* Left/Right Navigation Arrows (Visible on hover in desktop) */}
                <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-500 hover:text-[#C69C6D] opacity-0 group-hover:opacity-100 transition-opacity md:flex cursor-pointer border border-gray-100">
                    <ChevronLeft size={20} />
                </button>
                <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-500 hover:text-[#C69C6D] opacity-0 group-hover:opacity-100 transition-opacity md:flex cursor-pointer border border-gray-100">
                    <ChevronRight size={20} />
                </button>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group/card cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="bg-[#F8F6F3] rounded-md aspect-square relative flex justify-center items-center p-6 mb-4 overflow-hidden">
                                {/* Discount Badge */}
                                {product.discount && (
                                    <span className="absolute top-3 left-3 bg-[#C69C6D] text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10">
                                        {product.discount}
                                    </span>
                                )}

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain group-hover/card:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="text-left">
                                <h3 className="text-[15px] font-bold text-gray-900 mb-1.5 group-hover/card:text-[#C69C6D] transition-colors">
                                    {product.name}
                                </h3>

                                {/* Star Rating */}
                                <div className="flex items-center gap-1 mb-1.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={12}
                                            className={
                                                i < product.rating
                                                    ? "fill-[#FFB340] text-[#FFB340]"
                                                    : "fill-gray-200 text-gray-200"
                                            }
                                        />
                                    ))}
                                </div>

                                {/* Price */}
                                <p className="text-sm text-gray-500">
                                    USD {product.price.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
