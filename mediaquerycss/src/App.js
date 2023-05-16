import React from 'react'
import Nav from './organisms/Nav';
import Pages from './Pages/Pages';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Register from './Pages/Register';
import Login from './Pages/Login';


export default function App() {
  return (
    <div>
     <Nav/>
    {/* <Pages/> */}
    <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/about" element={<About/>} exact />
          <Route path="/register" element={<Register/>} exact />
          <Route path="/logi" element={<Login/>} exact />


        </Routes>
    </div>
  )
}