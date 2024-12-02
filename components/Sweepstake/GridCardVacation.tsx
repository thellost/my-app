import React from "react";
import Image from "next/image";
import { GridCardProps } from "./GridCard";

export const GridCardVacation = ({
    title = "default title",
    price = "1.00 $",
    image = "/hellcat.png",
    bodyText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, debitis ex quos consequatur voluptates maxime. Asperiores natus et, at velit facilis ut! Possimus molestias magnam, voluptas perspiciatis fugiat illum laudantium.",
    days = "12",
    sold = "0"

} : GridCardProps) => {

    return (

        <div className=" bg-baseColor rounded-xl max-w-96 overflow-hidden shadow-lg">
            <Image
                className="object-cover h-64"
                src={image}
                alt="Sunset in the mountains"
                width={1000}
                height={1000}></Image>
                <div
                className="relative bottom-1/2 bg-baseBackIcon/50 rounded-full w-fit flex flex-row mx-3 px-1 py-1 items-center">
                <img src="/clock-white.png" className="w-5 h-5"></img>
                <div>
                <div className="text-sm font-bold font-Inter text-white px-1">{days}&nbsp;days left</div>
                </div>
            </div>
            <div className="flex px-6 bg-baseColor items-center">
                <div className="px flex w-full bg-gray-400 rounded-full h-1 items-center">
                    <div
                        className="flex-0 bg-orangeAttention h-1 rounded-full"
                        style={{
                        width: `${sold}%`
                    }}></div>
                    <span
                        className="relative flex-0 inline-flex h-3 w-3 -m-1 rounded-full bg-orangeAttention">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orangeAttention opacity-75"></span>
                    </span>
                </div>
                <div className="font-Inter pl-1 text-nowrap text-xs text-white font-semibold">${sold}% Sold</div>
            </div>
            <div className="px-6">
                <div className="text-white font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-300 text-base line-clamp-3 text-justify">
                    {bodyText}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 grid grid-cols-3 items-center">
                <span className="inline-block mr-2 mb-2">
                  <a href={"/holidays/"+title}>
                    <button
                        type='button'
                        className='py-2.5 px-6 text-sm rounded-lg bg-transparent border border-white text-white cursor-pointer font-bold text-center shadow-xs transition-all duration-500 hover:border-orangeAttention hover:bg-orangeAttention hover:text-black'>Entry</button>
                  </a>
                </span>
                <div
                    className=" bg-gray-200 rounded-full py-1 text-center text-sm font-semibold text-gray-700 mr-2 mb-2">#Hot</div>
                <span className="text-gray-200 w-full flex-1 font-Inter text-center font-extrabold text-xl mr-2 mb-2"> {price}</span>
            </div>
        </div>

    );
}