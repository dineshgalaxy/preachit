import React from "react";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import typography from "../../utils/typography";
import Grid from '@mui/material/Grid';
import serviceImg1 from '../../images/Group45.png';
import serviceImg2 from '../../images/Group44.png';
import serviceImg3 from '../../images/Group46.png';
import useStyles from "./ServicesStyle";
const Services = () => {
    const classes = useStyles();
    return (
        <Box>
            <Container>
            <Box className={classes.serviceHeading}>
            <Box className={classes.heading}>
                <Typography
                    fontFamily={typography.fontFamily.poppinsBold}
                    color="secondary.main"
                    textAlign="center"
                    variant="h2"
                    letterSpacing="normal"
                >
                    Unlock access to ministry resources!
                </Typography>
                </Box>
</Box>

                <Box>
                    <Grid container justifyContent="center"  alignItems="center" >
                       

                            {
                                serviceItem.map((service) => {
                                    return (
                                        <Grid item lg={4} key={service.img}>
                                        <Box textAlign="center" justifyContent="center" margin="0 10px 0" display="flex" flexDirection="column" alignItems="center">
                                            <Box paddingBottom="28px"  display="flex" margin="0 auto" justifyContent="center" alignItems="center">
                                                <img src={service.img} alt={service.img} />
                                            </Box>
                                            <Typography
                                                variant="h2"
                                                fontSize={typography.h5xl}
                                                color="common.black"
                                                lineHeight="30px"
                                                fontFamily={typography.fontFamily.poppinsReg}
                                                maxWidth="210px"
                                                marginBottom="8px"
                                                letterSpacing="normal"
                                            >{service.heading}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                fontSize={typography.h6}
                                                color="common.black"
                                                lineHeight="30px"
                                                maxWidth="260px"
                                                letterSpacing="normal"
                                                fontFamily={typography.fontFamily.openSansLight}
                                            >{service.para}

                                            </Typography>
                                        </Box>
                                        </Grid>
                                    )
                                })
                            }


                        
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
const serviceItem = [
    {
        img: serviceImg1,
        heading: 'Become a member',
        para: 'Pick your membership and sign up to become a member.'
    },
    {
        img: serviceImg2,
        heading: 'Find the resources you need',
        para: 'Find what you need in our database, filled with thousands of resources. '
    },
    {
        img: serviceImg3,
        heading: 'Preach with confidence',
        para: 'Inspire your congregation and preach with confidence.'
    }
]
export default Services;