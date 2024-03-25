import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const Navbar = ({ toggle }: { toggle: () => void }) => {
    const pathname = usePathname();
    return (
        <div className="w-full h-20 py-3 bg-brown sticky top-0 z-10">
            <div className="container mx-auto h-full">
                <div className="flex justify-between items-center h-full">
                    <Logo />
                    <button
                        type="button"
                        className="inline-flex items-center md:hidden"
                        onClick={toggle}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#fff"
                                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                            />
                        </svg>
                    </button>
                    <ul className="hidden md:flex md:gap-x-10 lg:gap-x-20 text-white font-bold text-lg">
                        <li>
                            <Link href="/" className={`link ${pathname === '/' ? 'active' && 'text-[#6F4E37]' : ''} hover:text-[#6F4E37]`}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className={`link ${pathname === '/about' ? 'active' && 'text-[#6F4E37]' : ''} hover:text-[#6F4E37]`}>About</Link>
                        </li>
                        <li>
                            <Link href="/products" className={`link ${pathname === '/products' ? 'active' && 'text-[#6F4E37]' : ''} hover:text-[#6F4E37]`}>Products</Link>
                        </li>
                        <li>
                            <Link href="/teams" className={`link ${pathname === '/teams' ? 'active' && 'text-[#6F4E37]' : ''} hover:text-[#6F4E37]`}>Teams</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;