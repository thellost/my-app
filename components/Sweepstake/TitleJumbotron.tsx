
import {ReactElement} from "react";
import SimpleCarousel from "./simpleCarousel";
const TitleJumbotron = () : ReactElement => {

    return (

        <section className="bg-baseColor">
            <div className="pt-8 px-4 mx-auto max-w-screen-xl lg:pt-24 xl:flex lg:grid-rows gap-8 lg:gap-16">
                <div className="flex flex-col justify-center">
                    <div className='font-inter text-lg text-orangeAttention md:text-xl lg:text-2xl'>
                        Entry&nbsp;&nbsp;➜&nbsp;&nbsp;Draw&nbsp;&nbsp;➜&nbsp;&nbsp;Win</div>
                    <h1
                        className="mb-4 text-4xl font-extrabold tracking-tight font-Inter leading-none text-white md:text-7xl lg:text-8xl dark:text-white">
                        Could you be our
                        <br></br>
                        Next&nbsp;
                        <span className="font-Inter text-orangeAttention">Winner?<svg
                            className="relative left-56 w-3/6"
                            viewBox="0 0 355 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.92099 12.8063C56.8373 3.14121 205.75 -10.0362 354.071 14.5747"
                                    stroke="#ED7127"></path>
                            </svg>
                        </span>
                    </h1>
                    <p className="mb-8 text-lg font-normal text-white lg:text-xl">Here Nows your chance to win a car or a vacation to bahamas !<br></br>
                        Check out the prize you can win in our draws. Will you be our next lucky winner?</p>
                    <div className="flex flex-col space sm:flex-row ">
                        <a
                            href="#"
                            className="inline-flex justify-center items-center font-semibold text-md text-center bg-orangeAttention rounded-full px-10 py-2 mr-2 mb-2 text-baseColor hover:underline">
                            Participate Now
                        </a>
                        <a
                            href="#"
                            className="inline-flex justify-center items-center font-bold font-Inter text-md text-center px-10 py-2 mr-2 mb-2 text-white underline">
                            How It&apos;s Works
                        </a>
                    </div>
                </div>

            </div>
            <div className="row-auto overflow-visible pb-20 pl-10 pr-10 pt-20 z-0 md:pl-20 md:pr-10 lg:grid-rows gap-8 lg:gap-16">
                <div className="grid grid-cols-2 w-5/12 justify-center items-center">

                    
                <div className="font-Inter text-white text-6xl items-center"> 1,750+</div>
                <div className="font-Inter font-bold text-white text-2xl items-center">Prizes</div>
                <div className="font-Inter text-white text-7xl items-center "> 10,560+</div>
                <span className="font-Inter font-bold text-white text-2xl items-center">Participants</span>
                </div>
                <div className="flex flex-row justify-end">

                    <div className="relative z-40 bottom-72 h-10 w-6/12"><SimpleCarousel></SimpleCarousel>
                    <div className="relative -z-20 bottom-96 bg-baseBackIcon w-full h-64"></div></div>
                </div>

            </div>
        </section>

    )
}

export default TitleJumbotron