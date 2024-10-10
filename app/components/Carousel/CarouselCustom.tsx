import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselCardBig} from './CarouselCardBig';
import { CarouselCardSmall} from './CarouselCardSmall';

type CarouselProps = {
  title?: string | '',
  bodytext?:string | '',
  bgColor?:string,
  titleColor?: string | '',
  bodytextColor?: string | '',
  data: CarouselCardProps[],
  type?: "BigCard"|"SmallCard",
  infinite?: boolean
}
export type CarouselCardProps = {
  title?: string | '',
  bodytext?:string | '',
  url?:string,
  playing?:string
} 

const CarouselCustom = ({bodytext="Popular & Exciting Games !", title="Featured This Month", bgColor="baseColor", data, titleColor="white", bodytextColor=titleColor, type="BigCard", infinite=false}: CarouselProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,// optional, default to 1.,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 40
    }
  };
  let renderCards;
  switch(type){
    case 'BigCard':
      renderCards = () => {
        return data.map(data => {
          return <CarouselCardBig key=" " title={data.title} bodytext={data.bodytext} url={data.url}></CarouselCardBig>
        });
      };
      responsive.desktop.items = 2;
      break;
    case 'SmallCard':
      renderCards = () => {
        return data.map(data => {
          return <CarouselCardSmall key=" " title={data.title} bodytext={data.bodytext} url={data.url} playing={data.playing}></CarouselCardSmall>
        });
      };
      responsive.desktop.items = 3;
      responsive.desktop.partialVisibilityGutter = 60;
      break;
    default:
      renderCards = () => {
        return data.map(data => {
          return <CarouselCardBig key=" " title={data.title} bodytext={data.bodytext} url={data.url}></CarouselCardBig>
        });
      };
      break;

  }
  
    return (
        <div className={`bg-${bgColor} row-auto h-auto overflow-visible pb-20 pl-20 pt-20`}>
          <h2 className={`mb-4 text-2xl text-inter font-extrabold tracking-tight leading-none text-${titleColor} md:text-3xl lg:text-4xl dark:text-${titleColor}`}>{title}</h2>
          <p className={`mb-8 text-lg font-normal text-${bodytextColor} lg:text-xl dark:text-${bodytextColor}`}>{bodytext}</p>
            <Carousel
            swipeable={false}
            draggable={true}
            arrows={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={infinite}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            transitionDuration={500}
            partialVisbile={true}
            >
            {renderCards()}
            </Carousel>
            </div>
    )
}

export default CarouselCustom