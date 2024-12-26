import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - Quantity : {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cart;
