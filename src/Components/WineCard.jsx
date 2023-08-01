import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Image,CardBody,Card,Stack,Text, CardFooter,Button } from "@chakra-ui/react";
export const WineCard = ({ id,image,heading,content,price }) => {
  const navigate = useNavigate();

  const { addToCart, removeFromCart } = useContext(CartContext);
/*
  function nav() {
    navigate(`/products/${id}`);
  }

  function add() {
    addToCart({ id, brand, img, price, details, category });
  }

  function Delete() {
    removeFromCart({ id, brand, img, price, details, category });
  }*/
  function add() {
    addToCart({ id,image,heading,content,price });
  }

  return (
    <div id="Card">
        <Card maxW='sm' marginBottom={"5%"} marginLeft={"5%"}>
          <CardBody>
            <Image
              src={image}
              alt='Nice & tasty wine'
              borderRadius='lg'
              className="imgeffect"
            />
            <Stack mt='3' spacing='1'>
              <Text className="banner1" fontSize="3xl">{heading}</Text>
              <Text className="banner1" fontSize="2xl" marginTop={"20px"}>{content}</Text>
            </Stack>
          </CardBody>
          <CardFooter className="foot">
            <Text fontSize="3xl">₹{price}</Text>
            <Button onClick={add} colorScheme="messenger" variant="ghost" fontSize="2xl">Add</Button>
          </CardFooter>
        </Card>
    </div>
  );
};
