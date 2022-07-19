import React from "react";
import { Box, Container } from "@mui/system";
import Logo from "../../images/logotop.png";
import { List, ListItem, Link, Button } from '@mui/material';
import useStyles from "./MenubarStyle.js";
import typography from "../../utils/typography";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MobileMenu from './MobileMenu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Menubar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box className={classes.menubarTop}>

            <Container maxWidth="xlg">
                <Box>
                    <Box className={classes.menubar} display="flex" alignItems="center" justifyContent="space-between">
                        <Box display="flex" alignItems="center" justifyContent="center" className={classes.logo}>
                           
                           <Link href="#" underline="none"> <img src={Logo} alt={Logo}></img></Link>
                        </Box>
                        <Box pt="10px" className={classes.menuTop}>
                            <List className={`${classes.menu} ${classes.menulist}`} >
                                {
                                    menuItem.map((menu) => {
                                        return (
                                            <ListItem key={menu.item}

                                            >
                                                <Link
                                                    id="basic-button"
                                                    aria-controls={open ? 'basic-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                    onClick={handleClick}

                                                    href="#" underline="none" fontFamily={typography.fontFamily.muliBold} fontSize={typography.mdxl} color="grey.semiWhite" letterSpacing="1.5px">
                                                    {menu.item}
                                                    <KeyboardArrowDownIcon fontSize="lg"></KeyboardArrowDownIcon>

                                                </Link>

                                                <Menu
                                                    id="basic-menu"
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                    MenuListProps={{
                                                        'aria-labelledby': 'basic-button',
                                                    }}
                                                >
                                                    
                                                    <MenuItem onClick={handleClose}>Sermon Outlines</MenuItem>
                                                    <MenuItem onClick={handleClose}>Sermon Series</MenuItem>
                                                </Menu>
                                            </ListItem>
                                        )
                                    })
                                }

                            </List>
                        </Box>
                        <Box className={classes.topBtn} >
                            <Button variant="contained" size="medium">BECOME A MEMBER</Button>
                        </Box>
                        <Box className={classes.hamburgerMenu}>
                            <MobileMenu />
                        </Box>
                    </Box>



                </Box>
            </Container>
        </Box>
    )
}

const menuItem = [
    { item: 'SERMON PREP' },
    { item: 'CHURCH MEDIA' },
    { item: 'CHURCH ADMIN' },
    { item: 'BLOG' }
];


export default Menubar;
