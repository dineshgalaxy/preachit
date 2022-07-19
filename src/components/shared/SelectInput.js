import React from "react";
import useStyles from "../HeroImg/HeroImgStyle";
import { Box} from "@mui/system";

import typography from "../../utils/typography";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import './SelectInputStyle.scss'
const SelectInput = ({categoriName ,displayCategories}) => {
    const classes = useStyles();
    const [categories, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const displayCategori = displayCategories ? '' :'displayCategories';
    return (
        <>
        
        <Box minWidth='170px' className={`${displayCategori}` }>
                <FormControl fullWidth>
                    <InputLabel sx={{
                        fontFamily: typography.fontFamily.poppinsBold,
                        fontSize: typography.h6,
                        letterSpacing: '0.9px',
                        color: 'secondary.main'
                    }} className="selectLabel">{categoriName}</InputLabel>
                    <Select
                        className={classes.selectMenu}
                        value={categories}
                        displayEmpty
                        onChange={handleChange}
                    >
                        
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default SelectInput;