import { makeStyles } from '@mui/styles';
import color from '../../utils/color';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
    sliderMan: {
       
        '& button:nth-of-type(1)': {
            left: '-18px',
            '&::before': {
                content: '"\\e902"',
                right: '0px',
                zIndex: 9,
                fontFamily: 'icomoon!important',
                fontSize: '26px',
                color: color.palette.grey.main,
                display: 'none',
                [theme.breakpoints.up('sm')]: {
                    display: 'block',
                },
            }
        },
        '& button:nth-of-type(2)': {
            right: '-18px',
            '&::before': {
                content: '"\\e901"',
                zIndex: 9,
                fontFamily: 'icomoon!important',
                fontSize: '26px',
                color: color.palette.grey.main,
                display: 'none',
                [theme.breakpoints.up('sm')]: {
                    display: 'block',
                }
            }
        },
        '& ul': {
            display: 'none!important',
        }
    }

}));


export default useStyles;