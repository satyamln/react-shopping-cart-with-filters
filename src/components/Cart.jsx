import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { BsCart4, BsCurrencyRupee } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Cart = ({cart,setCart}) => {
  const navigate = useNavigate()
  console.log(cart);

  return (
    cart.length !=0 ? 
    (<div className="container">
      {
        cart.map((cart)=>{
          return(
            <div key={cart.id}>
              <div className="img">
                <img src={cart.imgSrc} alt="" width={"350px"}/>
              </div>
              <h2>{cart.title}</h2>
              <p>{cart.description}</p>
              <Button><BsCurrencyRupee/>{cart.price}</Button><Button style={{backgroundColor:"darkgreen"}}>Buy Now</Button>
            </div>
          )
        })
      }
      <div className="checkOut-clearCart" style={{marginTop:"50px"}}>
        <Button style={{backgroundColor:"green",marginRight:"20px"}}>Check Out</Button>
        <Button className='btn btn-danger' onClick={()=>{setCart([])}}>Clear Cart</Button>
      </div>
    </div>) 
    :
    <div>
      <h2>Cart is empty! <BsCart4 style={{fontSize:"3rem"}} /></h2>
      <Button onClick={()=>{navigate("/")}} style={{backgroundColor:"grey",border:"none"}}>Continue Shoppping</Button>
    </div>
  )
}

export default Cart
