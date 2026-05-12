import { Star } from "lucide-react";
import type { FeaturedProduct } from "../types/featuredProductsType";

export default function ProductCard({ product }: { product: FeaturedProduct }) {
    return (
        <div key={product.id} className="group/card cursor-pointer">
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
    );
}
