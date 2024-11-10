import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { state } = useContext(CartContext);

    let { products } = state;
    console.log(state);
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
            {products?.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="space-y-4">
                        {products?.map((item) => (
                            <li
                                key={item.id}
                                className="bg-white shadow-lg rounded flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                                    <p className="text-lg font-bold">
                                        Price: ${item.price.toFixed(2)}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Cart