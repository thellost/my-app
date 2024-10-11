import { ReactElement } from "react";


const LiveHeading = (): ReactElement => {
    return (
        <div className="px-6 py-1 flex bg-baseWashedColor sticky top-0 z-50">
          <div className="flex basis-[96.2857143%] px-4 py-1 mr-5 border-solid border-[0.5px] border-baseOutline rounded-full">
            <div className="text-orangeAttention">
             
            </div>
            <div className="animate-pulse text-sm text-orangeAttention truncate">
            Live Now : 
            </div>
            <div className="text-sm px-5 text-baseGrayText truncate">
            Live Blackjack and Casino 
            </div>
          </div>
          <div className="group w-8 h-8 relative min-w-0.5 min-h-0.5 grid place-items-center rounded-full border-solid border-[0.5px] border-[#ffffff] hover:bg-white">
            <svg className="w-[21px] h-[21px] fill-[#ffffff] content-center group-hover:fill-black drop-shadow-xl" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>

            </svg>
            
          </div>
          
      </div>
    )
}

export default LiveHeading