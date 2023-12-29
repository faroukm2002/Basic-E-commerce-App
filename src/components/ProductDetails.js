import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Product from "./Product"

function ProductDetails(){
    const api_url = "https://fakestoreapi.com/products"
    const [product ,setProduct]=useState({})

    const  params=useParams()
    console.log(params)

    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`)
        .then(response => response.json())
        .then(data => setProduct(data))



    },[])


return (
    <>
    <Product product={product}  showButton={false}></Product>
    </>
)

}

export default ProductDetails