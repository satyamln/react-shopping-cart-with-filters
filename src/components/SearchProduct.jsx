import { useParams } from "react-router-dom"
import "./SearchProduct.css"
import { items } from "./datas"
import React, { useEffect, useState } from 'react'
import Products from "./Products"

const SearchProduct = ({cart, setCart}) => {
   const {searchterm} = useParams()
   const [filteredData,setFilteredData] = useState([])

   useEffect(()=>{
        (()=>{
            const filteredProducts = items.filter((product)=>product.title.toLowerCase().includes(searchterm.toLowerCase()));
            setFilteredData(filteredProducts)
        })()
   },[searchterm])

  return (
    <>
      <Products items={filteredData} cart={cart} setCart={setCart} />
    </>
  )
}

export default SearchProduct
