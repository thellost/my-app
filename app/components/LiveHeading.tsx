'use client' //#for carousel
import React, {useState} from "react";
import Image from "next/image";

const LiveHeading = () => {

    const [liveNavOpen,
        setLiveNavOpen] = useState<boolean>(false);

    return (
        <div
            className="px-6 py-2  flex bg-baseWashedColor sticky top-0 z-50 transition-all">
            <div className="flex-1 grid-row mr-2 basis-[96.2857143%] overflow-hidden">
                <div
                    className={`flex basis-[96.2857143%] px-4 py-1 border-solid border-[0.5px] border-baseOutline transition-all duration-300 ease-in-out ${liveNavOpen
                    ? "rounded-t-xl"
                    : "rounded-3xl"} `}>

                    <div className="animate-pulse text-sm text-orangeAttention truncate">
                        Live Now :
                    </div>
                    <div className="text-sm px-5 text-baseGrayText truncate">
                        Live Blackjack and Casino
                    </div>
                </div>
                <div
                    className={`origin-top grid grid-cols-5 basis-[96.2857143%] px-4 border-solid border-[0.5px] border-baseOutline transition-all duration-500 ease-in-out rounded-b-xl overflow-hidden ${liveNavOpen
                    ? "grid-rows-[1fr] opacity-100 max-h-screen"
                    : "grid-rows-[0fr] opacity-0 max-h-0"} `}>

                    <div className="text-white flex col-span-5 sm:col-span-4 overflow-hidden py-3 px-2">
                        <div className="flex-1 flex grow flex-row relative bg-baseCardGray rounded-lg shadow overflow-hidden ">
                            <div
                                className="group w-14 h-14 bg-orangeAttention absolute m-auto left-0 right-32 bottom-4 min-w-0.5 min-h-0.5 grid place-items-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="pt-1.5 pl-1 w-10 " viewBox="0 0 100 125">
                                <path d="M78.627 47.203 24.873 16.167c-1.082-.625-2.227-.625-3.311 0-1.084.626-1.562 1.781-1.562 3.032V81.27c0 1.25.478 2.406 1.561 3.031.542.313 1.051.469 1.656.469.604 0 1.161-.156 1.703-.469l53.731-31.035a3.489 3.489 0 0 0 1.738-3.031 3.513 3.513 0 0 0-1.762-3.032z"/>
                              </svg>

                            </div>
                            <Image
                                className="flex-1 static object-cover w-48 h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                                src="/blackjack.png"
                                width={1200}
                                height={700}
                                alt=""></Image>
                            <div className="flex-1 flex flex-col justify-end p-4 leading-normal">
                                <h5
                                    className="mb-2 text-2xl font-bold tracking-tight text-orangeAttention animate-pulse">Live Now:</h5>
                                <h5
                                    className="mb-2 text-xl font-bold tracking-tight text-gray-200 dark:text-white">Blackjack Room #12</h5>
                                <p className="mb-3 font-normal text-gray-400">Join us !</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-white col-span-1 hidden sm:block overflow-hidden py-3 px-2">
                        <div
                            className="flex-1 h-full flex grow flex-row bg-baseCardGray rounded-lg shadow overflow-hidden">
                            <div className="flex-1 flex flex-col justify-between p-4 leading-normal">
                                <h5
                                    className="mb-2 text-2xl font-bold tracking-tight text-orangeAttention animate-pulse">Live Now:</h5>
                               
                                <button className="border truncate hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full">
                                  More Live Game here !
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                onClick={() => setLiveNavOpen(!liveNavOpen)}
                className="group w-7 h-7 relative min-w-0.5 min-h-0.5 grid place-items-center rounded-full cursor-pointer border-solid border-[0.5px] border-[#ffffff] hover:bg-white">
                <svg
                    className="w-[18px] h-[18px] fill-[#ffffff] content-center group-hover:fill-black drop-shadow-xl"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>

                </svg>

            </div>

        </div>
    )
}

export default LiveHeading