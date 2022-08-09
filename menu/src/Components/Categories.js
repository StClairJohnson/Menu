import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'

const Categories = () => {
  return ( 
    <div 
    style={{
      display: 'flex',
      justifyContent: 'center', }}
      >
    <Stack direction="row">
    <Button variant="text">All</Button>
    <Button variant="text">Breakfast</Button>
    <Button variant="text">Lunch</Button>
    <Button variant="text">Shakes</Button>
    </Stack>
    </div>
  )
};


export default Categories;