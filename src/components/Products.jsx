import "./Products.css"
import React, { useEffect, useState } from 'react'
import { BsCurrencyRupee } from 'react-icons/bs'
import { BsCart4 } from "react-icons/bs";

// import { items } from './datas'
import { NavLink } from 'react-router-dom';

const Products = ({items, cart, setCart}) => {
  
  const addToCart = (id,title,imgSrc,description,price) =>{
      const obj={
        id,title,imgSrc,description,price
      }
      setCart([...cart,obj])
  } 

  return (
    <div className='container-fluid'>
      <div className="row">
        {
          items.map((product)=>{
            return(
              <div key={product.id} className="card my-4 mx-4" style={{width: "18rem",backgroundColor:"black","color":"wheat"}} >
                <NavLink to={`/productdetail/${product.id}`}><img src={product.imgSrc} className="card-img-top" alt="..." /></NavLink>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <b><BsCurrencyRupee/>{product.price}</b>

                  <p onClick={()=>{addToCart(product.id,product.title,product.imgSrc,product.description,product.price)}} className="btn btn-primary">Add To Cart <BsCart4/> </p>
                </div>
              </div>
            )
          })
          
        }
      </div>
      
    </div>
  )
}

export default Products
