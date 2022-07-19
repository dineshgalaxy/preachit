import { makeStyles } from '@mui/styles';
import color from '../../utils/color';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
    sliderHeading:{
       flexDirection:'column',
       alignItems:'flex-start',
        '& h2':{
            fontSize:typography.h5.fontSize,
            marginRight:'0px',
            [theme.breakpoints.up('xsm')]:{
                fontSize:typography.h4xl.fontSize,
                marginRight:'10px'
            },
        },
        [theme.breakpoints.up('sm')]:{
            flexDirection:'row',
            alignItems:'center',
        },
    },
    sliderMenu:{
        paddingBottom:'10px',
        paddingTop:'0px',
        flexWrap:'wrap',
        flexDirection:'column',
        [theme.breakpoints.up('sm')]:{
            flexWrap:'nowrap',
            flexDirection:'row',
            paddingTop:'35px',
        },
    },
    sliderList: {
        display: 'flex',
            '& li + li::before': {
                position: "absolute",
                content: '""',
                display: 'block',
                width: '2px',
                height: '10px',
                background: color.palette.grey.main,
                [theme.breakpoints.up('xsm')]:{
                    height: '16px',
                },
            },
       '& a':{
        padding:"0 8px",
        fontSize:typography.mdxl.fontSize,
        [theme.breakpoints.up('xsm')]:{
            padding:"0 14px",
            fontSize:typography.h6.fontSize,
        },
       }
      
    }

}));


export default useStyles;