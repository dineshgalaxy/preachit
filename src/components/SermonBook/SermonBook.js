import { Box, Container } from "@mui/system";
import React from "react";
import useStyles from "./SermonBookStyle";
import { Typography } from "@mui/material";
import typography from "../../utils/typography";
import softwareBook from '../../images/Software_Box_Mockup_5.png';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

const SermonBook = () => {
    const classes = useStyles();
    return (
        <Box className={classes.sermonbook}>
            <Container maxWidth="xl">
                <Box display="flex"  alignItems="center" className={classes.sermonText}>
                    <Box marginTop="-16px" pr={2}>
                    <img src={softwareBook} alt={softwareBook}/>
                    </Box>
                    <Box >
                        <Box paddingLeft="15px" mb="25px" pt="30px">
                            <Box  className={classes.heading}>
                            <Typography
                                variant="h2"
                                color="common.white"
                                lineHeight="40px"
                                fontFamily={typography.fontFamily.museo700}
                               letterSpacing="normal"
                                marginBottom="8px"
                            >Give it a try — download a free sermon today!

                            </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                fontSize={typography.h5}
                                color="common.white"
                                lineHeight="30px"
                                letterSpacing="normal"
                                fontFamily={typography.fontFamily.openSansReg}
                            >Includes full sermon outline, an image pack and more!

                            </Typography>
                        </Box>
                        <Box
                            maxWidth="651px"
                            width="100%"

                            className={classes.formBox}
                        >


                            <Paper
                                className={classes.searchBox}
                                component="form"
                                sx={{ p: '0px 23px 0 8px', display: 'flex', alignItems: 'center', borderRadius: '16px' }}
                            >

                                <InputBase
                                    className={classes.search}
                                    sx={{ ml: 1, flex: 1, fontSize: typography.h5, color: 'common.black', fontFamily: typography.fontFamily.poppinsReg }}
                                    placeholder=" Email"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <Divider className={classes.divider} sx={{  borderColor: 'grey.dark', m: '0 20px' }} orientation="vertical" />

                                <Box className={classes.searchIcon} color="primary.main">
                                    <Typography variant="body1" textTransform="uppercase" padding="0 10px 0 18px"  letterSpacing="1px" fontFamily={typography.fontFamily.poppinsBold}>DOWNLOAD</Typography>
                                </Box>

                            </Paper>


                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default SermonBook;