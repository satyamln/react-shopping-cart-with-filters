import React, { useState } from 'react'
import "./App.css"
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import { items } from './components/datas'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'
import SearchProduct from './components/SearchProduct'


const App = () => {

  const [data,setData] = useState([...items])
  const [cart,setCart] = useState([])

  return (
    <>
      <NavBar setData={setData} data={data} cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={<Products items={data} cart={cart} setCart={setCart} />} />
        <Route path='/productdetail/:id' element={<ProductDetail cart={cart} setCart={setCart} /> } />
        <Route path='/searchproduct/:searchterm' element={<SearchProduct cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
      
    </>
  )
}

export default App
