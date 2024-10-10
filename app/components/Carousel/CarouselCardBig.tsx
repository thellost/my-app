

import React, { Children, ReactNode } from "react";
import { CarouselCardProps } from "./CarouselCustom";


export const CarouselCardBig = ({bodytext="default body", title="default title", url="[url('../public/blackjack.png')]"}: CarouselCardProps) => {

    return (
        <div
        className={`w-11/12 h-96 bg-no-repeat bg-cover overflow-hidden rounded-3xl bg-[url('../public/blackjack.png')]`}>
        <div className="bg-black/50 p-6 h-full ">
          <h3 className="text-2xl font-semibold text-white mb-2 pt-40">{title}</h3>
          <p className="text-base leading-6 text-white mb-6"> {bodytext} </p>
          <button type='button' className='py-2.5 px-6 text-sm rounded-lg bg-transparent border border-white text-white cursor-pointer font-bold text-center shadow-xs transition-all duration-500 hover:border-orangeAttention hover:bg-orangeAttention hover:text-black'>Play Now</button>
        </div>
        </div>
    );
}