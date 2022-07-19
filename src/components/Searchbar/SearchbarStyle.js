import { makeStyles } from '@mui/styles';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
    searchbar2:{
       paddingTop:'30px',
       paddingBottom:'30px',
       [theme.breakpoints.up('sm')]:{
        paddingTop:'122px',
        paddingBottom:'130px',
    },
      },
     
  heading:{
    '& h2':{
      fontSize:typography.h4.fontSize,
      [theme.breakpoints.up('sm')]:{
        fontSize:typography.h2.fontSize,
    }
    }
   
   },
   divider:{
       display:'none',
       [theme.breakpoints.up('sm')]:{
        display:'block',
    }
   }
}));


export default useStyles;