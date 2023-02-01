import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./components/Home"
import Register from "./components/Register"
import Pnf from "./components/Pnf"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App(props){
  return (
    <BrowserRouter>
    <Menu/>
    <ToastContainer position={"top-right"} theme={"colored"} autoClose={"9000"} />
    <Routes>
          <Route path={`/`} element={<Home/>} />
          <Route path={`/home`} element={<Home/>} />
          <Route path={`/register`} element={<Register/>} />
          <Route path={`/*`} element={<Pnf/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App