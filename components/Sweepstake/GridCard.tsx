import React from "react";
import Image from "next/image";

type CarouselProps = {
    title?: string | '',
    bodytext?: string | '',
    bgColor?: string,
    titleColor?: string | '',
    bodytextColor?: string | '',
    data: 'null',
    type?: "BigCard" | "SmallCard",
    infinite?: boolean
}

export const GridCard = ({
    bodytext = "Popular & Exciting Games !",
    title = "Featured Offerings",
    bgColor = "baseColor",
    data,
    titleColor = "white",
    bodytextColor = titleColor,
    type = "BigCard",
    infinite = false
} : CarouselProps) => {

    return (
        <div
            className={`bg-${bgColor} row-auto h-auto overflow-visible pb-20 pl-10 pr-10 pt-20 z-0 md:pl-20 md:pr-10`}>
            <div className="flex gap-3 items-center my-4">
                <img src="/sparkling-section-icon.png"></img>
                <span className="font-sans font-semilight text-2xl  text-baseBlueText">Try your chance at winning</span>
            </div>
            <h2
                className={`mb-4 text-2xl text-inter font-bold tracking-tight leading-none text-${titleColor} md:text-3xl lg:text-4xl dark:text-${titleColor}`}>{title}</h2>
            <div className="grid lg:grid-cols-4 gap-y-2">
                <div
                    className="max-w-xs mx-4 mb-2 group rounded-2xl shadow-lg overflow-hidden">

                    
                    <div className="z-20 px-8 bg-baseLightBlue w-full h-60 rounded-t-2xl">

                        <div
                            className="relative z-10 bg-baseBlueText transition ease-in-out duration-500 brightness-150 group-hover:brightness-105  -translate-y-48 -translate-x-36 w-[46rem] h-72 -rotate-[20deg] rounded-t-2xl"></div>
                        <img
                            className="relative scale-125 z-40 left-1/2 transform -translate-x-1/2 -translate-y-48"
                            src="/hellcat.png"></img>
                    </div>
                    
                    <div className="absolute flex flex-row z-20 px-6 py-1 -translate-y-56 items-center">
                        <img src="/clock.png" className="w-5 h-5"></img> 
                        <div className="text-sm font-light font-Inter text-gray-500 px-1">152 days</div>
                    </div>
                    <div className="flex px-6 bg-baseLightBlue items-center">
                        <div
                            className="px flex w-full bg-[#aeafff] rounded-full h-1 dark:bg-gray-700 items-center">
                            <div className="flex-0 bg-[#554aff] h-1 rounded-full w-[45%]"></div>
                            <span
                                className="relative flex-0 inline-flex h-3 w-3 -m-1 rounded-full bg-[#554aff]">
                                <span
                                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#554aff] opacity-75"></span>
                            </span>
                        </div>
                        <div className="font-Inter pl-1 text-nowrap text-xs font-semibold">45% Sold</div>
                    </div>
                    <h4
                        className=" text-2xl bg-baseLightBlue font-Inter text-center py-3 justify-center font-bold tracking-tight text-gray-800 transition ease-in-out duration-300 group-hover:text-baseBlueText">Challenger Hellcat</h4>
                    <div className="flex bg-baseLightBlue items-center">

                        <div
                            className="my-1 flex w-full bg-[#dadada] rounded-full h-[1px] dark:bg-gray-700 items-center"></div>
                    </div>

                    <div className="flex bg-baseLightBlue items-center">

                        <div
                            className="my-1 flex w-full bg-[#dadada] rounded-full h-[1px] dark:bg-gray-700 items-center"></div>
                    </div>

                </div>

            </div>
        </div>
    );
}