import "./styles.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button } from "@chakra-ui/react";

export const CartCard = ({ id,image, price,content }) => {

  const { addToCart, removeFromCart } = useContext(CartContext);

  function remove() {
    removeFromCart({ id,image, price,content });
  }

  return (
    <div id="Card">
      <div id="ImgDiv">
        <img style={{ width: "200px" }} src={image} alt={id} />
      </div>
      <div id="DetailsDiv">
        <h1>{id}</h1>
        <h4>Price - {price}</h4>
        <h6>{content}</h6>
        <Button colorScheme="teal" size="sm" onClick={remove}>
          Delete
        </Button>
      </div>
    </div>
  );
};
