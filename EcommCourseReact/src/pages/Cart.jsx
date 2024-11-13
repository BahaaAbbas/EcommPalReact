import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { state, addToCart, removeProduct, deleteProduct } = useContext(CartContext);

    let { products, totalPrice } = state;
    totalPrice = totalPrice.toFixed(2);
    console.log(state);

    return (
        <div className="p-6">
            <div>
                <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
                {
                    totalPrice > 0 && (
                        <div>
                            <p className="font-semibold text-xl mb-3 ">Total Price: {totalPrice} </p>
                        </div>
                    )
                }
            </div>

            {products?.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div
                    className={`${products.length === 1 ? "flex justify-center" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        }`}
                >

                    {products?.map((item) => (
                        <div
                            key={item.id}
                            className="bg-cyan-50 shadow-lg rounded p-4 flex flex-col justify-between items-center"
                        >
                            <img src={item.thumbnail} alt="product" className="bg-gray-300 rounded mb-4 w-full h-full object-cover" />
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-500">Quantity: {item.quantity}</p>
                            <p className="text-lg font-bold mb-3">
                                Price: ${item.price.toFixed(2)}
                            </p>
                            <div className="flex space-x-2 mb-4 mt-4">
                                <button onClick={() => addToCart(item)} className="bg-green-500 text-white px-3 py-1 rounded">+</button>
                                <button onClick={() => removeProduct(item.id)} className="bg-yellow-500 text-white px-3 py-1 rounded">-</button>
                                <button onClick={() => deleteProduct(item.id)} className="bg-red-500 text-white px-3 py-1 rounded">Del</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}


        </div>
    );
}

export default Cart;
