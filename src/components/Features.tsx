import featuresData from "../static/featuresData";
export default function Features() {
    return (
        <section className="w-full bg-white px-4 md:px-8 lg:px-16 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuresData.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 group cursor-pointer"
                    >
                        {/* Icon */}
                        <div className="shrink-0 transition-transform group-hover:-translate-y-1 duration-300">
                            {feature.icon}
                        </div>
                        {/* Text */}
                        <div>
                            <h3 className="text-[15px] font-bold text-gray-900 mb-1">
                                {feature.title}
                            </h3>
                            <p className="text-[13px] text-gray-500">
                                {feature.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
