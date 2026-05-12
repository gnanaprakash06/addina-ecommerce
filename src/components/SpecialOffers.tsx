import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import dealsWeekImg from "../assets/deals-week-chair.png";
import limitOfferImg from "../assets/limited-offer-plant.png";

export default function SpecialOffers() {
    const [timeLeft, setTimeLeft] = useState({
        days: 147,
        hours: 13,
        minutes: 47,
        seconds: 40,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full py-8 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                <div
                    className="lg:col-span-2 rounded-sm relative overflow-hidden flex items-center min-h-85 p-8 md:p-12"
                    style={{
                        backgroundColor: "#2D2E32",
                        backgroundImage: `url("${limitOfferImg}")`,
                        backgroundPosition: "right bottom",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Inner White Border */}
                    <div className="absolute inset-4 border border-white/20 pointer-events-none rounded-sm"></div>

                    {/* Text Content */}
                    <div className="relative z-10 w-full max-w-[80%] lg:max-w-[55%]">
                        <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-3 block">
                            Hot Deal Furniture
                        </span>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
                            Furniture Limit Offer
                        </h3>
                        <div className="text-4xl md:text-5xl font-bold text-white mb-8">
                            30% Off
                        </div>
                        <button className="border border-white text-white hover:bg-white hover:text-gray-900 text-xs font-bold px-6 py-2.5 flex items-center gap-2 transition-colors w-max">
                            BUY NOW <ChevronRight size={14} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                <div
                    className="lg:col-span-2 rounded-sm relative overflow-hidden flex items-center justify-center min-h-85 p-6 md:p-8"
                    style={{
                        backgroundColor: "#0D2627",
                        backgroundImage: `url("${dealsWeekImg}")`,
                        backgroundPosition: "center",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="absolute inset-4 border border-white/20 pointer-events-none rounded-sm"></div>

                    <div className="relative z-10 w-full">
                        <span className="text-[#8FB3B4] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2 block">
                            Hot Deal Furniture
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight">
                            Deals Of The Week
                        </h3>

                        <div className="flex flex-wrap items-center gap-2 mb-6">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-2 rounded-sm flex flex-col items-center justify-center flex-1 min-w-12.5">
                                <span className="text-white text-lg md:text-xl font-bold">
                                    {timeLeft.days}
                                </span>
                                <span className="text-gray-400 text-[8px] uppercase tracking-wider font-bold">
                                    Days
                                </span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-2 rounded-sm flex flex-col items-center justify-center flex-1 min-w-12.5">
                                <span className="text-white text-lg md:text-xl font-bold">
                                    {timeLeft.hours}
                                </span>
                                <span className="text-gray-400 text-[8px] uppercase tracking-wider font-bold">
                                    Hrs
                                </span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-2 rounded-sm flex flex-col items-center justify-center flex-1 min-w-12.5">
                                <span className="text-white text-lg md:text-xl font-bold">
                                    {timeLeft.minutes}
                                </span>
                                <span className="text-gray-400 text-[8px] uppercase tracking-wider font-bold">
                                    Mins
                                </span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-2 rounded-sm flex flex-col items-center justify-center flex-1 min-w-12.5">
                                <span className="text-white text-lg md:text-xl font-bold">
                                    {timeLeft.seconds}
                                </span>
                                <span className="text-gray-400 text-[8px] uppercase tracking-wider font-bold">
                                    Secs
                                </span>
                            </div>
                        </div>

                        <button className="border border-white text-white hover:bg-[#8FB3B4] hover:border-[#8FB3B4] hover:text-gray-900 text-[10px] md:text-xs font-bold px-5 py-2.5 flex items-center gap-2 transition-colors w-max">
                            BUY NOW <ChevronRight size={14} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
