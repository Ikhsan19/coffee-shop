import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
    return (
        <>
            <div className="w-full h-20 bg-brown sticky top-0 z-50">
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
                        <ul className="hidden md:flex gap-x-20 text-white ">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>
                                <Link href="/teams">Teams</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;



// "use client"
// import Image from "next/image";
// import Link from "next/link";
// import brandimage from "@/app/brand-logo.webp"

// export default function Navbar() {
//     return (
//         <header className="bg-brown py-3 text-slate-50">
//             <nav className="flex justify-between items-center w-[92%] mx-auto container">
//                 <div className="flex items-center cursor-pointer">
//                     <Image
//                         className="w-12"
//                         src={brandimage}
//                         alt="Brand Image"
//                     />
//                     <h1 className="ms-2 font-bold text-2xl">KahawaStreet</h1>
//                 </div>
//                 <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
//                     <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
//                         <li>
//                             <Link href="/about">
//                                 About
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="/product">
//                                 Products
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="/temas">
//                                 Teams
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </header>
//     );
// }