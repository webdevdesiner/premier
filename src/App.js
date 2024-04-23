import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Alpargata from './Pages/Alpargata';
import Bones from './Pages/Bones';
import Carrossel from './Pages/Carrossel';


const App = () => {
  return (
   
      

    <Routes>
       <Route path='/' element ={
             <Home/>
          }>
        </Route>
        <Route path='/alpargatas' element ={
             <Alpargata/>
          }>
        </Route>
        <Route path='/bones' element ={
             <Bones/>
          }>
        </Route>
        <Route path='/bones' element ={
             <Bones/>
          }>
        </Route>
        <Route path='/carrossel' element ={
             <Carrossel/>
          }>
        </Route>
    </Routes>
        
  
);
}

export default App