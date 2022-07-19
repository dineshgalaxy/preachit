import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    topHeader:{
        display:'none',
        [theme.breakpoints.up('sm')]:{
            display:'block'
        },
        '& button':{
            backgroundImage: 'none',
            backgroundColor:'transparent',
            minWidth:'auto',
        }
      },
     

}));


export default useStyles;