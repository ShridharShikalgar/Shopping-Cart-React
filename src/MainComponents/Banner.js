import React from 'react';
import Carousel from 'react-multi-carousel';
import {styled} from '@mui/material'
import { bannerData } from '../Constants/data';
import 'react-multi-carousel/lib/styles.css';

const Image = styled('img')({
    height: 280,
    width:'100%'
})
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Banner() {
    return (
        <Carousel 
            responsive={responsive}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3500}
        >
        {
            bannerData.map(data =>(
                <Image src={data.url} alt="banner"/>
            ))
        }
        </Carousel>
    );
}

export default Banner;