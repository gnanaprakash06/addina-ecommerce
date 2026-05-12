import {
    ChevronDown,
    Heart,
    Menu,
    Phone,
    Search,
    ShoppingBag,
} from "lucide-react";

export default function Navbar() {
    return (
        <header className="w-full font-sans">
            {/* --- 1. TOP BAR --- */}
            <div className="bg-[#C69C6D] text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center">
                {/* Left: Contact */}
                <div className="flex items-center gap-2">
                    <Phone size={14} />
                    <span>+380961381876</span>
                </div>

                {/* Center: Promo Text (Hidden on mobile) */}
                <div className="hidden md:block uppercase tracking-wide">
                    Take care of your health 25% off use code "DOFIX03"
                </div>

                {/* Right: Dropdowns */}
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 cursor-pointer hover:text-gray-200 transition">
                        English <ChevronDown size={12} />
                    </span>
                    <span className="flex items-center gap-1 cursor-pointer hover:text-gray-200 transition">
                        USD <ChevronDown size={12} />
                    </span>
                    <span className="flex items-center gap-1 cursor-pointer hover:text-gray-200 transition">
                        Setting <ChevronDown size={12} />
                    </span>
                </div>
            </div>

            {/* --- 2. MAIN NAVBAR --- */}
            <nav className="flex items-center justify-between px-4 md:px-8 py-5 bg-white border-b border-gray-100">
                <div className="flex items-center gap-20">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-8 bg-[#C69C6D] text-white flex items-center justify-center rounded-[10px] font-bold text-xl relative overflow-hidden">
                            {/* Adding a small semi-circle to match the logo style loosely */}
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white/30 rounded-full"></div>
                            A
                        </div>
                        <span className="text-2xl font-bold tracking-wider text-gray-900">
                            ADDINA
                        </span>
                    </div>

                    {/* Navigation Links (Hidden on mobile) */}
                    <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-600">
                        <li className="text-gray-900 cursor-pointer">Home</li>
                        <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                            About
                        </li>
                        <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                            Shop
                        </li>
                        <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                            Pages
                        </li>
                        <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                            Blog
                        </li>
                        <li className="hover:text-[#C69C6D] cursor-pointer transition-colors">
                            Contact
                        </li>
                    </ul>
                </div>

                {/* Right Actions (Search, Wishlist, Cart) */}
                <div className="flex items-center gap-5 md:gap-6">
                    {/* Search Bar */}
                    <div className="relative hidden lg:block">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-5 pr-12 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#C69C6D] w-65 bg-gray-50/50 transition-colors"
                        />
                        <div className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#C69C6D] text-white p-1.5 rounded-full cursor-pointer hover:bg-[#b0875b] transition-colors">
                            <Search size={16} strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* Wishlist Icon */}
                    <div className="relative cursor-pointer group">
                        <Heart
                            size={22}
                            className="text-gray-800 group-hover:text-[#C69C6D] transition-colors"
                        />
                        <span className="absolute -top-1.5 -right-2 bg-[#C69C6D] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                            3
                        </span>
                    </div>

                    {/* Cart Icon */}
                    <div className="relative cursor-pointer group">
                        <ShoppingBag
                            size={22}
                            className="text-gray-800 group-hover:text-[#C69C6D] transition-colors"
                        />
                        <span className="absolute -top-1.5 -right-2 bg-[#C69C6D] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                            0
                        </span>
                    </div>

                    {/* Mobile Menu Icon */}
                    <Menu size={24} className="text-gray-800 cursor-pointer" />
                </div>
            </nav>
        </header>
    );
}
