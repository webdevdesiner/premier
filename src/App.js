import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Alpargata from './Pages/Alpargata';

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
    </Routes>
        
  
);
}

export default App