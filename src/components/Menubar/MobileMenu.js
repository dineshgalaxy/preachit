
import React, { useState } from "react";
import Hamburger from 'hamburger-react';
import useStyles from "./MenubarStyle";
import { List, ListItem, Link, Button } from '@mui/material';
import { Box, Container } from "@mui/system";
import typography from "../../utils/typography";
import Styles from './MobileMenuStyle';
import { Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SelectInput from "../shared/SelectInput";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const classes = useStyles();
  const styles = Styles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box color="common.white" className="hamburger" onClick={() => setShowMenu(!showMenu)}>
        <Hamburger direction="right" size={25} />
      </Box>

      <Box className={`${styles.navMenu} ${showMenu && "active"}`}>
        <Box pt="10px" className={classes.menuTo}>
        <Box padding=" 0 20px">
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{margin:'0!important',}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{margin:'0!important',}}/>}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{margin:'0!important',}}
            >
              <Typography fontFamily={typography.fontFamily.muliBold} fontSize={typography.h5} color="grey.semiWhite" letterSpacing="1.5px">
                SERMON PREP
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 16px' }}>
              <List className={styles.mobilemenu} sx={{ display: 'flex', flexDirection: 'column', color: "common.white" }}>
                <ListItem>
                  <Link href="#" underline="none" lineHeight="45px" fontFamily={typography.fontFamily.poppinsReg} fontSize={typography.h6} color="grey.semiWhite" letterSpacing="1.5px">Sermon Outlines
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" underline="none" lineHeight="45px" fontFamily={typography.fontFamily.poppinsReg} fontSize={typography.h5} color="grey.semiWhite" letterSpacing="1.5px">Sermon Series</Link>
                </ListItem>
              </List>
            </AccordionDetails>

          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{margin:'0!important',}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ minHeight: '40px', }} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              sx={{ minHeight: '40px', }}
            >
              <Typography fontFamily={typography.fontFamily.muliBold} fontSize={typography.h5} color="grey.semiWhite" letterSpacing="1.5px">
                CHURCH MEDIA
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 16px' }} >
              <List className={styles.mobilemenu} sx={{ display: 'flex', flexDirection: 'column', color: "common.white" }}>
                <ListItem>
                  <Link href="#" underline="none" lineHeight="45px" fontFamily={typography.fontFamily.poppinsReg} fontSize={typography.h6} color="grey.semiWhite" letterSpacing="1.5px">Sermon Outlines
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" underline="none" lineHeight="45px" fontFamily={typography.fontFamily.poppinsReg} fontSize={typography.h5} color="grey.semiWhite" letterSpacing="1.5px">Sermon Series</Link>
                </ListItem>
              </List>
            </AccordionDetails >
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{margin:'0!important',}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography fontFamily={typography.fontFamily.muliBold} fontSize={typography.h5} color="grey.semiWhite" letterSpacing="1.5px">
                CHURCH ADMIN
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 16px' }}>
              <List className={styles.mobilemenu} sx={{ display: 'flex', flexDirection: 'column', color: "common.white" }}>
                <ListItem>
                  <Link href="#" underline="none" lineHeight="45px" fontFamily={typography.fontFamily.poppinsReg} fontSize={typography.h6} color="grey.semiWhite" letterSpacing="1.5px">Sermon Outlines
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" underline="none" lineHeight="45px" fontFamily={typography.fontFamily.poppinsReg} fontSize={typography.h5} color="grey.semiWhite" letterSpacing="1.5px">Sermon Series</Link>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{margin:'0!important',}}>
            <AccordionSummary>
              <Typography fontFamily={typography.fontFamily.muliBold} fontSize={typography.h5} color="grey.semiWhite" letterSpacing="1.5px">
                BLOG
              </Typography>
            </AccordionSummary>
          </Accordion>
      </Box>
          <Box
            maxWidth="893px"
            width="100%"
            className={styles.formBox}
          >
            <Container>
              <Paper
                className={styles.searchBox}
                component="form"
                sx={{ p: '0px 23px 0 8px', display: 'flex', alignItems: 'center', borderRadius: '16px' }}
              >
                <Box className={styles.selectItem}>
                  <SelectInput categoriName="CATEGORIES" displayCategories={true} />
                </Box>
                <Divider className={styles.divider} sx={{ height: 89, borderColor: 'grey.dark', m: '0 20px' }} orientation="vertical" />

                <InputBase
                  className={styles.search}
                  sx={{ ml: 1, flex: 1, fontSize: typography.h6, color: 'common.black', fontFamily: typography.fontFamily.poppinsReg }}
                  placeholder=" Search sermons, graphics, backgrounds & more…"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Box className={styles.searchIcon} color="primary.main">
                  <Typography variant="body1" className="icon-search"></Typography>
                </Box>

              </Paper>
              
              <Box className={styles.mobileSelect} mt={1} color="secondary.extraLight">
                <SelectInput categoriName="SELECT CATEGORIES" displayCategories={true} />
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}
const menuItem = [

  { menu: 'SERMON PREP', subMenu1: 'Sermon Outlines', subMenu2: 'Sermon Series' },
  { menu: 'CHURCH MEDIA', subMenu1: 'Sermon Outlines', subMenu2: 'Sermon Series' },
  { menu: 'CHURCH ADMIN', subMenu1: 'Sermon Outlines', subMenu2: 'Sermon Series' },
  { menu: 'BLOG' }
];
export default MobileMenu;