import Link from "next/link";

export default function Hero() {
    return (
        <section>
            <div className="h-screen bg-cover bg-bottom" style={{ backgroundImage: "url(/home/hero/hero.avif)" }}>
                <div className="container mx-auto h-full flex items-center">
                    <div className="lg:w-1/2 lg:text-left sm:w-full sm:text-center">
                        <h1 className="text-white font-bold text-6xl mb-8">Indulge in the Aroma and Warmth of Coffee</h1>
                        <p className="text-white mb-10">Welcome to a unique journey through captivating coffee aromas and flavors. Discover beauty in every sip and feel the comforting warmth of an inspiring cup of coffee.</p>
                        <Link href="/products" className="bg-[#6F4E37] hover:bg-brown p-3 text-white">Explore Menu</Link>

                    </div>
                </div>
            </div>
        </section>
    )
}