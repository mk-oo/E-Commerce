import { useEffect,useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
    const [products,SetProducts] = useState([]);

    const API = "http://localhost:8000/Products";

    useEffect(() => {

        fetch(API)
            .then(response => response.json())
            .then(data => SetProducts(data));

    }, []);


    return (
        <>
        <div className="text-center p-5">
            <h2>Products</h2>

            <div className="container p-5">
            <div className="row">
                {products.map((product)=>{
                    return (
                        <div className="col-3" key={product.id}>
                            <ProductCard  product = {product} />
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
        </>
    );
};

export default Products;
