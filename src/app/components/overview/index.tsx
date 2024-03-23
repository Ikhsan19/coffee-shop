import Image from "next/image";
import Link from "next/link";

export default function Overview() {
    return (
        <div className="container mx-auto flex justify-between lg:flex-row lg:gap-x-16 lg:text-left sm:flex-col-reverse sm:gap-y-4 sm:text-center">
            <div className="lg:w-1/2 sm:w-full my-auto">
                <p className="mb-10">Founded in 2018 by a young man from Bima, KahawaStreet comes from an idea that everyone can enjoy coffee. It is all started at a small rented building on Jalan Lintas Sumbawa-Bima. In 2020, KahawaStreet is no longer housed in a small rented building but has its own place located in Timu Village.</p>
                <Link href="/about" className="bg-[#6F4E37] hover:bg-brown p-3 text-white ">Full History</Link>

            </div>
            <div className="lg:w-1/2 sm:w-full">
                <Image src="/home/overview/overview-image.avif" alt="Overview Image" width={700} height={500} />
            </div>
        </div>
    )
}