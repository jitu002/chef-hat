import "./styles.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Card,CardBody,Image,Stack,Text,CardFooter,Button,useColorMode,useColorModeValue,Flex } from "@chakra-ui/react";
import { AddIcon,MinusIcon } from "@chakra-ui/icons";


export const CartCard = ({ id,image, price,content }) => {

  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue('blue.900', 'white');
  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  const itemCount = cart?.reduce((count, item) => {
    return item.id === id ? count + 1 : count;
  }, 0);

  function add(){
    addToCart({id,image,price,content});
  }

  function remove() {
    removeFromCart({ id,image, price,content });
  }

  return (
    <div id="Card">
      <Card fontFamily="quicksand" maxW='sm' marginRight={"5%"} marginBottom={"5%"}>
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
          <Text 
            fontFamily="quicksand" 
            fontSize={{lg:"3xl",md:"xl",base:"lg"}} 
            color={color}
          >
            ₹{price*itemCount}/-
          </Text>
          <Button 
            onClick={itemCount===0?add:null} 
            colorScheme="messenger" 
            variant={itemCount > 0 ? "solid" : "ghost"}
            fontSize={itemCount > 0 ? "xl" : "2xl"}
          >
            {itemCount > 0 ? 
            <Flex minWidth='max-content' alignItems='center' gap='8'>
            <Button variant="outline" borderRadius="60px" onClick={add} ><AddIcon /></Button> {itemCount} <Button variant="outline" borderRadius="60px" onClick={remove} ><MinusIcon/></Button>
            </Flex>   : "Add"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
