import { makeStyles } from '@mui/styles';
import color from '../../utils/color';
import aboutImg from '../../images/aboutus.png';
import Imge from '../../images/Path250.png';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
  about: {
    position: 'relative',
    overflowX: 'clip',
    marginBottom: '0px',
    minHeight: 'auto',
    backgroundImage: `url(${aboutImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 1,
    backgroundColor: color.palette.secondary.main,
    padding: '30px 0',
    [theme.breakpoints.up('sm')]: {
      padding: '50px 0',
      marginBottom: '80px',
      minHeight: 832,
      marginTop: '120px'
    }
  },
  aboutFlex: {
    minHeight: "auto",
    [theme.breakpoints.up('sm')]: {
      minHeight: "700px",

    }
  },
  heading: {
    '& h2': {
      fontSize: typography.h4.fontSize,
      paddingBottom: '20px',
      [theme.breakpoints.up('sm')]: {
        fontSize: typography.h3.fontSize,
        paddingBottom: '55px',

      }
    }

  },
  aboutTop: {
    flexWrap: 'wrap',
    [theme.breakpoints.up('lg')]: {
      flexWrap: 'nowrap'
    }
  },
  plusLogo: {
    marginLeft: '0px',
    marginBottom: '10px',
    [theme.breakpoints.up('lg')]: {
      marginLeft: '-58px',
      marginBottom: '0px',
    }
  },
  aboutSlider: {
    maxWidth: "100%",
    position: "initial",
    right:"0",
    marginTop:'30px',

    '& ul': {
      textAlign: 'left',

    },
    '& button:nth-of-type(1)': {
      left: '-18px',
      '&::before': {
        display: 'none',
      }
    },
    '& button:nth-of-type(2)': {
      '&::before': {
        display: 'none',
      }
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: "985px",
      position: "absolute",
      right:"-290px",
      marginTop:'0px',
    },
   
      '& card':{
          paddingBottom:'20px'
      },

  },
  card: {
    backgroundImage: 'linear-gradient(250deg, #acb5c3 130%, #e2e2e2 -16%)',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.16)',
    maxWidth: 'auto',
    [theme.breakpoints.up('lg')]: {
      maxWidth: 308,
    }
  },
  
  title:{

    '& span:nth-of-type(1)':{
      color:color.palette.secondary.main,
      fontSize:typography.h5.fontSize,
      fontFamily:typography.fontFamily.museo700,
      lineHeight:'25px'
    },
    '& span:nth-of-type(2)':{
      color:color.palette.secondary.main,
      fontSize:typography.md.fontSize,
      fontFamily:typography.fontFamily.poppinsReg,
      lineHeight:'30px',
      letterSpacing:'0.7px',
      textTransform:'uppercase'
    }
  }

}));


export default useStyles;