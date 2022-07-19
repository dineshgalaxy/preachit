import { makeStyles } from '@mui/styles';
import color from '../../../utils/color';
import typography from '../../../utils/typography';
const useStyles = makeStyles((theme) => ({
    subFooter:{
        flexWrap:'wrap',
        marginTop:"0px",
        [theme.breakpoints.up('md')]:{
            flexWrap:'nowrap',
            marginTop:"27px"
        }
    },
    subFootMenu: {
        '& ul': {
            display:'flex',
            flexWrap:'wrap',
            flexDirection:'column',
            '& li + li::before':{
                content: '""',
                  display: 'none',
                  width: '1px',
                  height: '12px',
                  backgroundColor:color.palette.grey.main,
                  margin:'0 12px',
                  [theme.breakpoints.up('sm')]:{
                   display:'block'
                 }
            },
            [theme.breakpoints.up('lg')]:{
                flexWrap:'nowrap',
            },
            [theme.breakpoints.up('sm')]:{
               flexDirection:'row'
            }
        },
    },
    subFooterBtn:{
        '& button':{
            backgroundColor:color.palette.secondary.extraLight,
            backgroundImage:'none' ,
            minWidth:'223px',
            fontSize:typography.h6.fontSize,
            '&:hover':{
                backgroundColor:color.palette.secondary.extraLight,
                
            }
        }
    },
    siteMap:{
        '&:hover':{
            color:color.palette.primary.main,
            transition: '0.5s ease',
        }
    }
}));


export default useStyles;