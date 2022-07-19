import { makeStyles } from '@mui/styles';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
    sermonbook:{
        backgroundImage:'linear-gradient(251deg, #2d9cc3 3%, #1351a5 98%)',
      position:'relative',
      marginTop:'30px',
      paddingTop:'30px',
      paddingBottom:'20px',
      [theme.breakpoints.up('sm')]:{
        marginTop:'90px',
        paddingBottom:'30px',
        paddingTop:'0px',
      }
     
      },
      sermonText:{
        flexWrap:'wrap',
        justifyContent:'center',
        [theme.breakpoints.up('sm')]:{
          flexWrap:'nowrap',
        }
      },
      
      heading:{
        '& h2':{
          fontSize:typography.h4.fontSize,
          [theme.breakpoints.up('sm')]:{
            fontSize:typography.h3.fontSize,
        }
        }
       
       },
       searchBox:{
       '& hr':{
          height:50,
          [theme.breakpoints.up('sm')]:{
           height:69,
       }
        },
       },
     
     
       searchIcon:{
         '& p':{
           fontSize:typography.sm.fontSize,
           [theme.breakpoints.up('sm')]:{
            fontSize:typography.h5.fontSize,
        }
         }
      },
}));


export default useStyles;