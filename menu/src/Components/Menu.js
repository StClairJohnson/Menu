import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Item1 from './Images/item-1.jpeg'
import Item3 from './Images/item-3.jpeg' 
import Item5 from './Images/item-5.jpeg'
import Item7 from './Images/item-7.jpeg'
import Item2 from './Images/item-2.jpeg'
import Item4 from './Images/item-4.jpeg' 
import Item6 from './Images/item-6.jpeg'
import Item8 from './Images/item-8.jpeg'


function Menu () {

return (
  <div className="list" style={{backgroundColor: "#ffffff"}}>
   <Box sx={{ flexGrow: 1, width: 450}}>
    <List>
      <Stack direction="column">
        <Stack direction="row">
      <ListItem>
        <CardActionArea>
          <Card elevation={0} sx={{ display: 'flex' }}>
          <CardMedia
                component="img"
                sx={{ width: 145, height: 105, border: 2, borderColor: '#ffa726', 
                display: { xs: 'none', sm: 'block' } }}
                image={Item1}
              />
            <CardContent sx={{ width: 270, height: 105, flex: 1, pt: 0 }}>
              <Stack direction="row">
              <Typography component="subtitle2" variant="subtitle2"
              style={{color:'#1a237e', fontWeight: 'bold'}}>
                Buttermilk Pancakes
              </Typography>
              <Typography variant="title" color="inherit" noWrap>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              </Typography>
              <Typography component="subtitle2" variant="subtitle2" 
              style={{color:'#ffa726', fontWeight: 'bold'}}>
                $15.99
              </Typography>
              </Stack>
              <Divider/>
              <Typography variant="caption" paragraph sx={{pt: 1}}>
                I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </ListItem>
      <ListItem>
        <CardActionArea>
          <Card  elevation={0} sx={{ display: 'flex' }}>
          <CardMedia
                component="img"
                sx={{ width: 145, height: 105, border: 2, borderColor: '#ffa726', 
                display: { xs: 'none', sm: 'block' } }}
                image={Item2}
              />
            <CardContent sx={{ width: 270, height: 105, flex: 1, pt: 0 }}>
              <Stack direction="row">
              <Typography component="subtitle2" variant="subtitle2"
              style={{color:'#1a237e', fontWeight: 'bold'}}>
                Diner Double
              </Typography>
              <Typography variant="title" color="inherit" noWrap>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </Typography>
              <Typography component="subtitle2" variant="subtitle2" 
              style={{color:'#ffa726', fontWeight: 'bold'}}>
                $13.99
              </Typography>
              </Stack>
              <Divider/>
              <Typography variant="caption" paragraph sx={{pt: 0.6}}>
              vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats 
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </ListItem>
      </Stack>
      <Stack direction="row">
      <ListItem>
        <CardActionArea>
          <Card elevation={0} sx={{ display: 'flex' }}>
          <CardMedia
                component="img"
                sx={{ width: 145, height: 105, border: 2, borderColor: '#ffa726', 
                display: { xs: 'none', sm: 'block' } }}
                image={Item3}
              />
            <CardContent sx={{ width: 270, height: 105, flex: 1, pt: 0 }}>
              <Stack direction="row">
              <Typography component="subtitle2" variant="subtitle2"
              style={{color:'#1a237e', fontWeight: 'bold'}}>
                Godzilla Milkshake
              </Typography>
              <Typography variant="title" color="inherit" noWrap>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              </Typography>
              <Typography component="subtitle2" variant="subtitle2" 
              style={{color:'#ffa726', fontWeight: 'bold'}}>
                $6.99
              </Typography>
              </Stack>
              <Divider/>
              <Typography variant="caption" paragraph sx={{pt: 1}}>
              ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </ListItem>
      <ListItem>
        <CardActionArea>
          <Card  elevation={0} sx={{ display: 'flex' }}>
          <CardMedia
                component="img"
                sx={{ width: 145, height: 105, border: 2, borderColor: '#ffa726', 
                display: { xs: 'none', sm: 'block' } }}
                image={Item4}
              />
            <CardContent sx={{ width: 270, height: 105, flex: 1, pt: 0 }}>
              <Stack direction="row">
              <Typography component="subtitle2" variant="subtitle2"
              style={{color:'#1a237e', fontWeight: 'bold'}}>
                Country Delight
              </Typography>
              <Typography variant="title" color="inherit" noWrap>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              </Typography>
              <Typography component="subtitle2" variant="subtitle2" 
              style={{color:'#ffa726', fontWeight: 'bold'}}>
                $20.99
              </Typography>
              </Stack>
              <Divider/>
              <Typography variant="caption" paragraph sx={{pt: 1}}>
              Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </ListItem>
      </Stack>
      <Stack direction="row">
      <ListItem>
        <CardActionArea>
          <Card  elevation={0} sx={{ display: 'flex' }}>
          <CardMedia
                component="img"
                sx={{ width: 145, height: 105, border: 2, borderColor: '#ffa726', 
                display: { xs: 'none', sm: 'block' } }}
                image={Item5}
              />
            <CardContent sx={{ width: 270, height: 105, flex: 1, pt: 0 }}>
              <Stack direction="row">
              <Typography component="subtitle2" variant="subtitle2"
              style={{color:'#1a237e', fontWeight: 'bold'}}>
                Egg Attack
              </Typography>
              <Typography variant="title" color="inherit" noWrap>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </Typography>
              <Typography component="subtitle2" variant="subtitle2" 
              style={{color:'#ffa726', fontWeight: 'bold'}}>
                $22.99
              </Typography>
              </Stack>
              <Divider/>
              <Typography variant="caption" paragraph sx={{pt: 1}}>
              franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </ListItem>
      <ListItem>
        <CardActionArea>
          <Card  elevation={0} sx={{ display: 'flex' }}>
          <CardMedia
                component="img"
                sx={{ width: 145, height: 105, border: 2, borderColor: '#ffa726', 
                display: { xs: 'none', sm: 'block' } }}
                image={Item6}
              />
            <CardContent sx={{ width: 270, height: 105, flex: 1, pt: 0 }}>
              <Stack direction="row">
              <Typography component="subtitle2" variant="subtitle2"
              style={{color:'#1a237e', fontWeight: 'bold'}}>
                Oreo Dream
              </Typography>
              <Typography variant="title" color="inherit" noWrap>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </Typography>
              <Typography component="subtitle2" variant="subtitle2" 
              style={{color:'#ffa726', fontWeight: 'bold'}}>
                $18.99
              </Typography>
              </Stack>
              <Divider/>
              <Typography variant="caption" paragraph sx={{pt: 1}}>
              Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </ListItem>
      </Stack>
      <Stack direction="row">
      <ListItem>
        <CardActionArea>
          <Card elevation={0} sx={{ display: 'flex' }}>
          <CardMedia
                component="img"
                sx={{ width: 145, height: 105, border: 2, borderColor: '#ffa726', 
                display: { xs: 'none', sm: 'block' } }}
                image={Item7}
              />
            <CardContent sx={{ width: 270, height: 105, flex: 1, pt: 0 }}>
              <Stack direction="row">
              <Typography component="subtitle2" variant="subtitle2" 
              style={{color:'#1a237e', fontWeight: 'bold', }}>
                Bacon Overflow
              </Typography>
              <Typography variant="title" color="inherit" noWrap>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </Typography>
              <Typography component="subtitle2" variant="subtitle2" 
              style={{color:'#ffa726', fontWeight: 'bold',}}>
                $8.99
              </Typography>
              </Stack>
              <Divider/>
              <Typography variant="caption" paragraph sx={{pt: 1}}>
              carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </ListItem>
      <ListItem>
        <CardActionArea>
          <Card  elevation={0} sx={{ display: 'flex' }}>
          <CardMedia
                component="img"
                sx={{ width: 145, height: 105, border: 2, borderColor: '#ffa726', 
                display: { xs: 'none', sm: 'block' } }}
                image={Item8}
              />
            <CardContent sx={{ width: 270, height: 105, flex: 1, pt: 0 }}>
              <Stack direction="row">
              <Typography component="subtitle2" variant="subtitle2" 
              style={{color:'#1a237e', fontWeight: 'bold', }}>
                American Classic
              </Typography>
              <Typography variant="title" color="inherit" noWrap>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
              </Typography>
              <Typography component="subtitle2" variant="subtitle2" 
              style={{color:'#ffa726', fontWeight: 'bold',}}>
                $12.99
              </Typography>
              </Stack>
              <Divider/>
              <Typography variant="caption" paragraph sx={{pt: 1}}>
              on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut 
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </ListItem>
      </Stack>
      </Stack>
    </List>
    </Box>
  </div>

)

}


export default Menu;