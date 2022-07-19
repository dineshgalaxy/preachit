import { makeStyles } from '@mui/styles';
import color from '../../utils/color';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
  
  counter: {
    backgroundImage: 'linear-gradient(105deg, #2d9cc3 3%, #1351a5 98%)',
    paddingBottom:'30px',
    paddingTop:'30px',
    marginTop:'85px',
    [theme.breakpoints.up('sm')]:{
     padding:'115px 0px',
    marginTop:'0px',

  }
  },
  popOver: {
    '& button': {
      minWidth: '20px',
      minHeight: '20px',
      padding:'0',
      color:color.palette.secondary.main,
      fontSize:typography.sm.fontSize,
      textTransform:'lowercase',
      borderRadius:'50%',
      fontFamily:typography.fontFamily.museo700,
      
      backgroundImage: 'linear-gradient(to bottom, #acb5c3, #e2e2e2)',
}
      }
}));


export default useStyles;