import React from 'react';
import './App.css'
import Menu from './Components/Menu';
import Categories from './Components/Categories';
import { Outlet } from "react-router-dom";

export default function App() {

  return (
    <div className="App">
    <Categories/>
    <Menu/>
    <nav>
      </nav>
      <Outlet />
  </div>
  )
}
