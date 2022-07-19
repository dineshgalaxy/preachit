import color from "../color";
import typography from "../typography";
const ButtonOverRide = {
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          padding: '8px 10px',
          minWidth: '264px',
          fontSize: typography.h5.fontSize,
          backgroundImage: 'linear-gradient(to bottom, #dd5404, #fa7f37)',

        },
        sizeMedium: {
          padding: '8px 10px',
          minWidth: '223px',
          fontSize: '18px',
          backgroundImage: 'linear-gradient(to bottom, #dd5404, #fa7f37)',

        },
        sizeSmall: {
          padding: '8px 10px',
          fontSize: typography.h6.fontSize,
          minWidth: '168px',
          backgroundImage: 'linear-gradient(to bottom, #dd5404, #fa7f37)',

        },
        text:{
          backgroundImage: 'none',
          backgroundColor:'transparent',
          minWidth:'auto',
        },
        root: {
          boxShadow: 'none',
          borderRadius: '12px',
          letterSpacing:'1.8px',
          color: color.palette.common.white,
          textTransform:'uppercase',
          minHeight: '51px',
          padding: '8px 10px',
          fontFamily:typography.fontFamily.poppinsBold,
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
};
export default ButtonOverRide;

