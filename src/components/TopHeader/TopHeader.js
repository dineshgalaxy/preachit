import React from "react";
import { Box } from "@mui/system";
import userIcon from "../../images/user.png";
import { Container } from "@mui/system";
import useStyles from './TopHeaderStyles';
import { Button } from "@mui/material";
const TopHeader = () => {
    const classes = useStyles();
    return (
        <Box bgcolor="secondary.dark" py="5px" className={classes.topHeader}>
            <Container maxWidth="xlg">
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                    <Button variant="text" endIcon={<img alt={userIcon} src={userIcon} />}>
                    login
                    </Button>
                    {/* <Link href="#" underline="none" fontFamily={typography.fontFamily.poppinsBold} textTransform="uppercase" lineHeight="40px" letterSpacing="0.9px" color="common.white" fontSize={typography.h6md}>login</Link>
                    <Box pl="9px">
                        
                    </Box> */}
                </Box>
            </Container>
        </Box>
    )
}

export default TopHeader;