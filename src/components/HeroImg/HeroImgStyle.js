import { makeStyles } from '@mui/styles';
import Img  from "../../images/heroimg.png";
import typography from '../../utils/typography';

const useStyles = makeStyles((theme) => ({
    heading:{
fontSize:typography.h4.fontSize
    },
    blurImg:{
        display:'none',
        [theme.breakpoints.up('md')]:{
            display:'block'
        }
    },
heroImg:{
    minHeight: 410,
    backgroundImage: `url(${Img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 1,
    backgroundColor: '#113053',
    [theme.breakpoints.up('sm')]:{
        minHeight:767,
        overflowX:'clip',
     }
},
heroText:{
    paddingTop:'50px',
    [theme.breakpoints.up('sm')]:{
        paddingTop:'120px',
    }
},
text:{
    maxWidth: '261px',
    '& h1':{
        fontSize:typography.h4md.fontSize,
        lineHeight:'35px',
        marginBottom:'0',
        [theme.breakpoints.up('sm')]:{
            fontSize:typography.h1.fontSize,
            lineHeight:'55px',
            marginBottom:'56px',
        }
    },
    '& h2':{
        fontSize:typography.lg.fontSize,
        marginBottom:'10px',
        [theme.breakpoints.up('sm')]:{
            fontSize:typography.h4.fontSize,
            marginBottom:'16px',
        }
    },
    [theme.breakpoints.up('sm')]:{
        maxWidth: '848px',
    }
},
selectMenu:{
    padding:'0px',
    '& fieldset':{
        border:'0px'
    }
},
selectItem:{
    display:'none',
    [theme.breakpoints.up('sm')]:{
        display:'block'
    }
},
divider:{
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
    position: 'absolute',
    top: '230px',
    [theme.breakpoints.up('sm')]:{
        top:'0',
        position:'relative'

    }
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
}
}));

export default useStyles;

