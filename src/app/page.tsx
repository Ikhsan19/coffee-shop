import Hero from "./components/hero";
import Overview from "./components/overview";
import ProductSection from "./components/products/components";
import Testimonial from "./components/testimonial"

export default function Home() {
    return (
        <div>
            <div>
                <Hero />
            </div>
            <div className="mt-40 mb-20">
                <Overview />
            </div>
            <div className="mt-40">
                <ProductSection />
            </div>
            <div className="mt-40 mb-20">
                <Testimonial />
            </div>
        </div>
    );
}
