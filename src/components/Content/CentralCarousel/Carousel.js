import React from 'react';
import Carousel from 'nuka-carousel';
import {withStyles} from '@material-ui/core/styles';
import './Carousel.css';

import slide_1 from '../../../assets/intoduction.jpg';
import slide_2 from '../../../assets/intoduction2.jpg';
import slide_3 from '../../../assets/intoduction3.jpg';

/*
const styles = theme => ({
    defaultButtonStyles: {
        background: "blue"

 }
});

*/


const SectionCarousel = () => {

    const carouselParameters = {


        width: "50%",
        style: {
            alignItems: "center"
        },
        autoplay: true,
        wrapAround: true,
        withoutControls: true,
    };

    return (
        <div class="testBorder">
            <Carousel
                width={carouselParameters.width}
                autoplay={carouselParameters.autoplay}
                wrapAround={carouselParameters.wrapAround}
                withoutControls={carouselParameters.withoutControls}
                style={carouselParameters.style}
            >
                <img src={slide_1}/>
                <img src={slide_2}/>
                <img src={slide_3}/>
            </Carousel>
        </div>
    );
};
export default SectionCarousel;
