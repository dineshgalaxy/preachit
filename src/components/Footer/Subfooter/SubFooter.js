import React from "react";
import useStyles from "./SubfooterStyle"; 
import { Button, Link, List } from "@mui/material";
import { ListItem } from "@mui/material";
import { Box } from "@mui/system";
import typography from "../../../utils/typography";
const SubFooter = () => {
    const classes = useStyles();
   
    return (
        <Box className={classes.subFooter}  display="flex" alignItems="center" justifyContent='space-between'>
            <Box className={classes.subFootMenu}>
                <List>
                     <ListItem> <Link sx={{cursor:'default'}}  fontSize={typography.mdxl} textTransform="uppercase" fontFamily={typography.fontFamily.poppinsReg} color="grey.main" underline="none" >Copyright © 2020 PreachIt.org All Rights Reserved</Link>  </ListItem>
                     <ListItem> <Link sx={{cursor:'default'}}  fontSize={typography.mdxl} textTransform="uppercase" fontFamily={typography.fontFamily.poppinsReg} color="grey.main" underline="none" >SITE DESIGN BY DESIGN EXTENSIONS</Link>  </ListItem>
                     <ListItem> <Link href="#" className={classes.siteMap}  fontSize={typography.mdxl} textTransform="uppercase" fontFamily={typography.fontFamily.poppinsReg} color="grey.main" underline="none" > SITE MAP</Link>  </ListItem>
                </List>
            </Box>
            <Box className={classes.subFooterBtn}>
              <Button size="large">Submit a Sermon</Button>
            </Box>
        </Box>
    )
} 
export default SubFooter;