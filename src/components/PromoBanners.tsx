import { ChevronRight } from "lucide-react";
import blueChair from "../assets/blue-chair.png";
import wickerChair from "../assets/wicker-chair.png";

export default function PromoBanners() {
    return (
        <section className="w-full px-4 md:px-8 lg:px-16 py-8">
            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* --- Banner 1: Wicker Hanging Chairs --- */}
                <div className="bg-[#EBF9FD] rounded-sm p-8 sm:p-10 relative overflow-hidden flex items-center min-h-60 group">
                    {/* Text Content */}
                    <div className="relative z-10 max-w-[55%]">
                        <span className="text-gray-500 text-xs font-bold tracking-wider mb-2 block uppercase">
                            Get 30% Off
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                            Wicker Hanging Chairs
                        </h3>
                        <button className="bg-[#C69C6D] hover:bg-[#b0875b] text-white text-xs font-medium px-6 py-2.5 rounded transition-all flex items-center gap-1 w-max">
                            BUY NOW <ChevronRight size={14} strokeWidth={3} />
                        </button>
                    </div>

                    {/* Image & Decorative Background */}
                    <div className="absolute right-0 top-0 w-1/2 h-full flex justify-end items-center pointer-events-none">
                        <img
                            src={wickerChair}
                            alt="Wicker Chair"
                            className="relative z-10 w-full max-w-45 object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* --- Banner 2: Brasslegged Armchair --- */}
                <div className="bg-[#EBF9FD] rounded-sm p-8 sm:p-10 relative overflow-hidden flex items-center min-h-60 group">
                    {/* Text Content */}
                    <div className="relative z-10 max-w-[55%]">
                        <span className="text-gray-500 text-xs font-bold tracking-wider mb-2 block uppercase">
                            Get 15% Off
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                            Brasslegged Armchair
                        </h3>
                        <button className="bg-[#C69C6D] hover:bg-[#b0875b] text-white text-xs font-medium px-6 py-2.5 rounded transition-all flex items-center gap-1 w-max">
                            BUY NOW <ChevronRight size={14} strokeWidth={3} />
                        </button>
                    </div>

                    {/* Image */}
                    <div className="absolute right-0 bottom-0 w-1/2 h-full flex justify-end items-center pointer-events-none pr-4">
                        <img
                            src={blueChair}
                            alt="Blue Armchair"
                            className="relative z-10 w-full max-w-45 object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
