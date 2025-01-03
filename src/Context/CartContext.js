import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(el) {
    setCart([...cart, el]);
  }
  function removeFromCart(el) {

    const index=cart.findIndex((prod)=>prod.id===el.id)

    if(index!=-1){
      const updatedCart = [...cart];
      updatedCart.splice(index, 1); 
      setCart(updatedCart);
    }
    
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};