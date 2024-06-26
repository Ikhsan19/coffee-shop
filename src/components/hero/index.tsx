import LinkCTA from "../link-cta"

const Hero = () => {
    return (
        <section>
            <div className="h-screen bg-cover bg-bottom" style={{ backgroundImage: "url(/home/hero/hero.avif)" }}>
                <div className="h-full w-full flex items-center bg-black bg-opacity-40">
                    <div className="container mx-auto">
                        <div className="w-full text-center lg:w-1/2 sm:w-full sm:text-center lg:text-left">
                            <h1 className="text-white font-bold text-6xl mb-8">Indulge in the Aroma and Warmth of Coffee</h1>
                            <p className="text-white mb-10">Welcome to a unique journey through captivating coffee aromas and flavors. Discover beauty in every sip and feel the comforting warmth of an inspiring cup of coffee.</p>
                            <LinkCTA
                                href="/products"
                                classname="bg-brown hover:bg-[#6F4E37] p-3 text-white"
                                text="Explore Menu"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;