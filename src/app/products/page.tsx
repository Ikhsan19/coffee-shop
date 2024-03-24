import Image from "next/image";
import { Products } from "./types/products";
import Testimonial from "../components/testimonial";

export default function Menu() {
    return (
        <div className="mb-20">
            <div className="h-[500px] bg-cover bg-center" style={{ backgroundImage: "url(/about/about.avif)" }}>
                <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-40">
                    <h1 className="text-white font-bold text-6xl line-through">Product</h1>
                </div>
            </div>
            <div className="mb-20">
                <div className="text-center mt-32">
                    <h2 className="text-4xl font-bold">All Menu</h2>
                    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 container mx-auto">
                        {Products.map((product) => {
                            return (
                                <div className="mb-0 sm:mb-1 p-6 mt-10" key={product.title}>
                                    <div className="mb-6 flex justify-center">
                                        <Image src={product.image} width={400} height={400} alt="Product Image" loading="eager" />
                                    </div>
                                    <h4 className="text-2xl font-bold">{product.title}</h4>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
            <Testimonial />
        </div>
    )
};

