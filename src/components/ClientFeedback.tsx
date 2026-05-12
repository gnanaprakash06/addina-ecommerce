import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import testimonialBg from "../assets/testimonial-bg.png";
import feedbacks from "../static/feedbacks";

export default function ClientFeedback() {
    return (
        <section
            className="w-full py-16 lg:py-24 relative bg-[#F9F8F6]"
            style={{
                backgroundImage: `url(${testimonialBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                {/* --- 1. Centered Section Header --- */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-[#444] text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase mb-3">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Client Feedback
                    </h2>
                </div>

                {/* --- 2. Feedback Cards Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {feedbacks.map((feedback) => (
                        <div
                            key={feedback.id}
                            className="bg-white p-8 md:p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 relative"
                        >
                            {/* Decorative Quote Icon Background */}
                            <div className="absolute top-8 right-8 text-gray-100">
                                <Quote
                                    size={60}
                                    fill="currentColor"
                                    strokeWidth={0}
                                />
                            </div>

                            <div className="relative z-10">
                                {/* Star Rating */}
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={
                                                i < feedback.rating
                                                    ? "fill-[#FFB340] text-[#FFB340]"
                                                    : "fill-gray-200 text-gray-200"
                                            }
                                        />
                                    ))}
                                </div>

                                {/* Comment Text */}
                                <p className="text-gray-600 text-[15px] leading-relaxed mb-8 italic">
                                    "{feedback.comment}"
                                </p>

                                {/* User Info (Avatar + Name) */}
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#EEDCC9]">
                                        <img
                                            src={feedback.image}
                                            alt={feedback.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 font-bold text-[15px]">
                                            {feedback.name}
                                        </h4>
                                        <span className="text-[#C69C6D] text-xs font-semibold">
                                            {feedback.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-4 mt-12">
                    <button className="w-12 h-12 rounded-full border border-[#C69C6D] flex items-center justify-center text-white hover:bg-[#C69C6D] hover:text-white hover:border-[#C69C6D] transition-colors shadow-sm">
                        <ChevronLeft size={24} strokeWidth={2} />
                    </button>
                    <button className="w-12 h-12 border border-[#C69C6D] rounded-full flex items-center justify-center text-white hover:bg-[#b0875b] transition-colors shadow-sm">
                        <ChevronRight size={24} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </section>
    );
}
