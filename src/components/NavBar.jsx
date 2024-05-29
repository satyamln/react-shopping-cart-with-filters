import React, { useState } from 'react'
import "./NavBar.css"
import { BsCart4 } from "react-icons/bs";
import { NavLink, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { items } from './datas';

const NavBar = ({setData,data,cart,setCart}) => {

  let [searchTerm,setSearchTerm] = useState("")
  let navigate = useNavigate();
  let location = useLocation()


  const filterByCategory=(category)=>{
    const filteredItem = items.filter((item)=>item.category===category);
    setData(filteredItem);
    console.log(filteredItem);
    // alert(category)
  }
  const filterByPrice=(price)=>{
    const filteredItem = items.filter((item)=>item.price>=price);
    setData(filteredItem);
    // alert(price)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/searchproduct/${searchTerm}`);
    setSearchTerm("")
    
  }
  return (

    <>
      <header className='sticky-top' >
        <div className='logo-search-cart '>
            <NavLink to="/" className="logo">
                Shop<span style={{color:"red",textShadow:"0px 0px 5px white"}}>X</span> Electronics
            </NavLink>

            <form className="search" onSubmit={handleSubmit}>
                <input type='text' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} placeholder='Search Products' />
            </form>

            <NavLink to="/cart" className="cart">
              <button type="button" className="btn btn-primary position-relative">
                <BsCart4 style={{fontSize:"1.5rem"}}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              </button>
            </NavLink>
        </div>

      {location.pathname=="/" && (
        <div className="filter-products">
          <ul >
            <li onClick={()=>{setData(items)}}>All</li>
            <li onClick={()=>{filterByCategory("mobiles")}}>Mobiles</li>
            <li onClick={()=>{filterByCategory("tablets")}}>Tablets</li>
            <li onClick={()=>{filterByCategory("laptops")}}>Laptops</li>
            <li onClick={()=>{filterByPrice(29999)}}>29999+</li>
            <li onClick={()=>{filterByPrice(49999)}}>49999+</li>
            <li onClick={()=>{filterByPrice(69999)}}>69999+</li>
            <li onClick={()=>{filterByPrice(89999)}}>89999+</li>
          </ul>
        </div>
      )}
      </header>
    </>
  )
}

export default NavBar
