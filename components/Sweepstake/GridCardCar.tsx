import React from "react";
import {GridCardProps} from "./GridCard";

export const GridCardCar = ({
    title = "default title",
    price = "1.00 $",
    image = "/hellcat.png",
    days = "12",
    sold = "0"
} : GridCardProps) => {

    return (
        <div className="max-w-xs mx-4 mb-2 group rounded-2xl shadow-lg overflow-hidden">

            <div className="z-20 px-8 bg-baseLightBlue w-full h-60 rounded-t-2xl">

                <div
                    className="relative z-10 bg-baseBlueText transition ease-in-out duration-500 brightness-150 group-hover:brightness-105  -translate-y-48 -translate-x-36 w-[46rem] h-72 -rotate-[20deg] rounded-t-2xl"></div>
                <img
                    className="relative scale-125 z-40 left-1/2 transform -translate-x-1/2 -translate-y-48"
                    src={image}></img>
            </div>

            <div
                className="absolute flex flex-row z-20 px-6 py-1 -translate-y-56 items-center">
                <img src="/clock-white.png" className="w-5 h-5"></img>
                <div className="text-sm font-bold font-Inter text-white px-1">{days}
                    days left</div>
            </div>
            <div className="flex px-6 bg-baseLightBlue items-center">
                <div className="px flex w-full bg-[#aeafff] rounded-full h-1 items-center">
                    <div
                        className="flex-0 bg-[#554aff] h-1 rounded-full"
                        style={{
                        width: `${sold}%`
                    }}></div>
                    <span
                        className="relative flex-0 inline-flex h-3 w-3 -m-1 rounded-full bg-[#554aff]">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#554aff] opacity-75"></span>
                    </span>
                </div>
                <div className="font-Inter pl-1 text-nowrap text-xs font-semibold">${sold}% Sold</div>
            </div>
            <h4
                className=" text-2xl bg-baseLightBlue font-Inter text-center py-3 justify-center font-bold tracking-tight text-gray-800 transition ease-in-out duration-300 group-hover:text-baseBlueText">{title}</h4>
            <div className="flex bg-baseLightBlue items-center">

                <div
                    className="my-1 flex w-full bg-[#dadada] rounded-full h-[1px] dark:bg-gray-700 items-center"></div>
            </div>
            <div className="flex py-5 px-8 bg-baseLightBlue justify-between items-center">

                <div className="flex-1 flex-col ">
                    <div className="flex-1 font-Inter font-extrabold text-3xl ">{price}</div>
                    <div className="flex-1 font-Inter text-nowrap ">Per Entry</div>
                </div>
                <button
                    type="button"
                    className="text-white bg-baseBlueText hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-3 py-3 text-center inline-flex items-center me-2">
                    <svg
                        className="w-3.5 h-3.5 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 21">
                        <path
                            d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                    </svg>
                </button>
            </div>

        </div>
    );
}