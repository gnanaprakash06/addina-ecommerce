import { ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import livingRoomImg from "../assets/living-room-bg.jpg";
import hotspots from "../static/hotspots";

export default function HotDealBanner() {
    const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

    return (
        <section className="w-full my-12 lg:my-20">
            <div className="flex flex-col lg:flex-row items-stretch w-full bg-[#EAE6DF]">
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-0 z-20">
                    <div className="bg-[#B18B5E] w-full max-w-105 relative lg:-mr-20 shadow-xl mt-8 lg:mt-0">
                        <div className="absolute inset-3 rounded-xl border border-white/90 pointer-events-none"></div>
                        <div className="relative z-10 p-10 md:p-12">
                            <span className="text-white/90 text-xs font-bold tracking-widest uppercase mb-4 block">
                                Hot Deal Furniture
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                Live Furniture <br /> Your Love
                            </h2>
                            <button className="bg-white text-gray-900 hover:bg-gray-100 text-sm font-bold px-8 py-3.5 inline-flex items-center gap-2 transition-colors w-max">
                                BUY NOW{" "}
                                <ChevronRight size={16} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="w-full lg:w-1/2 relative z-10"
                    onClick={() => setActiveTooltip(null)}
                >
                    <img
                        src={livingRoomImg}
                        alt="Living Room"
                        className="w-full h-full min-h-100 lg:min-h-125 object-cover pointer-events-none"
                    />

                    {hotspots.map((spot) => (
                        <div
                            key={spot.id}
                            className="absolute z-30 cursor-pointer"
                            style={{ top: spot.top, left: spot.left }}
                            onMouseEnter={() => setActiveTooltip(spot.id)}
                            onMouseLeave={() => setActiveTooltip(null)}
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveTooltip(
                                    activeTooltip === spot.id ? null : spot.id
                                );
                            }}
                        >
                            {/* 1. The Pulsing Dot */}
                            <div className="relative flex items-center justify-center w-8 h-8 -translate-x-1/2 -translate-y-1/2">
                                <div className="absolute w-full h-full bg-white/40 rounded-full animate-ping opacity-75"></div>
                                <div className="absolute w-full h-full bg-white/40 rounded-full"></div>
                                <div className="w-3 h-3 bg-white rounded-full z-10 shadow-sm"></div>
                            </div>

                            <div
                                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white px-4 py-3 shadow-xl rounded-sm transition-all duration-300 pointer-events-none w-max ${
                                    activeTooltip === spot.id
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-2"
                                }`}
                            >
                                <h4 className="text-[13px] font-bold text-gray-900 mb-1">
                                    {spot.name}
                                </h4>
                                <div className="flex items-center gap-0.5 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={10}
                                            className={
                                                i < spot.rating
                                                    ? "fill-[#FFB340] text-[#FFB340]"
                                                    : "fill-gray-200 text-gray-200"
                                            }
                                        />
                                    ))}
                                </div>
                                <p className="text-[11px] font-semibold text-gray-500">
                                    USD {spot.price.toFixed(2)}
                                </p>
                                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
