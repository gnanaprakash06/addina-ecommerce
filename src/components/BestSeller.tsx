import { Star } from "lucide-react";
import bestSellerProducts from "../static/bestSellerProducts";

export default function BestSeller() {
    return (
        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="text-center mb-10">
                    <span className="inline-block bg-[#F4EDE5] text-[#C69C6D] text-[10px] font-bold px-3 py-1 rounded-sm tracking-widest uppercase mb-3">
                        This Week
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Best Sellers
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bestSellerProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group flex flex-row items-center cursor-pointer border border-transparent hover:border-gray-100 hover:shadow-sm transition-all duration-300 p-3 rounded-md gap-4"
                        >
                            <div className="w-25 h-25 shrink-0 bg-[#F8F6F3] rounded-md flex items-center justify-center relative overflow-hidden">
                                {/* Dynamic Badge */}
                                {product.badge && (
                                    <span
                                        className={`absolute top-1 left-1 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm z-10 ${product.badgeColor}`}
                                    >
                                        {product.badge}
                                    </span>
                                )}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-[80%] h-[80%] object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="flex-1 text-left">
                                <h3 className="text-[14px] font-bold text-gray-900 mb-1.5 group-hover:text-[#C69C6D] transition-colors leading-tight">
                                    {product.name}
                                </h3>

                                <div className="flex items-center gap-1 mb-2">
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

                                <p className="text-sm text-gray-500 font-medium">
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
