
import React from "react";
import {AccordionFAQ} from "./AccordionFAQ";

export type questionProps = {
    question: string,
    answer: string,
}
export type FAQProps = {
    questions:questionProps[]
}

export const FAQ = ({questions}: FAQProps) => {

    function cardRender({answer, question}: questionProps){
        return  <AccordionFAQ question={question} answer={answer}></AccordionFAQ>

    
    }

    const cardsRender= () =>{
        return questions.map(question => {
            return cardRender(question)
          });
    }


    return (
        
        <section className="py-10 bg-baseColor sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Frequently Ask Question
            </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
        {cardsRender()}
        </div>
        
        <p className="text-center text-gray-600 textbase mt-9">
            Still have questions? 
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">Contact
                our support
            </span>
        </p>
    </div>
</section>
    )
}