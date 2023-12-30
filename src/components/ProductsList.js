import Product from "./Product";
import {useEffect, useState} from 'react'
function ProductsList() {

const api_url = "https://fakestoreapi.com/products"
const [products,setProduct]=useState([])
const [categories,setCategories]=useState([])


const getProduct=()=>{

  fetch(api_url)
  .then((res) => res.json())
  .then((data) =>setProduct(data))
}

const getCategories=()=>{

  fetch(`${api_url}/categories`)
  .then((res) => res.json())
  .then((data) =>setCategories(data))
}
const getProductInCategory=(categoryName)=>{

  fetch(`${api_url}/category/${categoryName}`)
  .then((res) => res.json())
  .then((data) =>setProduct(data))
}


useEffect(() =>{
  getProduct()
  getCategories()
},[])
  return (
    <>
      <h2 className=" text-center p-3">our products </h2>
      <div className="container">
      <button 
          className="btn btn-info"  
            onClick={()=>{
              getProduct()
            }}
          >All</button>
        {categories.map((category) =>{ 
        
          return <button 
          key={category} 
          className="btn btn-info"  
            onClick={()=>{
              getProductInCategory(category);
            }}
          >{category}</button>
        
        })}
        <div className="row">
          {products.map((product) =>{
            return  (
          <div className="col-3" key={product.id}>
            <Product product={product} showButton={true} ></Product>
          </div>
            )
          })}
          


        </div>
      </div>
    </>
  );
}

export default ProductsList;
