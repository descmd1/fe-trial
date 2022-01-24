import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {makeStyles} from '@material-ui/core';


    
const useStyles = makeStyles ({
    btn: {
      fontSize: 30,
      bacgroundColor: 'green', 
      '&: hover':{
        bacgroundColor: 'green'
      }
    }
  })
export default function Create(){

  const classes = useStyles()
  return(
        <Container>
        <Typography 
    variant="h5"
    color="default"
    >
    Product Design Course
    </Typography>

    <br />

    <Typography 
    variant="h6"
    color="text-secondary"
    >
    By prof Adebanjo
    </Typography>

    <br />
    <Typography 
    variant="h6"
    color="default"
    >
    12th Dec 2020 - 2nd Jan 2021
    </Typography>

<br />
<br />

    <Typography 
    variant="h6"
    color="default"
    >
    Learn how design thinking, user research,
    </Typography>

    <Typography 
    variant="h6"
    color="default"
    >
    business vision and marketing, and finally designing
    </Typography>
    <Typography 
    variant="h6"
    color="default"
    >
    and creating real digital products for real users.
    </Typography>

    <br />
    <br />
    <Typography 
    variant="h6"
    color="primary"
    >
    Course Fee: $88
    </Typography>

    <Button 
    className = {classes.btn}
    type="Approve Course"
    color="secondary"
    variant="contained">

      Approve Course
      </Button>

      <button  
      className = {classes.btn}
      type="Draft"
      color="secondary"
      variant="outlined">

        Draft
      </button>
      <br />
      <br />
      <br />



      </Container>
      );
}