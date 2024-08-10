import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect,useState } from 'react'; 
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom'; 

export default function Category() {

    const [category,setCategory]=useState([]) 
       
    useEffect(()=>{

        axios
        .get('https://dummyjson.com/products/categories')
        .then((res)=>{
            console.log(res);
            setCategory(res.data) 
        }) 
        .catch((error)=>{
            console.log(error);
            
        })  

    },[]) 

    console.log(category,"categories");
      

  return ( 
    <>
    <Typography gutterBottom variant="h5" component="div" sx={{color:'#c30010',textAlign:'center',margin:'10px'}}> 
     Browse Products Categories 
    </Typography>
    <Grid container spacing={2} sx={{margin:'10px',padding:'10px',display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}> 

    {category.map((item,i)=>{  

      return( 

      <Grid item xs={12} sm={6} md={4}> 

      <Card sx={{ maxWidth: 345, backgroundColor:"#f69697", marginTop:"15px"}}>
        <CardContent>
          <Link to={`/cat-product/${item.name}`}> 
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}> 
            {item.name} 
          </Typography> 
          </Link> 
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
      </Grid>) 
    })}   
    </Grid> 
    </>
  );
} 
