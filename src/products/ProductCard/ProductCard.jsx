import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../../contexts/ProductContextProvider'   
import { useCart } from "../../contexts/CartContextProvider" 
import "../../styles/ProductCard.css"


const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const { deleteProduct } = useProducts();
    const { addProductToCart, checkProductInCart } = useCart()
  return (
    <div className='products-menu'>
      <div className='products-list'>
      {item.name} {item.price}
      </div>
      <div className='products-btn'>
      <button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
      <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
      <button onClick={() => deleteProduct(item.id)}>Delete</button>   
      <button onClick={() => addProductToCart(`/cart/${item.id}`)}>Add To Product</button>     
      </div>
    </div>
  )
}

export default ProductCard