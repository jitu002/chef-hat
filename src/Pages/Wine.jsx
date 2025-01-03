import { Text,Card,CardBody,
    Stack,Heading,Container,Box,SimpleGrid,
    Center,Avatar,Image,Grid,
    ListItem,
    UnorderedList, 
} from '@chakra-ui/react'       
import "./winestyles.css";

import "./winestyles.css"
import incredible from "../Resources/wine/incredible.jpg"
import monthly from '../Resources/wine/monthly.png';
import sized from "../Resources/wine/sized.png";
import vineyard from "../Resources/wine/vineyard.png"; 
import beef from "../Resources/wine/beef.png";    
import chop from "../Resources/wine/chop.png";
import potato from "../Resources/wine/potato.png";
import sauce from "../Resources/wine/sauce.png";
import bottle1 from "../Resources/wine/bottle1.png"
import { useNavigate } from 'react-router-dom';

export const Wine=()=>{
    const navigate=useNavigate();
    return(
        <div>
            <div className="body1">
                <div className="welcome1">
                    <Text color="#1A365D" fontFamily="dancing script"  fontSize={{lg:"8xl",md:"4xl",base:"3xl"}}>
                        Discover <br /> dinner time pairings 
                    </Text>
                    <Text fontFamily="cinzel" color="#0BC5EA"  fontSize={{lg:"xl",md:"lg",base:"md"}}>
                        (and get all juicy details)
                    </Text>
                    <button className="planbtn" onClick={()=>
                    {
                        navigate('/WineMenu');
                    }}>Get Started</button>
                </div>
            </div>
            <Center>
                <Box width="100%">
                    <Text fontFamily="poetsen one" fontSize={{lg:"4xl",md:"2xl",base:"lg"}} marginBottom="5%">How It Works</Text>
                    <SimpleGrid columns={[1, null, 3]} spacing='40px' marginBottom="5%">
                        <Container fontFamily="poetsen one" fontSize={{lg:"2xl",md:"xl",base:"lg"}}><Avatar src={incredible} size="2xl" /><br />Get exclusive access <br /> to delicious wines from renowned wine-makers</Container>
                        <Container fontFamily="poetsen one" fontSize={{lg:"2xl",md:"xl",base:"lg"}}><Avatar src={monthly} size="2xl" /><br />Select the wines you love. <br />No commitment.Skipping or cancelling is easy</Container>
                        <Container fontFamily="poetsen one" fontSize={{lg:"2xl",md:"xl",base:"lg"}}><Avatar src={sized} size="2xl" /><br />Enjoy paired size wines(500ml), <br />perfect for two to share, or upgrade to standard-sized bottles(750ml)</Container>
                    </SimpleGrid>
                </Box>
            </Center>
            <div className='delivery'>
                <Center>
                    <Card fontFamily="poetsen one" maxW={{lg:'lg',md:'md',base:'sm'}} marginLeft={{base:"20%"}} marginRight={{md:"15%"}} bg={'white'}>
                    <CardBody>
                        <Stack mt='6' spacing='3'>
                        <Heading size={{lg:"lg",md:"md",base:"sm"}} color="#1A365D">Inside your monthly delivery </Heading>
                            <UnorderedList color="black">
                                <ListItem>6 x 500ml wine or upgrade to standard size 750 ml wines</ListItem>
                                <ListItem>Select all red , whites or mix your favorites</ListItem>
                                <ListItem>We'll include, tasting notes,pairing tips plus stories behind the wines</ListItem>
                            </UnorderedList>
                        </Stack>
                    </CardBody>
                    <button className="planbtn3" onClick={()=>
                    {
                        navigate('/WineMenu');
                    }}>Get Started</button>
                    </Card>
                </Center>
            </div>
            <div>
                <Text textDecoration="underline" fontFamily="poetsen one" fontSize={{lg:"4xl",md:"2xl",base:"lg"}} marginTop="5%" marginBottom="1%">From Our Vineyard to Your Doorsteps </Text>
                <Text fontFamily="poetsen one" fontSize={{lg:"xl",md:"lg",base:"md"}} marginBottom="1%">By cutting out the middlemen, we are able to offer you high quality wines at great prices</Text>
                <Center>
                <Image src={vineyard} width={{lg:"60%",md:"80%",base:"100%"}} height={{lg:"300px",md:"225px",base:"150px"}} alt='Vinaeyard process image' />
                </Center>
            </div>
            <div className='favorite'>  
                    <Text fontFamily="dancing script" color="white" fontSize={{lg:"4xl",md:"3xl",base:"2xl"}} marginBottom="2%">Discover your favorites</Text>
                    <Container fontFamily="dancing script" color="white" fontSize={{lg:"2xl",md:"xl",base:"lg"}}>Don't know your Pinot Noir from your Pinotage.Our wines come with tasting notes,flavor profiles, and the story behind the bottle to give you the confidence to select the right wine for any occasion and inspire a lifelong love of wine</Container>
            </div>
            <div>
                <Heading fontFamily="poetsen one" fontSize={{lg:"5xl",md:"3xl",base:"xl"}} marginTop="7%">Our Chef Hat wines are specially curated to compliment your Chef Hat delicacies.</Heading>
                <SimpleGrid marginTop="2%" columns={[1,null,3]} spacingX='30px' spacingY='20px'>
                    <Grid templateColumns='repeat(1, 1fr)'>
                        <Box>
                            <Image src={beef} />
                            <Text fontFamily="poetsen one" fontSize={{lg:"5xl",md:"3xl",base:"xl"}}>Calabrian Beef & Gnocchi</Text>
                            <Container fontFamily="poetsen one" fontSize={{lg:"xl",md:"lg",base:"md"}} >
                                Complete the richness of this hearty beef gnocchi dish  with a warming,spicy Chianti drink.
                            </Container>
                        </Box>
                        <Box>
                            <Image src={sauce} />
                            <Text fontFamily="poetsen one" fontSize={{lg:"5xl",md:"3xl",base:"xl"}}>Sheet Pan Pork & Sour Cherry Sauce</Text>
                            <Container fontFamily="poetsen one" fontSize={{lg:"xl",md:"lg",base:"md"}} >
                            For this dish, we're coating pork in a bit of tangy sour cherry spread and roasting until delightfully browned and tender, then mixing the rest of the sour cherry with dijonnaise for a vibrant dipper.
                            </Container>
                        </Box>
                    </Grid>
                    <Center><Image src={bottle1} /></Center>
                    <Grid templateColumns='repeat(1, 1fr)'>
                    <Box>
                            <Image src={potato} />
                            <Text fontFamily="poetsen one" fontSize={{lg:"5xl",md:"3xl",base:"xl"}}>Pork Chorizo, Potato & Fig Bake</Text>
                            <Container fontFamily="poetsen one" fontSize={{lg:"xl",md:"lg",base:"md"}} >
                            This hearty bake combines tender potatoes, bell peppers, sweet figs, and rich chorizo, which all comes together under a drizzle of preserved lemon mayo and roasted almonds for satisfying crunch.
                            </Container>
                        </Box> 
                        <Box>
                            <Image src={chop} />
                            <Text fontFamily="poetsen one" fontSize={{lg:"5xl",md:"3xl",base:"xl"}}>Hoisin-Glazed Pork Chops   </Text>
                            <Container fontFamily="poetsen one" fontSize={{lg:"xl",md:"lg",base:"md"}} >
                            This dish get a lift from a pan sauce made with savory-sweet hoisin sauce and citrusy ponzu––a beloved Japanese condiment. For more dynamic flavor, we're serving the pork with a side of rice cooked with a classic trio of aromatics: garlic, ginger, and scallions.
                            </Container>
                        </Box>
                    </Grid>
                </SimpleGrid>
            </div>
            <div className="glass">
                <Text color="white"fontFamily="poetsen one" fontSize={{lg:"5xl",md:"3xl",base:"xl"}}>Let's Raise a Glass</Text>
                <button className="planbtn4" onClick={()=>
                    {
                        navigate('/WineMenu');
                    }}>Get Started</button>
            </div>       
        </div>
    )
}   