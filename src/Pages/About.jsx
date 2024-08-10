import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <>
    <Typography component="h1" variant="h5" align="center" sx={{color:'#c30010',margin:'10px'}}>
      About Us
    </Typography>  
    <Box
      sx={{
        minHeight: '70vh', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }} 
    >
      <Card
        sx={{
          maxWidth: 600,
          margin: 'auto',
          backgroundColor:'#f69697',
          p: 4,
          boxShadow: 3,
        }}
      >
        <CardContent>
          
          <Typography variant="h6" component="div">
            Welcome! <br/>  
            we're more than just an online shopping destination.<br/> 
            we're your partner in discovering the best products. Founded in 2024 , our mission is to provide a seamless and enjoyable shopping experience that meets your needs and exceeds your expectations.
          </Typography>
          <Typography sx={{ mt: 2, mb: 1.5 }} color="text.secondary">
          making online shopping convenient, reliable, and fun. We strive to offer an extensive range of high-quality products, ensuring that every item in our store meets our rigorous standards. 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{background:'#c30010',color:'black'}}>Learn More</Button> 
          </CardActions>
      </Card>
    </Box>
    <footer style={{color:"black",fontSize:"10px",textAlign:"center"}}><h1>© 2024 BuyIn. All rights reserved.</h1></footer>
    </>
  );
};

export default About; 
