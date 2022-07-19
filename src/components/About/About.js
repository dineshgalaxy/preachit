import { Typography } from "@mui/material";
import { Box, Container, } from "@mui/system";
import React from "react";
import useStyles from "./AboutStyle";
import typography from "../../utils/typography";
import Imge from '../../images/Path250.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import avtarImg from '../../images/lightstock_66078_comp.png'

const About = () => {
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
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Box className={classes.about}>
            <Container>
                <Box flexDirection="column" display="flex" justifyContent="center" className={classes.aboutFlex}>
                    <Box className={classes.plusLogo} maxWidth="40px" display="flex" alignItems="center" justifyContent="center" >
                        <img src={Imge} alt={Imge} />
                    </Box>
                    <Box maxWidth="430px" className={classes.heading}>
                        <Typography

                            fontFamily={typography.fontFamily.poppinsBold}
                            color="common.white"
                            variant="h2"
                            letterSpacing="normal"
                            lineHeight="40px"

                        >
                            Ministry resources created for pastors, by pastors.
                        </Typography>

                    </Box>
                    <Box className={classes.aboutTop} display="flex" justifyContent="space-between" width="100%">
                        <Box maxWidth="430px" className={classes.aboutText}>

                            <Typography
                                fontSize={typography.h6}
                                fontFamily={typography.fontFamily.openSansLight}
                                color="common.white"
                                variant="body1"
                                letterSpacing="normal"
                            lineHeight="30px"
                            >
                                As a pastor, you have a lot of responsibilities, including preparing a new sermon every week, with resources to go with it. Doing this, and fulfilling all your other duties, is hard! And that’s exactly why we exist — to help pastors like you quickly get the resources they need to inspire their congregation.

                            </Typography>
                        </Box >
                        <Box className={classes.aboutSlider} >
                            <Slider {...settings}>

                                {
                                    sliderCard.map((avtarItem) => {
                                        return (
                                            <Box paddingRight="20px" className={classes.cardTop}>
                                                <Card sx={{  padding: '15px', borderRadius: '25px' }} className={classes.card}>
                                                    <CardContent>
                                                        <Box  >
                                                            <Typography width="111px" position="absolute" top="-70px" height="91px" fontSize="150px" fontFamily={typography.fontFamily.museo500} color="secondary.light">“</Typography>
                                                        </Box>
                                                        <Typography pt={2} variant="body2" lineHeight="25px" color="common.black" fontFamily={typography.fontFamily.poppinsReg} fontSize={typography.lg.fontSize}>
                                                            {avtarItem.para}
                                                        </Typography>
                                                    </CardContent>
                                                    <Box>
                                                    <CardHeader className={classes.title}
                                                        avatar={
                                                            <Avatar alt="Remy Sharp" src={avtarItem.avtar} />
                                                        }
                                                        title={avtarItem.title}
                                                        subheader={avtarItem.subheader}
                                                    />
                                                    </Box>
                                                </Card>
                                            </Box>
                                        )
                                    })
                                }


                            </Slider>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
const sliderCard = [
    {
        para: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avtar: avtarImg,
        title: 'John Doe',
        subheader: "Church Name"
    },
    {
        para: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avtar: avtarImg,
        title: 'John Doe',
        subheader: "Church Name"
    },
    {
        para: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avtar: avtarImg,
        title: 'John Doe',
        subheader: "Church Name"
    },
    {
        para: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avtar: avtarImg,
        title: 'John Doe',
        subheader: "Church Name"
    },
    {
        para: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avtar: avtarImg,
        title: 'John Doe',
        subheader: "Church Name"
    },
    {
        para: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avtar: avtarImg,
        title: 'John Doe',
        subheader: "Church Name"
    }
]
export default About;
