import React from "react";
import {GridCardCar} from "./GridCardCar";
import {GridCardVacation} from "./GridCardVacation";

type GridProps = {
    title?: string | '',
    bodytext?: string | '',
    bgColor?: string,
    titleColor?: string | '',
    bodytextColor?: string | '',
    data?: GridCardProps[] | null,
    type?: "CarCard" | "VacationCard",
    infinite?: boolean
}
export type GridCardProps = {
    title?: string | '',
    price?: string | '',
    image: string | '/hellcat.png',
    days?: string | '',
    sold?: string | '0',
    bodyText?: string | ''
}


export const GridCard = ({
    bodytext = "Try your chance at winnings",
    title = "Featured Offerings",
    bgColor = "baseColor",
    data,
    type = "CarCard",
    titleColor = "white"
} : GridProps) => {

    let nums = 0;
    let renderCards;
    if (data == null) {
        
        renderCards = () => {
            return null
        }
    } else {
        switch (type) {
            case 'CarCard':
                renderCards = () => {
                    return data.map(data => {
                        return <GridCardCar
                            key={nums++}
                            title={data.title}
                            price={data.price}
                            image={data.image}
                            days={data.days}
                            sold={data.sold}></GridCardCar>
                    });
                };
                break;
            case 'VacationCard':
                renderCards = () => {
                    return data.map(data => {
                        return <GridCardVacation
                            key={nums++}
                            title={data.title}
                            price={data.price}
                            image={data.image}
                            days={data.days}
                            sold={data.sold}></GridCardVacation>
                    });
                };
                break;
            default:
                renderCards = () => {
                    return data.map(data => {
                        return <GridCardCar
                            key={nums++}
                            title={data.title}
                            price={data.price}
                            image={data.image}
                            days={data.days}
                            sold={data.sold}></GridCardCar>
                    });
                };
                break;
        }
    }

    return (
        <div
            className={`bg-${bgColor} row-auto h-auto overflow-visible pb-20 pl-10 pr-10 pt-20 z-0 md:pl-20 md:pr-10`}>
            <div className="flex gap-3 items-center my-4">
                <img src="/sparkling-section-icon.png"></img>
                <span className="font-sans font-semilight text-2xl  text-baseBlueText">{bodytext}</span>
            </div>
            <h2
                className={`mb-4 text-2xl text-inter font-bold tracking-tight leading-none text-${titleColor} md:text-3xl lg:text-4xl dark:text-${titleColor}`}>{title}</h2>
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-5">
                {renderCards()}
            </div>
        </div>
    );
}