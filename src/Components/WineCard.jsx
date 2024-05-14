import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Image,CardBody,Card,Stack,Text, CardFooter,Button,useColorMode,useColorModeValue } from "@chakra-ui/react";
export const WineCard = ({ id,image,heading,content,price }) => {
  const navigate = useNavigate();

  const { addToCart, removeFromCart } = useContext(CartContext);
  const { toggleColorMode } = useColorMode()

  const color = useColorModeValue('blue.900', 'white')

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
        <Card fontFamily="Audiowide" maxW='sm' marginBottom={"5%"} marginLeft={"5%"}>
          <CardBody>
            <Image
              src={image}
              alt='Nice & tasty wine'
              borderRadius='lg'
              className="imgeffect"
            />
            <Stack mt='3' spacing='1'>
              <Text fontSize={{lg:"3xl",md:"xl",base:"md"}}>{heading}</Text>
              <Text fontSize={{lg:"18px",md:"16px",base:"14px"}} marginTop={"20px"}>{content}</Text>
            </Stack>
          </CardBody>
          <CardFooter className="foot">
            <Text fontSize={{lg:"3xl",md:"xl",base:"md"}} color={color}>₹{price}</Text>
            <Button onClick={add} colorScheme="messenger" variant="ghost" fontSize="2xl">Add</Button>
          </CardFooter>
        </Card>
    </div>
  );
};
