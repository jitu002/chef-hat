import { useContext, useEffect, useState } from "react";
import { CartCard } from "../Components/CartCard";
import { CartContext } from "../Context/CartContext";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { loginContext } from "../Context/LoginContext";
import { useToast } from '@chakra-ui/react'


export const Cart = () => {
  const { isLogin, handleLogin } = useContext(loginContext);
  const toast = useToast()
  const { cart } = useContext(CartContext);
  const [tot, setTot] = useState(0);
  const nav = useNavigate();
  console.log(cart);

  function getTot() {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice = totalPrice + cart[i].price;
    }
    setTot(totalPrice);

}
  function link() {
    if (!isLogin) {
      toast({
        title: `Please login or signup`,
        position: 'top',
        status:'warning',
        isClosable: true,
      })
    }
     else {
      if(cart.length==0){
        toast({
          title: `No item in cart`,
          position: 'top',
          status:'warning',
          isClosable: true,
        })
      }
      else{
        nav("/Checkout");
      }
    }
  }

  useEffect(() => {
    getTot();
  }, [cart]);

  return (
    <div>
      <h1 className="total">Total :- ₹{tot}</h1>
      {cart.map((el) => {
        return <CartCard {...el} />;
      })}
      <Button size="lg" colorScheme="teal" variant="outline" onClick={link}>
        Checkout
      </Button>
    </div>
  );
};
