import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import typography from "../../utils/typography";
import useStyles from "./PlansStyle";
import { Button } from "@mui/material";
import Thumbnail from "../../images/Image for series Basic Pentecostal Doctrine.png";
import Styles from '../HeroImg/HeroImgStyle';
import Img1 from "../../images/Image for series The Abundant Life.png";
import Img2 from "../../images/Image for sermon Rise Above.png";
import Img3 from "../../images/Image for series Jesus Is Better.png";
import Img4 from "../../images/Image for sermon Changing Pastures.png";
import Img5 from "../../images/Image for series The Abundant Life1.png";
import Img6 from "../../images/Image for series The Sermon On The Mount.png";
import Img7 from "../../images/Image for series Disciples with Distinction.png";

const Plans = () =>{
    const classes  = useStyles();
    const styles  = Styles();
    return(
        <Box position="relative" className={classes.planTop}>
   <Box className={styles.blurImg}>
                <Box position="relative" >
                    <Box display="flex" maxWidth="260px" top="-30px" position="absolute" left="0px" zIndex="1">
                        <img src={Thumbnail} alt={Thumbnail}></img>
                    </Box>
                    <Box display="flex" maxWidth="260px" position="absolute" top="110px" left="-50px">
                        <img src={Img1} alt={Img1}></img>
                    </Box>
                </Box>
                <Box>
                    <Box display="flex" maxWidth="260px" position="absolute"
                        bottom="108px"
                        left="182px"

                    >
                        <img src={Img2} alt={Img2}></img>
                    </Box>
                    <Box display="flex" maxWidth="260px" position="absolute" bottom="0px" left="227px">
                        <img src={Img3} alt={Img3}></img>
                    </Box>
                </Box>
                <Box position="relative" >
                    <Box display="flex" maxWidth="200px" position="absolute" right="25px"  top="40px">
                        <img src={Img4} alt={Img4}></img>
                    </Box>
                    <Box display="flex" maxWidth="260px" position="absolute" right="-165px" top="103px">
                        <img src={Img5} alt={Img5}></img>
                    </Box>
                </Box>
                <Box bottom="0" right="0">
                <Box display="flex" maxWidth="420px" position="absolute"
                        right="-135px"
                        bottom="-51px">
                        <img src={Img6} alt={Img6}></img>
                    </Box>
                    <Box display="flex" maxWidth="260px" position="absolute"
                        right="260px"
                        bottom="00px"
                    ><img src={Img7} alt={Img7}></img>

                    </Box>
                    {/* <Box display="flex" maxWidth="420px" position="absolute"
                        right="-89px"
                        bottom="-62px">
                        <img src={Img6} alt={Img6}></img>
                    </Box> */}
                </Box>
            </Box>
            <Container>
            <Box display="flex" justifyContent="center" className={classes.plans}>
                <Box maxWidth="500px" textAlign="center">
                    <Box className={classes.heading}>
                    <Typography
                        color="secondary.main"
                       variant="h2"
                        lineHeight="50px"
                        fontFamily={typography.fontFamily.poppinsBold}
                    >
                    Plans starting from $19.99/month
                    </Typography>
                    </Box>
                    <Typography
                        lineHeight="30px"
                        fontSize={typography.h6}
                        fontFamily={typography.fontFamily.openSansLight}
                        color="common.black"
                        marginBottom='30px'
                        marginTop="10px"
                    >
                   You’ll get unlimited access to all materials and full access to the iOS and Android apps. If it’s not what you need, don’t worry, you can cancel your plan at anytime. 
                    </Typography>
                    <Button  size="large">TRY IT FREE</Button>
                </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Plans;