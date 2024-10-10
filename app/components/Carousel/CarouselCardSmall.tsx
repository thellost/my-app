

import React from "react";
import { CarouselCardProps } from "./CarouselCustom";
import Image from "next/image";

export const CarouselCardSmall = ({bodytext="default body", title="default title", url="/SlotGo.jpg", playing="218"}: CarouselCardProps) => {

    return (
        

<div className=" bg-baseColor rounded-xl max-w-96 overflow-hidden shadow-lg w-96">
  <Image className="object-fill h-80 w-96" src={url} alt="Sunset in the mountains" width={1000} height={1000}></Image>
  <div className="px-6 py-4">
    <div className="text-white font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-300 text-base">
      {bodytext}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2 span">
    <span className="inline-block mr-2 mb-2"><button type='button' className='py-2.5 px-6 text-sm rounded-lg bg-transparent border border-white text-white cursor-pointer font-bold text-center shadow-xs transition-all duration-500 hover:border-orangeAttention hover:bg-orangeAttention hover:text-black'>Play Now</button></span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Hot</span>
    <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-orangeAttention mr-2 mb-2 animate-pulse">• {playing} Playing</span>
  </div>
</div>

    );
}