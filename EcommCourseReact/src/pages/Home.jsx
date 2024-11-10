import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const productsData = await fetchProducts();
            console.log(productsData[0]);
            setProducts(productsData);
        };
        getProducts();
    }, []);
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Product List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow">
                        <img src={product.thumbnail} alt="product" />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <Link to={`/product/${product.id}`} className="mt-4 inline-block bg-blue-400 text-white rounded p-4">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home