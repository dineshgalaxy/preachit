// import { createStyles, makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) =>
//     createStyles({
//         '@global': {
//             '*': {
//                 boxSizing: 'border-box',
//                 margin: 0,
//                 padding: 0
//             },
//             html: {
//                 '-webkit-font-smoothing': 'antialiased',
//                 '-moz-osx-font-smoothing': 'grayscale',
//                 height: '100%',
//                 width: '100%'
//             },
//             body: {
//                 height: '100%',
//                 width: '100%',
//                 fontFamily: theme.typography.fontFamily.regular,
//                 fontSize: theme.typography.fontSize.sm,
//                 wordBreak: 'break-word',
//                 lineHeight:'1.5',
//                 '& + div': {
//                     height: '100%'
//                 }
//             },
//             img: {
//                 maxWidth: '100%'
//             },
//             a: {
//                 textDecoration: 'none'
//             },
//             '#root': {
//                 height: '100%',
//                 width: '100%'
//             },
//             '.textTransform': {
//                 textTransform: 'upperCase'
//             },
//             '.MuiDialog-paper': {
//                 '@media screen and (max-width:600px)': {
//                     minWidth: '327px',
//                     maxWidth: '327px'
//                 },
//                 '@media screen and (max-width:350px)': {
//                     minWidth: '270px',
//                     maxWidth: '270px'
//                 }
//             },
//             '.noPadding': {
//                 padding: 0
//             },
//             '.withoutLabel':{
//                 '& .MuiFilledInput-input':  {
//                     padding: '5px 16px'
//                 },
//                 '& .MuiSelect-select': {
//                     '&:before': {
//                         top: '4px'
//                     }
//                 }
//             }
//         },
//         input: {
//             '&:-webkit-autofill': {
//                 WebkitBoxShadow: '0 0 0 1000px white inset'
//             }
//         }
//     })
// );

// const GlobalStyles = () => {
//     useStyles();
//     return null;
// };

// export default GlobalStyles;