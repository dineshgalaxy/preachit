import { makeStyles } from '@mui/styles';
import color from '../../utils/color';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
    mobilemenu:{
        '& li':{
            borderTop:'1px solid #8e98a7',
            paddingLeft:'15px',
            '&:last-child':{
                borderBottom:'1px solid #8e98a7',
            },
            '& a:hover':{
                color:color.palette.primary.main,
                transition:'0.5s ease'
            }
        }
    },
    acDetail:{
        padding:' 0px 16px 0px',
    },
    navMenu:{
        position:'absolute',
        zIndex:2,
        left: '-100%',
        top: '8rem' ,
        flexDirection: 'column',
        backgroundColor:color.palette.secondary.dark,
        minHeight: '500px',
        width: '100%',
        transition:' 0.3s',
        '&.active':{
            left: 0,
          }
      },
      divider:{
        display:'none',
        [theme.breakpoints.up('sm')]:{
            display:'block'
        }
    },
    selectItem:{
        display:'none',
        [theme.breakpoints.up('sm')]:{
            display:'block'
        }
    },
    searchBox:{
        minHeight:'54px',
        [theme.breakpoints.up('sm')]:{
            minHeight:'89px'
        }
    },
    search:{
        fontSize:typography.sm.fontSize,
        [theme.breakpoints.up('sm')]:{
            fontSize:typography.h6.fontSize,
        }
    },
    searchIcon:{
        '& p':{
            fontSize:typography.h6.fontSize,
            [theme.breakpoints.up('sm')]:{
                fontSize:typography.h2.fontSize
            }
        }
        
    },
    formBox:{
        paddingTop:'35px'
        
    },
    mobileSelect:{
        maxWidth:'200px',
        margin: '0 auto',
        display:'block',
        '& label':{
            fontSize:typography.md.fontSize
        },
        [theme.breakpoints.up('sm')]:{
            display:'none',
        }
    },
    menuTo:{
        '& div':{
            margin:'0px!important',
            
        },
       
        
    },
   
    
}));


export default useStyles;