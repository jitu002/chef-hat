import { useContext } from "react";
import { Image,Box,Text,useColorMode,useColorModeValue } from "@chakra-ui/react";
export const HomeOptions = ({ id,image,heading,content }) => {
  
  const color = useColorModeValue('blue.900', 'white')
/*
  function nav() {
    navigate(`/products/${id}`);
  }*/

  return (
    <div className="Card">
        <Box height='80px'>
            <Image src={image} className="imgeffect" />
            <Text fontFamily="quicksand" marginTop={'10px'} color={color}>
                <b>{heading}</b> <br />{content}
            </Text>
        </Box>
    </div>
  );
};
