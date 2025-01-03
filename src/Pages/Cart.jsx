import { useContext, useEffect, useState } from "react";
import { CartCard } from "../Components/CartCard";
import { CartContext } from "../Context/CartContext";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { loginContext } from "../Context/LoginContext";
import { useToast,SimpleGrid,Text } from '@chakra-ui/react';

export const Cart = () => {
  const { isLogin } = useContext(loginContext);
  const toast = useToast();
  const { cart } = useContext(CartContext);
  const [uniqueCart, setUniqueCart] = useState([]);
  const [tot, setTot] = useState(0);
  const nav = useNavigate();

  // Function to filter unique items
  function filterUniqueItems() {
    const uniqueItems = cart.reduce((acc, current) => {
      if (!acc.some(item => item.id === current.id)) {
        acc.push(current);
      }
      return acc;
    }, []);
    setUniqueCart(uniqueItems);
  }

  // Function to calculate total price
  function getTot() {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice = totalPrice + cart[i].price;
    }
    setTot(totalPrice);

}

  // Navigation handler
  function link() {
    if (!isLogin) {
      toast({
        title: `Please login or signup`,
        position: 'top',
        status: 'warning',
        isClosable: true,
      });
    } else {
      if (uniqueCart.length === 0) {
        toast({
          title: `No item in cart`,
          position: 'top',
          status: 'warning',
          isClosable: true,
        });
      } else {
        nav("/Checkout");
      }
    }
  }

  useEffect(() => {
    filterUniqueItems();
  }, [cart]);

  useEffect(() => {
    getTot();
  }, [uniqueCart]);

  return (
    <div>
      <Text fontSize={{lg:"5xl",md:"3xl",base:"xl"}} fontFamily="quicksand">Total :- ₹{tot}</Text>
      <SimpleGrid px="5%" columns={[1,3,3]}  spacingY='50px' spacingX='20px'>
        {uniqueCart.map((el) => (
          <CartCard key={el.id} {...el} />
        ))}
      </SimpleGrid>
      <Button size="lg" colorScheme="teal" variant="outline" onClick={link}>
        Checkout
      </Button>
    </div>
  );
};
