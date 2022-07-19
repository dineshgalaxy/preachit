import { Button, Typography } from "@mui/material";
import { Box,Container } from "@mui/system";
import React from "react";
import typography from "../../utils/typography";
import useStyles from "./MiddleSectionStyle";
const MiddleSection = ()=>{
    const classes  = useStyles();
    return(
        <Box className={classes.midSection}>
            <Container>
                <Box display="flex" justifyContent="flex-end" alignItems="center">
                <Box maxWidth="470px">
                    <Box className={classes.heading}>
                    <Typography
                    fontFamily={typography.fontFamily.museo700}
                    lineHeight="50px"
                    color="common.white"
                    variant="h2"
                    letterSpacing="normal"
                    >
                    Lead an inspired congregation.
                    </Typography>
                    </Box>
                    <Typography 
                    fontSize={typography.h6}
                    fontFamily={typography.fontFamily.openSansLight}
                    lineHeight="30px"
                    color="common.white"
                    marginBottom="30px"
                    marginTop="12px"
                    letterSpacing="normal"
                    >
                    Unlock our ministry resources so you can use them to preach with confidence, inspire your congregation, and keep your doors open for those who need it most. 
                    </Typography>
                    <Button  size="large">BECOME A MEMBER</Button>
                </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default MiddleSection