import { Apple, ChevronRight, Play } from "lucide-react";
import awardLogos from "../static/awardLogos.tsx";

export default function Newsletter() {
    return (
        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-[#D9F3FB] p-8 md:p-10 rounded-sm flex flex-col justify-center items-start h-full min-h-70 shadow-sm">
                        <h3 className="text-2xl font-bold  mb-4">
                            Exclusive offers for you
                        </h3>
                        <p className="text-[14px] mb-8 leading-relaxed">
                            Get weekly deals, valuable health information and
                            more.
                        </p>
                        <button className="text-md flex items-center gap-2 border p-3 hover:bg-white transition-all mt-auto uppercase">
                            Sign Up <ChevronRight size={14} strokeWidth={3} />
                        </button>
                    </div>

                    <div className="bg-[#F9FFE0] p-8 md:p-10 rounded-sm flex flex-col justify-center items-start h-full min-h-70 shadow-sm">
                        <h3 className="text-2xl font-bold  mb-4">
                            Join Our Community
                        </h3>
                        <p className="text-[14px] mb-8 leading-relaxed">
                            Get weekly deals, valuable health information and
                            more.
                        </p>
                        <button className="text-md flex items-center gap-2 border p-3 hover:bg-white mt-auto">
                            READ MORE <ChevronRight size={14} strokeWidth={3} />
                        </button>
                    </div>

                    <div className="bg-[#FFE2E5] p-8 md:p-10 rounded-sm flex flex-col justify-center items-start h-full min-h-70 shadow-sm">
                        <h3 className="text-2xl font-bold mb-4">Get The App</h3>
                        <p className="text-gray-500 text-[14px] mb-8 leading-relaxed">
                            Download our mobile application for a seamless
                            shopping experience and exclusive deals.
                        </p>

                        <div className="flex flex-col sm:flex-row xl:flex-col 2xl:flex-row gap-3 mt-auto w-full">
                            <button className="bg-gray-900 text-white rounded-sm px-4 py-2.5 flex items-center justify-center gap-2 text-xs font-semibold hover:bg-[#C69C6D] transition-colors flex-1 shadow-md">
                                <Play size={16} fill="currentColor" /> Google
                                Play
                            </button>
                            <button className="bg-gray-900 text-white rounded-sm px-4 py-2.5 flex items-center justify-center gap-2 text-xs font-semibold hover:bg-[#C69C6D] transition-colors flex-1 shadow-md">
                                <Apple size={18} /> App Store
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 pt-4">
                    {awardLogos.map((item) => (
                        <div
                            key={item.id}
                            className="h-12 w-30 flex items-center justify-center"
                        >
                            <img src={item.image} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
