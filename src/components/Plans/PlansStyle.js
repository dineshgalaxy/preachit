import { makeStyles } from '@mui/styles';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
    planTop:{
        [theme.breakpoints.up('sm')]:{
            overflowX:'clip',
         }
    },
    plans: {
        paddingBottom:'30px',
        paddingTop:'30px',
        [theme.breakpoints.up('sm')]:{
            paddingBottom:'65px',
        paddingTop:'75px',
        }
    },
    heading:{
        '& h2':{
          fontSize:typography.h4.fontSize,
          [theme.breakpoints.up('sm')]:{
            fontSize:typography.h2.fontSize,
        }
        }
       
       },
}));


export default useStyles;