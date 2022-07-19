import { makeStyles } from '@mui/styles';
import color from '../../utils/color';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
    footer:{
        boxShadow:' 0 -4px 10px 0 rgb(0 0 0 / 16%)',
        padding: '30px 0 30px 0',
        [theme.breakpoints.up('sm')]:{
            padding: '70px 0 50px 0',
        }
    },
    mainFooter:{
        flexWrap:'wrap',
        [theme.breakpoints.up('sm')]:{
            flexWrap:'nowrap',
        }
    },
    social:{
        paddingTop:'10px',
        [theme.breakpoints.up('sm')]:{
            paddingTop:'55px',
        }
    },
    socialMedia :{
       display:'flex',
       '& li':{
           width:'38px',
           height:'38px',
           backgroundColor:color.palette.primary.dark,
           marginRight:'12px',
           borderRadius:'50%',
           display:'flex',
           justifyContent:'center',
           '&:hover':{
            opacity: 0.5,
            transition: '0.5s ease',
        },
           
           '& a':{
            textAlign:'center',
            color:color.palette.common.white,
            fontSize:'15px',
           
            '& span':{
                textAlign:'center',
                color:color.palette.common.white,
                fontSize:'16px',
                display:'flex'
            }
           }
       },
    },
    menu:{
        flexWrap:'wrap',
        justifyContent:'space-between',

        '& > div':{
            marginBottom:'20px',
            [theme.breakpoints.up('md')]:{
                marginBottom:'0px',
            }
        },

        [theme.breakpoints.up('md')]:{
            flexWrap:'nowrap',
        }
    },
    footerMenuTop:{
        width:"140px",
         maxWidth:"100%",
         [theme.breakpoints.up('md')]:{
            width:"209px",
            maxWidth:"100%",
        }
    },
    footerMenu:{
        '& li':{
            '& a':{
                fontSize:typography.h6.fontSize,
                color:color.palette.common.black,
                fontFamily:typography.fontFamily.openSansReg,
                marginBottom:'6px',
                '&:hover':{
                    color:color.palette.primary.main,
                    transition: '0.5s ease',
                },
            }
        }
    }
}));


export default useStyles;