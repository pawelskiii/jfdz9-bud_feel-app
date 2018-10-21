import React from 'react';
import Carousel from 'nuka-carousel';
import './Carousel.css';

import slide_1 from '../../../assets/intoduction.jpg';
import slide_2 from '../../../assets/intoduction2.jpg';
import slide_3 from '../../../assets/intoduction3.jpg';


const SectionCarousel = () => {

    const carouselParameters = {


        width: 1201,
        autoplay: true,
        wrapAround: true,
        initialSlideHeight: 400,

    };

    return (
        <div className="carousel-border">
            <Carousel
                width={carouselParameters.width}
                autoplay={carouselParameters.autoplay}
                wrapAround={carouselParameters.wrapAround}
                initialSlideHeight={carouselParameters.initialSlideHeight}
            >
                <img src={slide_1} alt="slide_1"/>
                <img src={slide_2} alt="slide_1"/>
                <img src={slide_3} alt="slide_1"/>

            </Carousel>
        </div>
    );
};
export default SectionCarousel;
