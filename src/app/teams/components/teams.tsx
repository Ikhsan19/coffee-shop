import Image from "next/image";
import { ITeams } from "../types/teams.interface";
import { allTeams } from "../types/teams";

async function getData() {
    try {
        const dynamicData = await fetch(
            `https://randomuser.me/api/?results=6&nat=us`
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
        <div className="mb-20">
            <div className="text-center mt-10 lg:mt-32">
                <h2 className="text-4xl font-bold mb-4">Our Teams</h2>
                <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 container mx-auto">
                    {results.map((res: ITeams, index: number) => {
                        return (
                            <div className="mb-0 md:mb-0 sm:mb-1 lg:mb-2 p-6 mt-10 border border-gray-600" key={res.login.uuid}>
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
                                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                                    {allTeams[index].position}
                                </h6>
                                <span className="text-gray-500">{res.phone}</span>
                                <p className="mt-4">{allTeams[index].desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}