import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'  
import Navbar from './Components/Navbar'
import About from './Pages/About'
import { Home } from '@mui/icons-material'
import Category from './Pages/Category'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import FilterProduct from './Pages/FilterProduct'

function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar/> 

    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} /> 
    <Route path='/Category' element={<Category/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Product' element={<Product/>} /> 
    <Route path='/cat-product/:catname' element={<FilterProduct/>} /> 
    
    </Routes>
    
    </BrowserRouter> 
    </>
  )
}

export default App 