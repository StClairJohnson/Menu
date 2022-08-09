import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Item1 from './Images/item-1.jpeg'


function Menu () {

return (
  <div className="list">
   <Box sx={{ flexGrow: 1 }}>
    <List>
      <Stack direction="column">
      <ListItem>
        <CardActionArea component="a">
          <Card sx={{ display: 'flex' }}>
          <CardMedia
                component="img"
                sx={{ width: 145, height: 105, borderColor: 'amber.400', 
                display: { xs: 'none', sm: 'block' } }}
                image={Item1}
              />
            <CardContent sx={{ width: 225, height: 105, flex: 1, }}>
              <Stack direction="row">
              <Typography component="subtitle1" variant="subtitle1">
                Name
              </Typography>
              <ListItem></ListItem>
              <Typography component="subtitle1" variant="subtitle1">
                Price
              </Typography>
              </Stack>
              <Typography variant="caption" paragraph>
                Description
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </ListItem>
      <ListItem>
        <CardActionArea component="a">
          <Card sx={{ display: 'flex' }}>
          <CardMedia
                component="img"
                sx={{ width: 145, height: 105, borderColor: 'amber.400', 
                display: { xs: 'none', sm: 'block' } }}
                image={Item1}
              />
            <CardContent sx={{ width: 225, height: 105, flex: 1, }}>
              <Stack direction="row">
              <Typography component="subtitle1" variant="subtitle1">
                Name
              </Typography>
              <ListItem></ListItem>
              <Typography component="subtitle1" variant="subtitle1">
                Price
              </Typography>
              </Stack>
              <Typography variant="caption" paragraph>
                Description
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </ListItem>
      <ListItem>
        <CardActionArea component="a">
          <Card sx={{ display: 'flex' }}>
          <CardMedia
                component="img"
                sx={{ width: 145, height: 105, borderColor: 'amber.400', 
                display: { xs: 'none', sm: 'block' } }}
                image={Item1}
              />
            <CardContent sx={{ width: 225, height: 105, flex: 1, }}>
              <Stack direction="row">
              <Typography component="subtitle1" variant="subtitle1">
                Name
              </Typography>
              <ListItem></ListItem>
              <Typography component="subtitle1" variant="subtitle1">
                Price
              </Typography>
              </Stack>
              <Typography variant="caption" paragraph>
                Description
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </ListItem>
      <ListItem>
        <CardActionArea component="a">
          <Card sx={{ display: 'flex' }}>
          <CardMedia
                component="img"
                sx={{ width: 145, height: 105, borderColor: 'amber.400', 
                display: { xs: 'none', sm: 'block' } }}
                image={Item1}
              />
            <CardContent sx={{ width: 225, height: 105, flex: 1, }}>
              <Stack direction="row">
              <Typography component="subtitle1" variant="subtitle1">
                Name
              </Typography>
              <ListItem></ListItem>
              <Typography component="subtitle1" variant="subtitle1">
                Price
              </Typography>
              </Stack>
              <Typography variant="caption" paragraph>
                Description
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </ListItem>
      </Stack>
    </List>
    </Box>
  </div>
)

}

export default Menu;