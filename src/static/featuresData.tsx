import { CreditCard, Headset, ShieldCheck, Truck } from "lucide-react";

const featuresData = [
    {
        icon: <Truck size={36} className="text-[#C69C6D] stroke-[1.2]" />,
        title: "Free Delivery",
        subtitle: "Free shipping on all order",
    },
    {
        icon: <CreditCard size={36} className="text-[#C69C6D] stroke-[1.2]" />,
        title: "Money Return",
        subtitle: "Back guarantee under 7 day",
    },
    {
        icon: <Headset size={36} className="text-[#C69C6D] stroke-[1.2]" />,
        title: "Online Support 24/7",
        subtitle: "Support online 24 hours a day",
    },
    {
        icon: <ShieldCheck size={36} className="text-[#C69C6D] stroke-[1.2]" />,
        title: "Reliable",
        subtitle: "Trusted by 1000+ brands",
    },
];

export default featuresData;
