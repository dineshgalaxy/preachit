import { makeStyles } from '@mui/styles';
import color from '../../utils/color';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
    menubarTop: {
        backgroundColor: color.palette.secondary.dark,
        paddingTop: '19px',
        paddingBottom: '19px',
        [theme.breakpoints.up('sm')]: {
            backgroundColor: 'initial',
            paddingTop: '34px',
            paddingBottom: '0px',

        },
    },
    logo: {
        maxWidth: '200px',
        [theme.breakpoints.up('sm')]: {
            minWidth: '254px',
        },
    },
    menubar: {
        flexWrap: "wrap",
        [theme.breakpoints.up('md')]: {
            flexWrap: "nowrap",
        },
    },
    menu: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '& li': {
            width: 'auto',
            padding: '0',
            '& a': {
                padding: '10px 4px',
                display:' flex',
                alignItems:' center',
            '&:hover': {
                color: color.palette.primary.main,
                transition: '0.5s ease',
            },
            [theme.breakpoints.up('md')]: {
                padding: '10px 6px',
            },
            [theme.breakpoints.only('md')]: {
                fontSize: typography.md.fontSize,
            },

        },
        '&:last-child svg': {
            display: 'none'
        }
    },

},
    menuTop: {
    maxWidth: '100%',
    width: '100%',
    order: 3,
    display: 'none',
    [theme.breakpoints.up('md')]: {
        maxWidth: '900px',
        width: '100%',
        order: 2,
    },
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
},
    hamburgerMenu: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
},
    topBtn: {
    order: 2,
    marginTop: "20px",
    width: '100%',
    '& button': {
        width: '100%',
     
    
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
           
        },
        [theme.breakpoints.only('xs')]: {
            borderRadius:'4px',
            minHeight:'auto',
            fontSize:typography.sm.fontSize,
           
        },
        [theme.breakpoints.only('md')]: {
            fontSize: typography.md.fontSize,
            minWidth: '190px',
        },
    },
    [theme.breakpoints.up('md')]: {
        order: 3,
    },
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
        marginTop: "0",
    },
},


}));


export default useStyles;