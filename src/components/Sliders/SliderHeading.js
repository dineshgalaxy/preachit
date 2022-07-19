import * as React from 'react';
import { Box, Container } from '@mui/system';
import { Button, Link, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import typography from '../../utils/typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStyles from './SliderHeadingStyle';

const SliderHeading = ({ sliderIcon, sliderName }) => {
    const classes = useStyles();
    return (
        <Container>
            <Box display="flex" justifyContent="space-between" className={classes.sliderMenu}>
                <Box display="flex" className={classes.sliderHeading}>
                    <Box display="flex" justifyContent="center" mr="10px" maxWidth="20px">
                        <img src={sliderIcon} alt={sliderIcon} />
                    </Box>
                    <Typography
                        variant="h2"

                        fontSize={typography.h4xl.fontSize}
                        color="secondary.main"
                        fontFamily={typography.fontFamily.poppinsBold}
                    >{sliderName}</Typography>
                      <Box>
                <List className={classes.sliderList}>
                        {
                            sliderMenu.map((value) => {
                                return (
                                    <>
                                        <ListItem>
                                            <Link

                                                underline="none"
                                                fontFamily={typography.fontFamily.poppinsReg}

                                                color="grey.main">
                                                {value.slidermenu}</Link>
                                        </ListItem>
                                    </>
                                )
                            })
                        }

                    </List>
                </Box>
                </Box>
              
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box className={classes.topBtn} >
                        <Button variant="contained" size="small">view all</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
const sliderMenu = [
    { slidermenu: 'New' },
    { slidermenu: 'Featured' },
    { slidermenu: 'Popular' },

]
export default SliderHeading;
