import { useState } from "react";
import { cn } from "../lib/utils";
import trendyProducts from "../static/trendyProducts";
import ProductGrid from "./ProductGrid";

const categories = ["All Collection", "New In", "Top Rated", "Tensing Items"];

export default function TrendyCollection() {
    // State for active tab
    const [activeTab, setActiveTab] = useState("All Collection");

    return (
        <section className="w-full py-16">
            {/* --- Section Header (Title & Tabs) --- */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                {/* Title Area */}
                <div>
                    <span className="inline-block bg-[#F4EDE5] text-[#C69C6D] text-[10px] font-bold px-3 py-1 rounded-sm tracking-widest uppercase mb-3">
                        This Month
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Trendy Collection
                    </h2>
                </div>

                {/* Tabs Area */}
                <div className="flex flex-wrap items-center gap-6 md:gap-8 border-b border-gray-200 pb-2">
                    {categories.map((category) => (
                        <div
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className="relative cursor-pointer group"
                        >
                            <span
                                className={cn(
                                    "text-sm font-semibold transition-colors duration-300",
                                    activeTab === category
                                        ? "text-gray-900"
                                        : "text-gray-500 group-hover:text-gray-800"
                                )}
                            >
                                {category}
                            </span>

                            {/* Optional '8' Badge for All Collection to match Figma */}
                            {category === "All Collection" && (
                                <span className="absolute -top-3 -right-4 bg-[#B98D58] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm">
                                    8
                                </span>
                            )}

                            {/* Active Underline Indicator */}
                            <div
                                className={cn(
                                    "absolute -bottom-2.25 left-0 h-0.5 bg-[#C69C6D] transition-all duration-300",
                                    activeTab === category
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                )}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Products Grid (8 Items) --- */}
            <ProductGrid products={trendyProducts} />
        </section>
    );
}
