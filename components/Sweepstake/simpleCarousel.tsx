'use client'

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
function SimpleCarousel() {

    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.,
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        }
    };

    const renderCards = () => {

        const image = ["/hellcat.png", "/anventador.png", "/corvette.png"]
        return image.map(data => {
            return <Image
            key={" "}
            className="object-fill"
            src={data}
            alt="Sunset in the mountains"
            width={1000}
            height={1000}></Image>
        });
    };

    return (
<Carousel swipeable={false}
            draggable={false}
            arrows={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={500}
            keyBoardControl={false}
            transitionDuration={200}
            partialVisbile={false}
            >
              {renderCards()}
            </Carousel>
    )
}

export default SimpleCarousel;