import { makeStyles } from "@material-ui/core"
 const useStyles= makeStyles(()=>({
  root:{
    border:"1px solid #000",
    backgroundColor:"#fff",
    minHeight: '500px',
  }  ,
  radioGroup:{
      border:"solid  1px",
      borderColor: 'rgba(160,160,255,0.5)',
      borderRadius: '5px',
      display:'flex',
      flexDirection:'row',
      padding:5,
    },
    buttons:{
      display:'flex',
      flexDirection:'row',
      padding:5,
    },
    container:{
      marginTop:30,
      backgroundColor:'#e1e1e1',
      padding:10,
    },
    loginContainer:{
      margin:'auto',
      marginTop:'20%',
      display:'flex',
      justify:'center',
      alignItems:'center',
      width:'30%',
      backgroundColor:'#e1e1e1',
      padding:10,
    },
    nextButton:{
     color:'#AF844D',
     border:'1px solid #AF844D',
     backgroundColor:'#fff',
     borderRadius:10,
     '&:hover':{
       border:'1px solid #AF844D',
     },
     marginTop:'1rem',
    },
    textInputs:{
     color:'#AF844D',
    },
    
 }))
 export default useStyles;