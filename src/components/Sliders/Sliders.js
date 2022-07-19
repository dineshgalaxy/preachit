import * as React from 'react';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import useStyles from './SlidersStyle';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import typography from '../../utils/typography';
const Sliders = ({ sliderImg1, sliderImg2, sliderImg3, caption1, caption2, caption3 }) => {
  const classes = useStyles();

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <Container maxWidth="lg">
      <Box className={classes.sliderMan}>
        <Slider {...settings}>
        <Box position="relative">
        <img src={sliderImg1} alt={sliderImg1} />

        <Typography variant="body1"
        position="absolute"
        fontFamily={typography.fontFamily.poppinsBold}
        fontSize={typography.md}
        color="common.white"
        top="30px"
        left="40px"
        width="150px"
        whiteSpace="nowrap"
        overflow=" hidden"
        textOverflow='ellipsis'
            >{caption1}</Typography>
      </Box>
      <Box position="relative">
        <img src={sliderImg2} alt={sliderImg1} />

        <Typography variant="body1"
          position="absolute"
          fontFamily={typography.fontFamily.poppinsBold}
          fontSize={typography.md}
          color="common.white"
          top="30px"
          left="35px"
        >{caption2}</Typography>
      </Box>
      <Box position="relative">
        <img src={sliderImg3} alt={sliderImg1} />

        <Typography variant="body1"
          position="absolute"
          fontFamily={typography.fontFamily.poppinsBold}
          fontSize={typography.md}
          color="common.white"
          top="30px"
          left="35px"
        >{caption3}</Typography>
      </Box>
      <Box position="relative">
        <img src={sliderImg1} alt={sliderImg1} />
        <Typography variant="body1"
          position="absolute"
          fontFamily={typography.fontFamily.poppinsBold}
          fontSize={typography.md}
          color="common.white"
          top="30px"
          left="35px"
        >{caption1}</Typography>
      </Box>
      <Box position="relative">
        <img src={sliderImg2} alt={sliderImg1} />

        <Typography variant="body1"
          position="absolute"
          fontFamily={typography.fontFamily.poppinsBold}
          fontSize={typography.md}
          color="common.white"
          top="30px"
          left="35px"
        >{caption2}</Typography>
      </Box>
      <Box position="relative">
        <img src={sliderImg3} alt={sliderImg1} />

        <Typography variant="body1"
          position="absolute"
          fontFamily={typography.fontFamily.poppinsBold}
          fontSize={typography.md}
          color="common.white"
          top="30px"
          left="35px"
        >{caption3}</Typography>
      </Box>
    </Slider>
      </Box >
    </Container >

  );
}


export default Sliders;
