import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Link } from "react-router-dom"

const Categories = () => {
  return ( 
    <div 
    style={{
      display: 'flex',
      justifyContent: 'center', }}
      >
      <Stack direction="column">
      <h3  style={{ display: 'flex', justifyContent: 'center', }}>Our Menu</h3>
      <Grid alignSelf='center' width={80}>
      <Box alignSelf='center'
      sx={{width: 90, height: 4, backgroundColor: '#c59d5f' }} />
      </Grid>
    <Stack direction="row">
    <Button variant="text">All</Button>
    <Button variant="text">Breakfast</Button>
    <Button variant="text">Lunch</Button>
    <Button variant="text">Shakes</Button>
    <Button variant="contained" color='inherit'>
    <Link to="/login">Log In</Link>
    </Button>
    </Stack>
    </Stack>
    </div>
  )
};


export default Categories;