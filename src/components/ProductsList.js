import Product from "./Product";
import {useEffect, useState} from 'react'
function ProductsList() {

const api_url = "https://fakestoreapi.com/products"
const [products,setProduct]=useState([])

useEffect(() =>{
  fetch(api_url)
  .then((res) => res.json())
  .then((data) =>setProduct(data))
})
  return (
    <>
      <h2 className=" text-center p-3">our products </h2>
      <div className="container">
        <div className="row">
          {products.map((product) =>{
            return  (
          <div className="col-3" key={product.id}>
            <Product product={product}></Product>
          </div>
            )
          })}
          


        
        </div>
      </div>
    </>
  );
}

export default ProductsList;
