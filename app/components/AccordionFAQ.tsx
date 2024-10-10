import React, { useState } from "react";
export type questionProps = {
  question: string,
  answer: string,
}
export const AccordionFAQ = ({ question, answer }: questionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex items-center justify-between w-full sm:p-6 bg-white transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "rounded-t-xl"
            : "rounded-xl"
        }`}
      >
        <span className="flex text-lg font-semibold text-black">{question}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg id={"arrow"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            className={`w-6 h-6 text-gray-400 transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`grid px-4 pb-5 bg-white sm:px-6 sm:pb-6 transition-all duration-300 ease-in-out text-slate-600 rounded-b-xl ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
    /*
    <div>
    <button onClick={(e) =>handleClick(e.currentTarget.getAttribute("id"))} type="button" id={id} data-state="closed" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
        <span className="flex text-lg font-semibold text-black">{question}</span>
        <svg id={"arrow"+id} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            className="w-6 h-6 text-gray-400 ">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    </button>
    <div id={"answer"+id} className="px-4 pb-5 sm:px-6 sm:pb-6"
    </div>
    </div>
    */
  );
};