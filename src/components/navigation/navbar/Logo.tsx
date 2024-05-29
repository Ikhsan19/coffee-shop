"use client";
import Link from "next/link";

const Logo = () => {
    return (
        <div>
            <Link href="/">
                <h1 className="text-3xl lg:text-4xl md:py-1 lg:py-2 font-bold text-white italic"><span className="text-[#6F4E37]">Kahawa</span>Street</h1>
            </Link>
        </div>
    );
};

export default Logo;