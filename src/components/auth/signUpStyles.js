import { makeStyles } from "@material-ui/core"
 const useStyles= makeStyles(()=>({
  root:{
    border:"1px solid #000",
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
      marginBottom:30,
      backgroundColor:'#1f2024',
      padding:10,
    },
    loginContainer:{
      border:"solid  2px #17181b",
      margin:'auto',
      marginTop:'10%',
      marginBottom:'10%',
      display:'flex',
      justify:'center',
      width:'25%',
      height:'25rem',
      alignItems:'center',
      backgroundColor:'#1f2024',
      padding:15,
      boxShadow:`inset 10px 10px 15px -10px #17181b,
      inset -10px -10px 15px -10px #27282d`
    },
    nextButton:{
     color:'#AF844D',
     border:'1px solid #1f2024',
     backgroundColor:'#1f2024',
     borderRadius:10,
     '&:hover':{
       border:'1px solid #AF844D',
       backgroundColor:'#1f2024'
     },
     marginTop:'1rem',
    },
    TextField:{
      borderColor: "#a38350",
      borderWidth: "3px",
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#a38350",
        borderWidth: "3px",
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#a38350"
      },
      "& .MuiOutlinedInput-input": {
        color: "#a38350"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "#a38350"
      },
      
    }
    
 }))
 export default useStyles;