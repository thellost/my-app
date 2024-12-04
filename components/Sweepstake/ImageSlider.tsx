'use client'
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import {ArrowProps} from 'react-multi-carousel/lib/types';
import {useState} from 'react';
type CarouselProps = {
    title?: string | '',
    bodytext?: string | '',
    bgColor?: string,
    titleColor?: string | '',
    bodytextColor?: string | '',
    type?: "BigCard" | "SmallCard",
    infinite?: boolean,
    imgList: string[]
}

const ImageSlider = ({
    bgColor = "baseColor",
    imgList,
    infinite = false
} : CarouselProps) => {
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 4,
            slidesToSlide: 1,
            partialVisibilityGutter: 0
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 4,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 0
        }
    };

    const [ImageString,
        setImage] = useState < string > (imgList[0]);

    const CustomLeftArrow = ({onClick, carouselState} : ArrowProps) => {
        if (carouselState?.currentSlide != null) {
            setImage(imgList[carouselState?.currentSlide
                ])
        }
        if (onClick == null) {
            return null
        }
        return <button
            className='react-multiple-carousel__arrow react-multiple-carousel__arrow--left'
            onClick={() => {
            onClick();
        }}></button>
    }

    const CustomRightArrow = ({onClick, carouselState} : ArrowProps) => {
      if (carouselState?.currentSlide != null) {
          setImage(imgList[carouselState?.currentSlide
              ])
      }
      if (onClick == null) {
          return null
      }
      return <button
          className='react-multiple-carousel__arrow react-multiple-carousel__arrow--right'
          onClick={() => {
          onClick();
      }}></button>
  }


    const renderCards = () => {
        return imgList.map(img_string => {
            return <Image
                src={img_string}
                className="w-full h-full object-cover px-1.5"
                alt="party"
                width={1000}
                height={1000}
                key={" "}></Image>
        });
    }
    return (
        <div
            className={`bg-${bgColor} flex flex-col items-center gap-3 row-auto overflow-visible z-0 md:pl-20 md:pr-10`}>

            <Image
                src={ImageString}
                className='w-full h-96 overflow-hidden object-scale-down'
                alt="party"
                width={1000}
                height={1000}></Image>
            <Carousel className='w-full' swipeable={true} draggable={true} arrows={true} responsive={responsive} ssr={false} // means to render carousel on server-side.
                infinite={infinite} autoPlaySpeed={1000} keyBoardControl={true} transitionDuration={500} partialVisbile={true}
                customRightArrow={<CustomRightArrow/>} customLeftArrow={< CustomLeftArrow />}>
                {renderCards()}
            </Carousel>

        </div>
    )
}

export default ImageSlider