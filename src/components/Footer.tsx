import { MapPin, Phone } from "lucide-react";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Twitter from "../assets/icons/twitter.svg";

export default function Footer() {
    return (
        <footer className="w-full bg-[#1A1A1A] pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6 cursor-pointer">
                            <div className="w-8 h-8 bg-[#C69C6D] text-white flex items-center justify-center rounded-[10px] font-bold text-xl relative overflow-hidden">
                                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white/30 rounded-full"></div>
                                A
                            </div>
                            <span className="text-2xl font-bold tracking-wider text-white">
                                ADDINA
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            It helps designers plan out where the content will
                            sit, the content to be written and approved.
                        </p>

                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#C69C6D] transition-all cursor-pointer shadow-sm group">
                                <img
                                    src={Twitter}
                                    alt="Twitter"
                                    className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition-all"
                                />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#C69C6D] transition-all cursor-pointer shadow-sm group">
                                <img
                                    src={Facebook}
                                    alt="Facebook"
                                    className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition-all"
                                />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#C69C6D] transition-all cursor-pointer shadow-sm group">
                                <img
                                    src={Instagram}
                                    alt="Instagram"
                                    className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition-all"
                                />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#C69C6D] transition-all cursor-pointer shadow-sm group">
                                <img
                                    src={Linkedin}
                                    alt="Linkedin"
                                    className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">
                            Services
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                                Log In
                            </li>
                            <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                                Whishlist
                            </li>
                            <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                                Return Policy
                            </li>
                            <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                                Privacy policy
                            </li>
                            <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                                Shopping FAQs
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">
                            Explore
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                                Help Center
                            </li>
                            <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                                Payment Guide
                            </li>
                            <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                                Returns & Refunds
                            </li>
                            <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                                Shipping & Delivery
                            </li>
                            <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                                Terms & Conditions
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">
                            Contact
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex flex-col justify-between text-gray-500 pb-2">
                                <span>4517 Washington Ave.</span>
                                <span>Manchester, Kentucky 29495</span>
                            </li>
                            <li className="flex gap-5 pb-2">
                                <div className="bg-[#B18B5E] rounded-full p-1 text-white">
                                    <MapPin />
                                </div>
                                <span>711-2880 Nulla St.</span>
                            </li>
                            <li className="flex gap-5 pb-2">
                                <div className="bg-[#B18B5E] rounded-full p-2 ">
                                    <Phone
                                        fill="white"
                                        strokeWidth={0}
                                        size={20}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>+964 742 44 763</span>
                                    <span className="text-gray-600">
                                        Mon-Sat: 9 AM - 5 PM
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>© 2024 Addina. All Rights Reserved.</p>
                    <div className="flex items-center gap-4">
                        <span className="hover:text-[#C69C6D] cursor-pointer">
                            Terms of Service
                        </span>
                        <span className="hover:text-[#C69C6D] cursor-pointer">
                            Privacy Policy
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
