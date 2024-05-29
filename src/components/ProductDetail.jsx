import "./ProductDetail.css"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './datas'
import { BsCart4, BsCurrencyRupee } from 'react-icons/bs'
import { Button } from 'react-bootstrap'
import Products from "./Products"


const ProductDetail = ({cart, setCart}) => {
    let {id} = useParams()

    const [product,setProduct] = useState({});
    const [productCategory,setProductCategory] = useState([])

    useEffect(()=>{
        const productfilter = items.filter((item)=>item.id==id);
        setProduct(productfilter[0]);

        const productCategoryFilter = items.filter((item)=>item.category == product.category);
        setProductCategory(productCategoryFilter)
    },[id,product])

    const addToCart = (id,title,imgSrc,description,price) =>{
        const obj={
          id,title,imgSrc,description,price
        }
        setCart([...cart,obj])
    } 

  return (
    <>
        <div className="productdetail">
            <div className="img">
                <img src={product.imgSrc} alt="" style={{width:"300px"}} />
            </div>
            <div className="other-detail">
                <div className="title">
                    {product.title}
                </div>
                <div className="description">
                    {product.description}
                </div>
                <div className="price-addToCart">
                    <div className="price">
                    <b><BsCurrencyRupee/>{product.price}</b>
                    </div>
                    <div className="addToCart">
                    <p onClick={()=>{addToCart(product.id,product.title,product.imgSrc,product.description,product.price)}} className="btn btn-primary">Add To Cart <BsCart4/> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="related-products">
            <h1 className="heading">Related Products</h1>
            <Products items={productCategory} cart={cart} setCart={setCart} /> 
        </div>
    </>

  )
}

export default ProductDetail
