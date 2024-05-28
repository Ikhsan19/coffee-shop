"use client"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from "swiper/modules"
import { ProductData } from "./types"
import LinkCTA from "../link-cta"

const ProductSlider = () => {
    return (
        <div className="container mx-auto flex items-center justify-center flex-col">
            <h2 className="text-4xl font-bold mb-16">Products</h2>
            <Swiper
                breakpoints={{
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-[100%]"
            >
                {ProductData.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className="flex flex-col gap-6 mb-16 group relative shadow-lg text-white p-2 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.backgroundImage.src})` }} />
                            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                            <div className="relative h-full flex justify-center">
                                <h4 className="text-xl lg:text-2xl absolute bottom-0">{item.title}</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <LinkCTA
                href="/products"
                classname="bg-brown hover:bg-[#6F4E37] p-3 text-white mt-10"
                text="All Menu"
            />

        </div>
    )
}

export default ProductSlider;