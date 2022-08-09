import React, { useState } from 'react';
import Menu from './Components/Menu';
import Categories from './Components/Categories';
import data from './Components/data';
import Divider from '@mui/material/Divider'

function App() {
  const [items] = useState(data)
  return (
    <div 
      style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', }}
      >
    <main>
    <section>
    <h3  style={{ display: 'flex', justifyContent: 'center', }}>Our Menu</h3>
    <Divider  variant="middle" />
    <Categories/>
    <Menu items={items} />
    {/*<Button variant="contained" onClick={()=> console.log ('You Clicked Me')}>Clear All</Button>*/}
    </section>
  </main>
  </div>
  )
}


export default App;
