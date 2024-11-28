import {ReactElement} from "react";
import Image from "next/image";
import logo from '@/public/figma-svgrepo-com-Orange.svg';
export const HalfBanner = () : ReactElement => {
    
    return (

        <section className="bg-baseColor flex">
            <section className="w-1/2 ">
                <img src="/beachclub-potatohead.webp"></img>
            </section>
            <section className="w-1/2 px-10 py-5 text-white font-Inter">
                <h2 className=" text-4xl font-bold flex">
                Win Your Dream Getaway!
                </h2>
                <p className="relative top-1/2 transform  -translate-y-1/2">
                <span className="text-orangeAttention">The Ultimate destination </span> for turning your travel dreams into reality. Our sweepstakes platform offers you the chance to win breathtaking vacation experiences to the most stunning destinations around the world. From tropical beach escapes and luxury cruises to adventurous mountain retreats and iconic city tours, our prizes are designed to create memories that last a lifetime. Entering is simple, fun, and rewarding—every entry brings you closer to your dream getaway. Why wait? Start your journey to the vacation of your dreams today!
                </p>
                <button type='button' className=' py-2.5 px-6 text-sm rounded-lg bg-transparent border  text-white cursor-pointer font-bold text-center shadow-xs transition-all duration-500 border-white hover:border-orangeAttention hover:bg-orangeAttention hover:text-black'>See More ➜</button>
            </section>
        </section>

    )
}
