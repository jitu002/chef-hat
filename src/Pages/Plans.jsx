import { Text,SimpleGrid,Divider,Center,Box,Checkbox,Tabs,
    TabList,Tab,TabPanels,TabPanel,Container,Accordion,
    AccordionItem,AccordionButton,AccordionPanel,useColorMode,useColorModeValue
} from "@chakra-ui/react"
import { useState,useEffect } from "react";
import { AddIcon,MinusIcon } from "@chakra-ui/icons"
export const Plans=()=>{

    const api ="http://localhost:3000/accordions";

    const [fData, setFData] = useState([]);


    const fetchData = async () => {
        let res = await fetch(api);
        let data1 = await res.json();
        setFData(data1);
      };
    
      useEffect(() => {
        fetchData();
      }, []);

    let price2=4.62
    let price1=1.50
    const { toggleColorMode } = useColorMode()

    const color = useColorModeValue('blue.900', 'white')

    return(
        <div>
            <div className="planshead">
                <Text fontSize="4xl" color={color}>Personalize your meal kit</Text>
                <Text fontSize="2xl" color={color}>Get excited -your choice of 70+ weekly meals is just a few steps away!
                </Text>
            </div>
            <Center>
            <Box className="plancard" paddingLeft={{base:'50px',md:'200px',lg:"350px"}} paddingRight={{base:'50px',md:'200',lg:"250px"}}>
                <div className="prefleft">
                    <Text fontSize="3xl" paddingRight="50px" marginBottom={"20%"}>1.Tell us your preferences</Text>
                    <Checkbox> <span className="option">Chef Favorites</span></Checkbox>
                    <Checkbox><span className="option">Wellness</span> </Checkbox>
                    <Checkbox><span className="option">Family Friendly</span></Checkbox>
                    <Checkbox><span className="option">Fast & Easy</span></Checkbox>
                    <Checkbox><span className="option">Veggies</span></Checkbox>               
                </div>
                <Center height='450px'>
                    <Divider orientation='vertical' />
                </Center>
                <div className="prefright">
                    <Text fontSize="3xl" paddingLeft="50px" paddingRight={"20px"} marginBottom={"20%"}>Select your plan</Text>
                    <div className="serving">
                        <Text className="serve" marginTop={"5px"} marginLeft={"20px"} marginRight={"40px"}>Number of servings:</Text>
                        <Tabs variant='unstyled'>
                            <TabList>
                                <Tab _selected={{ color: 'white', bg: 'blue.900' }}>2</Tab>
                                <Tab _selected={{ color: 'white', bg: 'blue.900' }}>4</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Box className="summary" maxW={"lg"} paddingLeft={"10px"}>
                                        <Text fontSize="4xl" color={"white"} marginLeft={"20px"} marginRight={"20px"}><b>Order Summary</b></Text>
                                        <Text color={"white"} fontSize={"2xl"} marginLeft={"10px"}>Price per serving: <span className="info">${price1}</span></Text>
                                        <Text color={"white"} fontSize={"2xl"}>Shipping: <span className="info">FREE</span></Text>
                                        <Text color={"white"} fontSize={"2xl"}>Total suborder:<span className="info">${2*price1}</span></Text>
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box className="summary">
                                        <Text fontSize="4xl" color={"white"} marginLeft={"20px"} marginRight={"20px"}><b>Order Summary</b></Text>
                                        <Text color={"white"} fontSize={"2xl"} marginLeft={"10px"}>Price per serving: <span className="info">${price2}</span></Text>
                                        <Text color={"white"} fontSize={"2xl"}>Shipping: <span className="info">FREE</span></Text>
                                        <Text color={"white"} fontSize={"2xl"}>Total suborder:<span className="info">${4*price2}</span></Text>
                                    </Box>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>
                </div>
            </Box>
            </Center>
            <div className="choose">
                <Text fontSize={"4xl"}>WHY CHOOSE A <br />Blue Apron Meal Kit?</Text>
                <SimpleGrid columns={[2, null, 3]} spacingX='40px' spacingY='20px'>
                    <Box height='80px' marginTop={"20%"} marginBottom={"10%"}>
                        <Container>
                            <b> Well-balanced meals</b> <br />Choose from an ever-changing mix of menu options featuring meat, poultry, fish, seafood and more.
                        </Container>
                    </Box>
                    <Box height='80px' marginTop={"20%"} marginBottom={"10%"}>
                        <Container>
                            <b>Chef-approved recipes</b> <br />Choose from an ever-changing mix of menu options featuring meat, poultry, fish, seafood and more.
                        </Container>
                    </Box>
                    <Box height='80px' marginTop={"20%"} marginBottom={"10%"}>
                        <Container>
                            <b>Your plan, your way</b> <br />Cooking with us is always on your terms. Adjust your servings and delivery day based on that week’s needs. Need to skip a week or cancel? No problem. As long as your order hasn’t been processed, you won’t be charged.
                        </Container>
                    </Box>
                    <Box height='80px' marginTop={"20%"} marginBottom={"10%"}>
                        <Container>
                            <b> Tell us what you think </b> <br />Our culinary team reads every review and creates recipes based on your ratings. Tell us what you like and what you don’t on the app. (Don’t worry, our chefs can take the heat!)
                        </Container>
                    </Box>
                    <Box height='80px' marginTop={"20%"} marginBottom={"10%"}>
                        <Container>
                            <b>A more sustainable way to cook</b> <br />When you cook with Blue Apron, you’re doing more than making delicious meals. Our meal kits include perfectly portioned ingredients to cut down on food waste in your home.
                        </Container>
                    </Box>
                    <Box height='80px' marginTop={"20%"} marginBottom={"10%"}>
                        <Container>
                            <b>We’re sticklers for quality</b> <br />Our team of experts aim to source from suppliers that meet our standards for sustainable farming practices, high-quality produce, and unique ingredients.
                        </Container>
                    </Box>
                </SimpleGrid>
            </div>
            <Center>
                <Text className="question" fontSize={"5xl"} color={color}>Frequently Asked Questions</Text>
            </Center>
            <div className="question">
            {fData.map((el) => {
              return (
                <Accordion allowMultiple>
                    <AccordionItem color={color}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton color={color}>
                            
                            <Box as="span" flex='1' textAlign='left'>
                                <span className="question" color="color">{el.question}</span>
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} color={color}>
                            <p>{el.answer}</p>.
                        </AccordionPanel>
                    </>
                   )}
                </AccordionItem>
                </Accordion>

              );
            })}
            </div>
        </div>
    )
}