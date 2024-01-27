import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Image,CardBody,Card,Stack,Text, CardFooter,Button,useColorMode,useColorModeValue } from "@chakra-ui/react";
export const MenuCard = ({ id,image,content,price }) => {
  const navigate = useNavigate();

  const { toggleColorMode } = useColorMode()

  const color = useColorModeValue('blue.900', 'white')

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
    addToCart({ id,image,content,price });
  }

  return (
    <div id="Card">
        <Card maxW='sm'  marginRight={"5%"} marginBottom={"5%"}>
          <CardBody>
            <Image
              src={image}
              alt='Nice & tasty food'
              borderRadius='lg'
              className="imgeffect"
            />
            <Stack mt='3' spacing='1'>
              <Text fontSize={{lg:"18px",md:"16px",base:"14px"}}>{content}</Text>
            </Stack>
          </CardBody>
          <CardFooter className="foot">
            <Text fontSize={{lg:"3xl",md:"xl",base:"lg"}} color={color}>₹{price}/-</Text>
            <Button onClick={add} colorScheme="messenger" variant="ghost" fontSize="2xl">Add</Button>
          </CardFooter>
        </Card>
    </div>
  );
};
