import React from 'react'
import {Grid, makeStyles,Avatar,CardHeader, Card, CardActions, CardMedia,CardContent,Typography,Button,CardActionArea} from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
  root:{
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  red: {
    backgroundColor: '#2b2b33',
    color: 'white',
    transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard
      }),
    '&:hover':{
        color:"#77787D",
        transform: "translateY(-2px)"
           }
  },
  header:{
    color:"#fff",
    textTransform: "capitalize",
    backgroundColor:"#2b2b33",  
},
  description:{
      color:"#e4e4e4",
      fontSize:12,
  },
  body:{
    '&:hover':{
    color: '#1A1B20',
    }
  },
  media:{
  //center the image
  height: 250,
  width:'90%',
  margin: 'auto',
  },
  button:{
      margin:'auto',
      color:'#AF844D',
      border:'1px solid #2b2b33',
      borderRadius:10,
      '&:hover':{
        border:'1px solid #AF844D',
    }
  },
  avatar: {
    backgroundColor: '#f90',
    cursor: 'pointer',
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

}));
const products = [{
  id:1,
  name:'product 1',
  barberName:'Barber 1',
  description:'this is a product description',
  price:100,
  image:'https://source.unsplash.com/random'
},
{
  id:2,
  name:'product 2',
  barberName:'sarber 2',
  description:'this is a product description',
  price:100,
  image:'https://source.unsplash.com/random'
},
{
  id:3,
  name:'product 3',
  barberName:'carber 3',
  description:'this is a product description',
  price:100,
  image:'https://source.unsplash.com/random'
},
{
  id:4,
  name:'product 4',
  barberName:'barber 4',
  description:'this is a product description',
  price:100,
  image:'https://source.unsplash.com/random'

},
{
  id:5,
  name:'product 5',
  barberName:'barber 5',
  description:'this is a product description',
  price:100,
  image:'https://source.unsplash.com/random'
}];
function Products() {
  const classes = useStyles();
  return (
     //material ui grid centered with card items in it
    <Grid container>
      {products.map((product)=>(
      <Grid key={product.id} className={classes.root} item xs={12} sm={6} md={6} lg={3}>
        <Card className={classes.red}>
        <CardHeader
        avatar={
          <Avatar src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" aria-label="recipe" onClick={()=>console.log("avatar")} className={classes.avatar}>
          
          </Avatar>
        }
        className={classes.header}
        title={product.barberName}
        />
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"   
              alt="Contemplative Reptile"
              height="250"
              image={product.image}
              title={product.name}
            />
            <CardContent className={classes.body}>
              <Typography className={classes.header} gutterBottom variant="h5" component="h5">
                {product.name}
              </Typography>
              <Typography variant="body2" className={classes.description} component="p">
                <strong style={{display:'inline'}}>Description:</strong> {product.description}
                <br/>
                <strong style={{display:'inline'}}>Price:</strong> {product.price} JD
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="medium" className={classes.button}>
              Buy Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
      ))}
      </Grid>

  )
}

export default Products