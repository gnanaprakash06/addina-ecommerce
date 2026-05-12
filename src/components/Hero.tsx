import { ChevronRight } from "lucide-react";
import blackChair from "../assets/Black-grey-chair.png";

export default function Hero() {
    return (
        <section className="w-full bg-[#F9F8F6] px-4 md:px-8 lg:px-16 py-4 lg:py-5 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 space-y-6 z-10">
                <span className="inline-block bg-[#EEDCC9] text-[#A67853] text-xs font-bold px-3 py-1.5 rounded tracking-widest">
                    NEW ARRIVAL...
                </span>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                    Elevate <br />
                    Your Home <br />
                    Aesthetics
                </h1>

                <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
                    A furniture e-commerce company operates in the digital
                    space, offering a wide range of furniture products for sale
                    through an online platform.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button className="bg-[#C69C6D] hover:bg-[#b0875b] text-white text-sm px-6 py-3.5 rounded font-medium flex items-center gap-2 transition-colors">
                        BUY NOW <ChevronRight size={16} strokeWidth={2.5} />
                    </button>
                    <button className="border-2 border-[#C69C6D] text-[#C69C6D] hover:bg-[#C69C6D] hover:text-white text-sm px-6 py-3.5 rounded font-medium flex items-center gap-2 transition-colors">
                        VIEW DETAILS{" "}
                        <ChevronRight size={16} strokeWidth={2.5} />
                    </button>
                </div>
            </div>

            <div className="flex-1 relative flex justify-center items-center w-full min-h-100">
                <div className="absolute w-70 h-70 sm:w-87.5 sm:h-87.5 lg:w-130 lg:h-130 bg-[#D3BfA7] rounded-full z-0"></div>

                <img
                    src={blackChair}
                    alt="Stylish Gray Chair"
                    className="relative z-10 w-full max-w-[320px] sm:max-w-100 lg:max-w-137.5 object-contain drop-shadow-2xl"
                />
            </div>
        </section>
    );
}
