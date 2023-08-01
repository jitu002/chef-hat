import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(el) {
    setCart([...cart, el]);
  }
  function removeFromCart(el) {
    let filteredArr = cart.filter((prod) => {
      return prod.id !== el.id;
    });
    setCart(filteredArr);
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};