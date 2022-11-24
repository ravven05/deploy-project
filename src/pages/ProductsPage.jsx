import React, { useState } from 'react'
import ProductList from '../products/ProductList/ProductList'
import ProductSideBar from '../products/ProductSideBar/ProductSideBar';
import "../styles/ProductsPage.css"


const ProductsPage = () => {
 const [page, setPage] = useState(1);
 const [isSideBar, setIsSideBar] = useState(true);

 function changeSideBarStatus(){
  setIsSideBar(!isSideBar);
 }

  return (
    <div className='productsPage'>
    < ProductSideBar isSideBar={isSideBar} setPage={setPage}/>
    <div className='products'><ProductList page={page} setPage={setPage} changeSideBarStatus={changeSideBarStatus}/></div>
    </div>
  )
}

export default ProductsPage