import logo from '../../public/figma-svgrepo-com.svg';
import Image from 'next/image';
import { ReactElement } from "react";


const TitleJumbotron = (): ReactElement => {
    return (
                    
            <section className="bg-baseColor h-min">
                <div className="pt-8 px-4 mx-auto max-w-screen-xl lg:pt-16 xl:flex lg:grid-cols-2 gap-8 lg:gap-16">
                    <div>
                        <Image alt="Your Company" src={logo} className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"></Image>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
                        The Best
                        Online Casino & Platform</h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                            <a href="#" className="inline-flex justify-center items-center text-xl text-center text-orangeAttention hover:underline">
                            Sign Up Here !
                            </a>
                        </div>
                    </div>
                    
                </div>
            </section>

    )
}

export default TitleJumbotron