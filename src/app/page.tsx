import Hero from "../components/hero";
import Overview from "../components/overview";
import ProductSection from "../components/products";
import Testimonial from "../components/testimonial"

const Home = () => {
    return (
        <main>
            <div>
                <Hero />
            </div>
            <div className="mt-24 lg:mt-40 lg:mb-20">
                <Overview />
            </div>
            <div className="mt-24 lg:mt-40">
                <ProductSection />
            </div>
            <div className="mt-24 mb-10 lg:mt-40 lg:mb-20">
                <Testimonial />
            </div>
        </main>
    );
}

export default Home;