import { Text,Center,Box,Image } from "@chakra-ui/react"
import chefhat from "../Resources/chef-hat.png"
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Gifts=()=>{
    return(
        <div>
            <Center>
                <div className="gifthead">
                <Center  h='200px'>
                    <b>Meal Kit Delivery Gifts <br /> & Gift Cards</b>
                </Center>
                </div>
            </Center>
            <div>
                <Box bg={"blue.900"} height={"30vh"} borderRadius={"lg"} maxW={"sm"} marginLeft={"10%"} className="giftcard">
                    <Text fontSize={"3xl"}>$140 <br />MEAL E-GIFT CARD</Text>
                    <Image src={chefhat} boxSize={"50px"} marginLeft={"80%"} marginTop={"20%"} />
                </Box>
                <ul className="terms">
                    <li>1.Recipients can use a Meal E-Gift Card towards any subscription meal plan or Market items</li>
                    <li>2.E-Gift Cards are subject to our Gift Card Terms and are not redeemable towards our Wine Program</li>
                    <li>3.Blue Apron Gift Cards never expire and carry no fees</li>
                </ul>  

            </div>
        </div>
    )
}