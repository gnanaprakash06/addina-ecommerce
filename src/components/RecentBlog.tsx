import { Calendar, ChevronRight, User } from "lucide-react";
import blogsData from "../static/blogsData.tsx";

export default function RecentBlog() {
    return (
        <section className="w-full py-16 bg-[#F9F8F6]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="text-center mb-12">
                    <span className="inline-block bg-[#F4EDE5] text-[#C69C6D] text-[10px] font-bold px-3 py-1 rounded-sm tracking-widest uppercase mb-3">
                        Blog & News
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Recent Blog
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {blogsData.map((blog) => (
                        <div
                            key={blog.id}
                            className="group flex flex-col sm:flex-row gap-6 items-center cursor-pointer bg-white px-6 py-10"
                        >
                            <div className="w-full sm:w-[55%] flex flex-col justify-center items-start order-2 sm:order-1">
                                <span className="inline-block bg-[#F4EDE5] text-[#C69C6D] text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase mb-4">
                                    {blog.tag}
                                </span>

                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <span className="flex items-center gap-1.5">
                                        <User
                                            size={14}
                                            className="text-[#C69C6D]"
                                        />{" "}
                                        {blog.author}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar
                                            size={14}
                                            className="text-[#C69C6D]"
                                        />{" "}
                                        {blog.date}
                                    </span>
                                </div>

                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-5 group-hover:text-[#C69C6D] transition-colors leading-snug">
                                    {blog.title}
                                </h3>

                                <button className="flex items-center gap-1 text-sm font-bold text-gray-900 group-hover:text-[#C69C6D] transition-colors w-max">
                                    READ MORE{" "}
                                    <ChevronRight size={16} strokeWidth={2.5} />
                                </button>
                            </div>

                            <div className="w-full sm:w-[45%] aspect-3/3 bg-[#EAE6DF] overflow-hidden rounded-sm flex items-center justify-center text-gray-400 shrink-0 order-1 sm:order-2">
                                <img
                                    src={blog.image}
                                    className="w-full h-full object-cover"
                                    alt={blog.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
