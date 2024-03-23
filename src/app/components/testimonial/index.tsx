import Image from "next/image";
import { ITestimonial } from "./types/testimonial.interface";
import { allTestimonial } from "./types/testimonial";

async function getData() {
    try {
        const dynamicData = await fetch(
            `https://randomuser.me/api/?results=3&nat=us`,
            {
                next: { revalidate: 10 },
            }
        );
        const response = await dynamicData.json();
        return response;
    } catch (e) {
        console.log(e);
    }
}

export default async function Team() {
    const { results } = await getData();
    return (
        <div className="container mx-auto">
            <div className="lg:w-1/2 lg:text-left sm:w-full sm:text-center mb-10">
                <h2 className="mb-4 text-4xl font-bold">Read trusted reviews from our customers</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ea reiciendis minima quae! Repudiandae fuga porro illo possimus iure aperiam optio labore cum eveniet in quaerat, ipsam ducimus. Id, consequatur?</p>
            </div>
            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 text-center">
                {results.map((res: ITestimonial, index: number) => {
                    return (
                        <div className="mb-12 md:mb-0 p-6 border border-gray-600" key={res.login.uuid}>
                            <div className="mb-6 flex justify-center">
                                <Image
                                    src={res.picture.large}
                                    width={100}
                                    height={100}
                                    alt="team photo"
                                    className="w-32 shadow-lg dark:shadow-black/20"
                                    loading="eager"
                                />
                            </div>
                            <h5 className="mb-2 text-lg font-bold">
                                {res.name.first} {res.name.last}
                            </h5>
                            <blockquote>
                                <p className="mt-4 text-gray-500">{allTestimonial[index].quote}</p>
                            </blockquote>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}