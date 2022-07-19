import { Opacity } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import midImg from '../../images/lightstock_250077_medium_ashley.png'
import color from '../../utils/color';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
    midSection:{
       backgroundImage:`url(${midImg})`,
      backgroundSize:'cover',
      backgroundColor:color.palette.secondary.main,
      paddingTop: '25px',
    paddingBottom:'25px',
    [theme.breakpoints.up('sm')]:{
        paddingTop: '121px',
        paddingBottom:' 131px',
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