import {ReactElement} from "react";
import Image from "next/image";
import BannerImage from '@/public/Beachclub-potatohead.webp';
export const HalfBanner = () : ReactElement => {

    return (

        <div className="bg-baseColor h-fit lg:flex">
            <Image className="w-full lg:w-1/2" src={BannerImage} alt="scenery"></Image>
            <section
                className="w-full lg:w-1/2 px-10 py-5 pt-10 text-white font-Inter content-start">
                <h2 className="text-4xl font-bold ">
                    Win Your Dream Getaway!<br></br>
                    <p className="text-lg text-gray-500">From Bali to Everywhere</p>
                </h2>
                <p className="relative lg:top-1/2 lg:-translate-y-full">
                    <span className="text-orangeAttention">The Ultimate destination
                    </span>
                    &nbsp;for turning your travel dreams into reality. Our sweepstakes platform offers you
                    the chance to win breathtaking vacation experiences to the most stunning
                    destinations around the world. From tropical beach escapes and luxury cruises to
                    adventurous mountain retreats and iconic city tours, our prizes are designed to
                    create memories that last a lifetime. Entering is simple, fun, and
                    rewarding—every entry brings you closer to your dream getaway. Why wait? Start
                    your journey to the vacation of your dreams today!
                </p>
                <button
                    type='button'
                    className='relative lg:top-1/2 lg:-translate-y-1/2 my-5 py-2.5 px-6 text-sm rounded-lg bg-transparent border  text-white cursor-pointer font-bold text-center shadow-xs transition-all duration-500 border-white hover:border-orangeAttention hover:bg-orangeAttention hover:text-black'>See More ➜</button>
            </section>
        </div>

    )
}
