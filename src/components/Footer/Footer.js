import React, { useState } from "react";
import Img from "../../images/footerLogo.png"
import { Link } from "@mui/material";
import { Typography } from "@mui/material";
import SubFooter from "./Subfooter/SubFooter";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { Box, Container } from "@mui/system";
import useStyles from "./FooterStyle";
import Icon from '@mui/material/Icon';
import typography from "../../utils/typography";
import footImg from '../../images/Image for sermon The Bread Belongs to Me.png'

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.footer} bgcolor="white" position="relative" zIndex="1">

           
            <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }}>
                <Box  className={classes.menu}   display="flex">
                    <Box pr={2}>
                    <Box className="footerLogo" display="flex" >
                            <Link href="#"><img src={Img} alt={Img} /></Link>
                        </Box>
                        <Box  className={classes.social}>
                            <List className={classes.socialMedia} >
                                {
                                    socialMedia.map((icon) => {
                                        return (
                                            <ListItem >
                                                <Link href="#" underline="none">
                                                    <Icon className={icon.icon} ></Icon>
                                                </Link>
                                            </ListItem>
                                        )

                                    })
                                }

                            </List>
                        </Box>
                    </Box>
                    <Box item lg={3} md={3} sm={6} xs={12}>
                    <Typography
                            component="h2"
                            color="secondary.main"
                            lineHeight="35px"
                            textTransform="uppercase"
                            letterSpacing="0.9px"
                            fontFamily={typography.fontFamily.poppinsBold}
                            fontSize={typography.h6}>QUICK LINKS</Typography>
                        <Box display="flex"  >
                            <Box  className={classes.footerMenuTop} >
                                <List className={classes.footerMenu}>
                                    {
                                        footerMenu1.map((menu) => {
                                            return (
                                                <ListItem >
                                                    <Link href="#" underline="none">
                                                        {menu.menu}
                                                    </Link>
                                                </ListItem>
                                            )

                                        })
                                    }

                                </List>

                            </Box>
                            <Box className={classes.footerMenuTop} >
                                <List className={classes.footerMenu}>
                                    {
                                        footerMenu2.map((menu) => {
                                            return (
                                                <ListItem >
                                                    <Link href="#" underline="none">
                                                        {menu.menu}
                                                    </Link>
                                                </ListItem>
                                            )

                                        })
                                    }

                                </List>
                            </Box>
                        </Box>
                    </Box>
                    <Box pr={2}>
                    <Typography
                            component="h2"
                            color="secondary.main"
                            textTransform="uppercase"
                            lineHeight="40px"
                            letterSpacing="0.9px"
                            fontFamily={typography.fontFamily.poppinsBold}
                            fontSize={typography.h6}>Featured Topics</Typography>
                        <List className={classes.footerMenu}>
                            {
                                footerMenu3.map((menu) => {
                                    return (
                                        <ListItem >
                                            <Link href="#" underline="none">
                                                {menu.menu}
                                            </Link>
                                        </ListItem>
                                    )

                                })
                            }

                        </List>
                    </Box>
                    <Box >
                    <Typography
                            component="h2"
                            color="secondary.main"
                            lineHeight="40px"
                            letterSpacing="0.9px"
                            textTransform="uppercase"
                            fontFamily={typography.fontFamily.poppinsBold}
                            fontSize={typography.h6}>Featured Series</Typography>
                        <Box maxWidth="223px">

                            <img src={footImg} alt={footImg}></img>
                        </Box>
                    </Box>
                </Box>
            </Box>
                <Box>
                    <SubFooter />
                </Box>
            </Container>
        </Box>
    )
}
const footerMenu1 = [
    { menu: 'Sermon Prep', },
    { menu: ' Church Media', },
    { menu: 'Church Admin', },
    { menu: ' About Us', }
]
const footerMenu2 = [
    { menu: 'Blog', },
    { menu: 'Pricing', },
    { menu: 'Contact Us', },
    { menu: 'Privacy Policy', }
]
const footerMenu3 = [
    { menu: 'Easter/Passover', },
    { menu: "Christ's Return" },
    { menu: ' Love', },
    { menu: 'The Cross', }
]


const socialMedia = [
    {
        icon: 'icon-facebook',
    },
    {
        icon: 'icon-twitter',
    },
    {
        icon: 'icon-youtube2',
    },
    {
        icon: 'icon-search',
    },
]
export default Footer;