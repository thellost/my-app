'use client'
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import {ArrowProps} from 'react-multi-carousel/lib/types';
import { useState } from 'react';
type CarouselProps = {
  title?: string | '',
  bodytext?:string | '',
  bgColor?:string,
  titleColor?: string | '',
  bodytextColor?: string | '',
  type?: "BigCard"|"SmallCard",
  infinite?: boolean
}

const ImageSlider = ({bgColor="baseColor", infinite=false}: CarouselProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4  ,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 0
    }
  }; 

  
  const [ImageString,
    setImage] = useState < string > ("/party-potatohead.webp");
  
  console.log(ImageString, setImage);

  const CustomLeftArrow = ({ onClick }:ArrowProps) => {
    if (onClick == null){
        return null
    }
    return <button className='react-multiple-carousel__arrow react-multiple-carousel__arrow--left' onClick={() => {onClick();myFunc();}}></button>
  }
    const myFunc = () => {
        return console.log("TeST")
    }
    return (
        <div className={`bg-${bgColor} flex flex-col items-center gap-3 row-auto overflow-visible z-0 md:pl-20 md:pr-10`}>
            
            <Image src='/party-potatohead.webp' className='w-fit' alt="party" width={1000} height={1000}></Image>
            <Carousel
            className='w-full'
            swipeable={true}
            draggable={true}
            arrows={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={infinite}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            transitionDuration={500}
            partialVisbile={false}
            customLeftArrow={<CustomLeftArrow/>}
            >
            <Image src='/party-potatohead.webp'  className="px-2" alt="party" width={1000} height={1000}></Image>
            <Image src='/party-potatohead.webp'  className="px-2" alt="party" width={1000} height={1000}></Image>
            <Image src='/party-potatohead.webp'  className="px-2" alt="party" width={1000} height={1000}></Image>
            <Image src='/party-potatohead.webp'  className="px-2" alt="party" width={1000} height={1000}></Image>
            
            <Image src='/party-potatohead.webp'  className="px-2" alt="party" width={1000} height={1000}></Image>
            
            <Image src='/party-potatohead.webp'  className="px-2" alt="party" width={1000} height={1000}></Image>
            
            <Image src='/party-potatohead.webp'  className="px-2" alt="party" width={1000} height={1000}></Image>
            
            <Image src='/party-potatohead.webp'  className="px-2" alt="party" width={1000} height={1000}></Image>
            </Carousel>
            
        </div>
    )
}

export default ImageSlider