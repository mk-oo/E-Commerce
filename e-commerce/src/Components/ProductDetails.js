import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import ProductCard from './ProductCard';
const ProductDetails = () => {

    const params = useParams();
    const id  = params.id;
    const [product,SetProduct] = useState({});

    const API = "http://localhost:8000/Products/" + id ;

    useEffect(() => {

        fetch(API)
            .then(response => response.json())
            .then(product => SetProduct(product));

    }, []);


    return ( 
            <div>
               <img src= {product.image} alt = {product.title}/>
               <h1>{product.title}</h1>
               <p>{product.description}</p>
            </div>

     );
}
 
export default ProductDetails;