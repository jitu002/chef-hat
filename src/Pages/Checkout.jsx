import { Text,useColorMode, useColorModeValue } from "@chakra-ui/react";

export const Checkout = () => {
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue('blue.900', 'white');
  return (
    <div>
      <div className="head">
        <Text fontSize="6xl" color={color}>Happy Eating!</Text>
        <Text fontSize="4xl" color={color}>
          Your products will be shipped to your address,please visit again.
        </Text>
      </div>
    </div>
  );
};