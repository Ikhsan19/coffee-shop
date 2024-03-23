import Image from "next/image";
import Team from "../teams/components/teams";

export default function About() {
    return (
        <div>
            <div className="h-[500px] bg-cover bg-center" style={{ backgroundImage: "url(/about/about.avif)" }}>
                <div className="container mx-auto flex items-center justify-center h-full">
                    <h1 className="text-white font-bold text-6xl line-through">About</h1>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="mt-20 flex justify-between lg:flex-row lg:gap-x-16 lg:text-left sm:flex-col-reverse sm:gap-y-4 sm:text-center">
                    <div className="lg:w-1/2 sm:w-full my-auto">
                        <h3 className="text-3xl font-bold mb-6">Our Beginning</h3>
                        <p>KahawaStreet is one of the coffee shops in Bima. It was founded by a young man in 2018. He man started this business in a simple rented house on Jalan Lintas Bima-Sumbawa.</p>
                    </div>
                    <div className="lg:w-1/2 sm:w-full">
                        <Image src="/about/about-1.avif" alt="Our Beginning Image" width={700} height={500} />
                    </div>
                </div>
                <div className="mt-20 mb-32 flex justify-between lg:flex-row lg:gap-x-16 lg:text-left sm:flex-col sm:gap-y-4 sm:text-center">
                    <div className="lg:w-1/2 sm:w-full">
                        <Image src="/about/about-2.avif" alt="Our Backgrounds Image" width={700} height={500} />
                    </div>
                    <div className="lg:w-1/2 sm:w-full my-auto">
                        <h3 className="text-3xl font-bold mb-6">Our Backgrounds</h3>
                        <p>KahawaStreet comes from the idea that everyone can enjoy coffee. It does not matter if you like your coffee light and sweet, or you prefer strong coffee with no sugar, you can always enjoy it with your personal preferences in here. It’s our pleasure to help you find the best crafted drink that suits your taste in the best way.</p>
                    </div>
                </div>
                <Team />
                <div className="text-center mb-20">
                    <h2 className="mb-6 text-4xl font-bold">KahawaStreet Culture</h2>
                    <div className="lg:w-3/4 sm:w-full mx-auto">
                        <p>Experience warmth and togetherness in our coffee shop, a place where fresh aromas and warm smiles greet you every time you walk through the door. Here, we serve not just a great cup of coffee, but an experience that builds relationships and enriches the soul. With values such as hospitality, teamwork, and dedication to quality, we create an environment where every individual is valued and inspired to give their best. Join our family at this coffee shop, where every day is an opportunity to create precious moments and enrich lives one cup of coffee at a time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

