import { makeStyles } from '@mui/styles';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
  

    serviceHeading:{
      marginBottom:'30px',
      paddingTop:'30px',
      [theme.breakpoints.up('sm')]:{
        marginBottom:'50px',
        paddingTop:'80px',
    }
      },
      heading:{
        '& h2':{
          fontSize:typography.h4.fontSize,
          [theme.breakpoints.up('sm')]:{
            fontSize:typography.h3xl.fontSize,
        }
        }
       
       },
}));


export default useStyles;