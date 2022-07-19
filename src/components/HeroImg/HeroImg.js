import React from "react";
// import Box from '@mui/material/Box';
import useStyles from "./HeroImgStyle";
import { Box, Container } from "@mui/system";
import Menubar from "../Menubar/Menubar";
import { Typography } from "@mui/material";
import typography from "../../utils/typography";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import "../../styles/icon-moon.scss";
import Thumbnail from "../../images/Thumbmail (3).png";
import Img1 from "../../images/sermon-Blessing.png";
import Img2 from "../../images/Image-Calvary.png";
import Img3 from "../../images/Image-Skull.png";
import Img4 from "../../images/Image-sermon-Calvary.png";
import Img5 from "../../images/Image -Family-Life.png";
import Img6 from "../../images/Image-service-Still Here_.png";
import Img7 from "../../images/Image-Enemies-Calvary.png";
import SelectInput from "../shared/SelectInput";

const HeroImg = () => {
    const classes = useStyles();
    return (
        <Box className={classes.heroImg} position="relative">
            <Menubar></Menubar>
            <Box className={classes.blurImg}>
                <Box position="relative" top="56px">
                    <Box display="flex" maxWidth="260px" position="absolute" left="-54px" zIndex="1">
                        <img src={Thumbnail} alt={Thumbnail}></img>
                    </Box>
                    <Box display="flex" maxWidth="260px" position="absolute" top="203px" left="93px">
                        <img src={Img1} alt={Img1}></img>
                    </Box>
                </Box>
                <Box>
                    <Box display="flex" maxWidth="260px" position="absolute"
                        bottom="52px"
                        left="-120px"

                    >
                        <img src={Img2} alt={Img2}></img>
                    </Box>
                    <Box display="flex" maxWidth="260px" position="absolute" bottom="0px" left="56px">
                        <img src={Img3} alt={Img3}></img>
                    </Box>
                </Box>
                <Box position="relative" >
                    <Box display="flex" maxWidth="200px" position="absolute" right="0px" marginRight="-50px" top="50px">
                        <img src={Img4} alt={Img4}></img>
                    </Box>
                    <Box display="flex" maxWidth="260px" position="absolute" right="125px" top="130px">
                        <img src={Img5} alt={Img5}></img>
                    </Box>
                </Box>
                <Box bottom="0" right="0">
                    <Box display="flex" maxWidth="260px" position="absolute"
                        right="-121px"
                        bottom="160px"
                    ><img src={Img7} alt={Img7}></img>

                    </Box>
                    <Box display="flex" maxWidth="420px" position="absolute"
                        right="-89px"
                        bottom="-62px">
                        <img src={Img6} alt={Img6}></img>
                    </Box>
                </Box>
            </Box>
            <Container>
                <Box className={classes.heroText} display="flex" position="relative" zIndex="1" flexDirection="column" justifyContent="center" alignItems="center">
                    <Box textAlign="center" className={classes.text}>
                        <Typography letterSpacing="2.4px" component="h2" textTransform="uppercase" color="grey.semiWhite" fontFamily={typography.fontFamily.poppinsReg}>Ministry Resources
                        </Typography>
                        <Typography className={classes.heading} component="h1" lineHeight="55px" fontSize={typography.h1} color="grey.semiWhite" fontFamily={typography.fontFamily.museo700}>
                            Access everything you need to inspire your congregation.

                        </Typography>
                    </Box>
                    <Box
                        maxWidth="893px"
                        width="100%"
                        className={classes.formBox}
                    >


                        <Paper
                            className={classes.searchBox}
                            component="form"
                            sx={{ p: '0px 23px 0 8px', display: 'flex', alignItems: 'center', borderRadius: '16px' }}
                        >
                            <Box className={classes.selectItem}>
                                <SelectInput categoriName="CATEGORIES" displayCategories={true} />
                            </Box>
                            <Divider className={classes.divider} sx={{ height: 89, borderColor: 'grey.dark', m: '0 20px' }} orientation="vertical" />

                            <InputBase
                                className={classes.search}
                                sx={{ ml: 1, flex: 1, fontSize: typography.h6, color: 'common.black', fontFamily: typography.fontFamily.poppinsReg }}
                                placeholder=" Search sermons, graphics, backgrounds & more…"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <Box className={classes.searchIcon} color="primary.main">
                                <Typography variant="body1" className="icon-search"></Typography>
                            </Box>

                        </Paper>
                        <Box className={classes.mobileSelect}>
                            <SelectInput categoriName="SELECT CATEGORIES" displayCategories={true} />
                        </Box>
                    </Box>
                </Box>
            </Container>
            
        </Box>
    )
}
export default HeroImg;