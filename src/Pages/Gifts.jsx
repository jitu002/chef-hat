import { Text,Center,Box,Avatar } from "@chakra-ui/react"
import chefhat from "../Resources/chef-hat.png"
import "./styles.css"

export const Gifts=()=>{
    return(
        <div>
            <Center>
                <div className="gifthead">
                <Center fontFamily="Audiowide"  h='200px'>
                    <Text color="#1A365D" fontSize={{lg:"5xl",md:"3xl",base:"xl"}}>Meal Kit Delivery Gifts <br /> & Gift Cards</Text>
                </Center>
                </div>
            </Center>
            <div>
                <Box fontFamily="Audiowide" bg={"blue.900"} height={{lg:"45vh",md:"35vh",base:"28vh"}} borderRadius={"lg"} maxW={"lg"} paddingTop="5%" marginTop="5%" marginLeft={{lg:"10%",md:"10%",base:"0"}}>
                    <Text color="white" fontSize={{lg:"3xl",md:"xl",base:"md"}}>$140 <br />MEAL E-GIFT CARD</Text>
                    <Avatar marginLeft="82%" marginTop="10%" src={chefhat}  />
                </Box>
                <div className="terms">
                    <Center><Text textDecoration="underline" fontFamily="Audiowide" fontSize={{lg:"3xl",md:"2xl",base:"xl"}}>Terms</Text></Center>    
                    <ul>
                        <li>1.Recipients can use a Meal E-Gift Card towards any subscription meal plan or Market items</li>
                        <li>2.E-Gift Cards are subject to our Gift Card Terms and are not redeemable towards our Wine Program</li>
                        <li>3.Blue Apron Gift Cards never expire and carry no fees</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}