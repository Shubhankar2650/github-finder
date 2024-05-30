import React from "react";
import { Meteors } from "./ui/meteors";
import { Star } from "lucide-react";

export function MeteorsCard({ repo }) {
    return (
        <div className="">
            <div className="group w-full relative max-w-xs">
                <div className="absolute invisible group-hover:visible  inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-2xl md:blur-3xl" />
                <div className="relative  bg-gray-900 border border-gray-800  px-4 py-6 h-full overflow-hidden rounded-xl flex flex-col justify-end items-start">
                    {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-2 w-2 text-gray-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                            />
                        </svg>
                    </div> */}

                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                        {repo.name}
                    </h1>

                    <div className=" flex items-center justify-between space-x-4 rounded-md w-full">

                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Total Stars
                            </p>
                            <p className="text-3xl text-blue-500 text-muted-foreground px-4">
                                {repo.stargazers_count}
                            </p>
                        </div>
                        <Star className="text-blue-700" />
                    </div>
                    <div className="flex justify-between w-full mt-2">
                        <div className="flex gap-2 mt-1">
                            <span className="flex h-2 w-2 translate-y-2 rounded-full bg-sky-500" />
                            {repo.language ? <div className="badge mx-2 badge-error">{repo.language}</div> : <div className="badge mx-2 badge-error">Other</div>}
                        </div>
                        <a className="" href={repo.html_url}>
                            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                                Explore
                            </button>
                        </a>
                    </div>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    );
}