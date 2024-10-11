import React, {useState} from "react";

const LiveHeading = () => {

    const [liveNavOpen,
        setLiveNavOpen] = useState(false);

    return (
        <div
            className="px-6 pt-2  flex bg-baseWashedColor sticky top-0 z-50 transition-all">
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
                    className={`origin-top grid grid-cols-5 basis-[96.2857143%] px-4 py-1 border-solid border-[0.5px] border-baseOutline transition-all duration-500 ease-in-out rounded-b-xl ${liveNavOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"} `}>

                    <div className="text-white flex col-span-4 overflow-hidden py-3 px-2">
                        <div
                            className="flex-1 flex grow flex-row bg-baseCardGray rounded-lg shadow ">
                            <img
                                className="flex-1 object-cover w-48 h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                                src="/blackjack.png"
                                alt=""></img>
                            <div className="flex-1 flex flex-col justify-between p-4 leading-normal">
                                    <h5
                                    className="mb-2 text-2xl font-bold tracking-tight text-orangeAttention animate-pulse">Live Now:</h5>
                                    <h5
                                    className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
                                    -</h5>
                                    <h5
                                    className="mb-2 text-xl font-bold tracking-tight text-gray-200 dark:text-white">Blackjack Room #12</h5>
                                <p className="mb-3 font-normal text-gray-400">Join us !</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-white col-span-1 overflow-hidden">asda</div>
                </div>
            </div>
            <div
                onClick={() => setLiveNavOpen(!liveNavOpen)}
                className="group w-7 h-7 relative min-w-0.5 min-h-0.5 grid place-items-center rounded-full border-solid border-[0.5px] border-[#ffffff] hover:bg-white">
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