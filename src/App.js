import React from 'react'
import { FaRegFileArchive } from 'react-icons/fa'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import styled from 'styled-components'
import { Navbar, Sidebar, Footer } from './components'

import {Home, About, Error, Cart, Checkout, PrivateRoute, Products, SingleProduct, AuthWrapper} from './pages'

// import 'dotenv/config'
// import express from 'express'


function App() {


  return (
    

<BrowserRouter>
<Navbar/>
<Sidebar/>
<AuthWrapper>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/products' element={<Products/>}/>
<Route path='/products/:id' element={<SingleProduct/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/checkout' element={<PrivateRoute><Checkout/></PrivateRoute>}/>
<Route path='/error' element={<Error/>}/>
</Routes>
</AuthWrapper>
<Footer/>
</BrowserRouter>


)
}


const Button = styled.button`
  color: green;
  background-color: yellow;

  `

const Container = styled.div`
color: white;
background-color: red;
  h3 {
  font-size: 8rem;
  color: blue;
  }

`
export default App
