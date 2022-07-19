import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import typography from "../../utils/typography";
import SelectInput from "../shared/SelectInput";
import { Paper } from "@mui/material";
import { Divider } from "@mui/material";
import { InputBase } from "@mui/material";
import useStyles from "./SearchbarStyle";
import Styles from '../HeroImg/HeroImgStyle'

const Searchbar = () => {
    const classes = useStyles();
    const styles = Styles();

    return (
        <Container>
        <Box className={classes.searchbar2}>
            <Box className={classes.heading}>
            <Typography variant="h2"
                fontFamily={typography.fontFamily.poppinsBold}
                textAlign="center"
                color="secondary.main"
                marginBottom="45px"
            >What are you looking for? </Typography>
            </Box>
            <Box>
                <Box
                    width="100%"
                    className={classes.formBox}
                >


                    <Paper
                        className={styles.searchBox}
                        component="form"
                        sx={{ p: '0px 23px 0 8px',boxShadow:'0 0 20px 0 rgba(0, 0, 0, 0.2)', display: 'flex', alignItems: 'center', borderRadius: '16px' }}
                    >
                        <Box className={styles.selectItem}>
                            <SelectInput categoriName="CATEGORIES" displayCategories={true} />
                        </Box>
                        <Divider className={classes.divider} sx={{ height: 89, borderColor: 'grey.dark', m: '0 20px' }} orientation="vertical" />

                        <InputBase
                            className={classes.search}
                            sx={{ ml: 1, flex: 1, fontSize: typography.h6, color: 'common.black', fontFamily: typography.fontFamily.poppinsReg }}
                            placeholder=" Search sermons, graphics, backgrounds & more…"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <Box className={styles.searchIcon} color="primary.main">
                            <Typography variant="body1" className="icon-search"></Typography>
                        </Box>

                    </Paper>
                    <Box className={styles.mobileSelect}>
                                <SelectInput categoriName="SELECT CATEGORIES" displayCategories={true} />
                            </Box>

                </Box>
            </Box>
        </Box>
        </Container>
    )
}
export default Searchbar;