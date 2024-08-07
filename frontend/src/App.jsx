import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Chats from './pages/Chats';
import { Container } from '@chakra-ui/react';


function App() {
  

  return (
    <div style={{ backgroundColor: 'lightblue', minHeight: '100vh' }}>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/chats' element={<Chats></Chats>}></Route>
      </Routes>
    </BrowserRouter>
     </div>
  )
}

export default App
