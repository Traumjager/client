import { makeStyles } from "@material-ui/core"
 const useStyles= makeStyles(()=>({
    radioGroup:{
      border:"solid  1px",
      borderColor: 'rgba(160,160,255,0.5)',
      borderRadius: '5px',
      display:'flex',
      flexDirection:'row',
      padding:5,
    },
    container:{
      marginTop:30,
      backgroundColor:'#f3f4f4',
      padding:10,
    },
    nextButton:{
     color:'#AF844D',
     border:'1px solid #2b2b33',
     borderRadius:10,
     '&:hover':{
       border:'1px solid #AF844D',
     },
     marginTop:'1rem',
    },
    textInputs:{
     color:'#AF844D',
    }
 }))
 export default useStyles;