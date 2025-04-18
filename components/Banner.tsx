
import React from "react";
import Image from "next/image";
import scrollDownIcon from "@/public/scroll-down-icon.svg"


export const Banner = () => {

                return (
                    
            <div>
            <section className="bg-center  bg-cover bg-no-repeat bg-[url('/jumbotron-bg.webp')]">
            <section className="bg-baseColor bg-opacity-50 min-h-screen">
                <Image className="z-1 animate-bounce h-14 w-auto px-4 mx-auto absolute inset-x-0 bottom-10" src={scrollDownIcon} alt="scrolldown"></Image>
            
            </section>
            </section>
            </div>
    )
}