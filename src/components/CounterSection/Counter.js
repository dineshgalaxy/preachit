import { Box, Container } from "@mui/system";
import React from "react";
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material"; import typography from "../../utils/typography";
import useStyles from "./CounterStyle";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const Counter = () => {
    const classes = useStyles();
    return (
        <Box className={classes.counter}>
            <Container>
                <Grid container rowSpacing={5}>
                    <Grid item xs={12} md={4} sm={6}>
                        <Box textAlign="center" >
                            <Typography variant="h2"
                                fontFamily={typography.fontFamily.museo900}
                                letterSpacing="2px"
                                fontSize={typography.h2}
                                color="white"
                            >17 <Typography variant="h2" 
                            fontSize={typography.h2}
                                fontFamily={typography.fontFamily.museo900}
                               display="inline-block"
                                color="common.white"
                            >years</Typography></Typography>

                            <Typography variant="h4"
                                fontFamily={typography.fontFamily.poppinsBold}
                                fontSize={typography.h5}
                                letterSpacing="1px"
                                color="common.white"
                                textTransform="uppercase"
                                mt="12px"
                            >serving pastors</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>

                        <Box textAlign="center">
                        <Box className={classes.popOver}
                maxWidth="165px"
                width="100%"
                margin="0 auto"
                textAlign="right"
                marginTop= '-21px'
            >
                <Tooltip className={classes.toolTip} title="Sermons are carefully reviewed and curated by our team. " arrow placement="top" >
                    <Button>i</Button>
                </Tooltip>

            </Box>
                            <Typography variant="h2"
                                fontFamily={typography.fontFamily.museo900}
                                fontSize={typography.h2}
                                letterSpacing="1px"
                                color="common.white"
                            >  5,000+  </Typography>

                            <Typography variant="h4"
                                fontFamily={typography.fontFamily.poppinsBold}
                                fontSize={typography.h5}
                                letterSpacing="1px"
                                color="common.white"
                                textTransform="uppercase"
                                mt="12px"
                            >sermon outlines
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <Box textAlign="center">
                            <Typography variant="h2"
                                fontFamily={typography.fontFamily.museo900}
                                fontSize={typography.h2}
                                letterSpacing="1px"
                                color="common.white"
                            >  2,000+
                            </Typography>

                            <Typography variant="h4"
                                fontFamily={typography.fontFamily.poppinsBold}
                                fontSize={typography.h5}
                                letterSpacing="1px"
                                color="common.white"
                                textTransform="uppercase"
                                mt="12px"
                            >ministry resources
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default Counter;