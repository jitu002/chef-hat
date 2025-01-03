import { Text,SimpleGrid,Center,Box,Avatar,
    Container,Accordion,Button,AccordionIcon,
    AccordionItem,AccordionButton,AccordionPanel,useColorMode,useColorModeValue
} from "@chakra-ui/react"
import { useState,useEffect } from "react";
import { AddIcon,MinusIcon } from "@chakra-ui/icons"
import "./styles.css"
import hat from "../Resources/icons/chef.png"
import wellness from "../Resources/icons/vegan.png"
import family from "../Resources/icons/family.png"
import watch from "../Resources/icons/stopwatch.png"
import veggies from "../Resources/icons/vegetables.png"
import chefhat from "../Resources/chef-hat.png"
import sustainable from "../Resources/icons/planet-earth.png"
import calender from "../Resources/icons/calendar.png"
import safety from "../Resources/icons/food-safety.png"
import { useNavigate } from "react-router-dom";


export const Plans=()=>{

    const api ="https://chef-hat.onrender.com/accordions";
    const navigate=useNavigate();

    const chkbox=[
        {
            "icon":hat,
            "name":"Chef Favorites"
        },
        {
            "icon":wellness,
            "name":"Wellness"
        },
        {
            "icon":family,
            "name":"Family Friendly"
        },
        {
            "icon":watch,
            "name":"Fast & Easy"
        },
        {
            "icon":veggies,
            "name":"Veggies"
        }
    ]




    const [fData, setFData] = useState([]);


    const fetchData = async () => {
        try {
            let res = await fetch(api);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            let data1 = await res.json();
            console.log('Fetched Data:', data1); // Debugging
            setFData(data1);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
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
                <Text fontFamily="cinzel" fontSize={{lg:"4xl",md:"2xl",base:"lg"}} color={color}> <b>Personalize your meal kit</b></Text>
                <Text fontFamily="quicksand" fontSize={{lg:"2xl",md:"2xl",base:"lg"}} color={color}>Get excited -your choice of 70+ weekly meals is just a few steps away!
                </Text>
            </div>
            <Center>
                <Box borderRadius="5%" width="100%" bg="#1A365D" marginTop="10%">
                    <Text fontFamily="quicksand" color="white" fontSize={{lg:"4xl",md:"2xl",base:"lg"}} marginBottom={{lg:"3%",md:"6%",base:"10%"}} >Choose your meal type</Text>
                    <div className="plansec">
                        <div>
                            <Text fontFamily="quicksand" color="white" fontSize={{lg:"2xl",md:"2xl",base:"lg"}}>Choose Your Preferences</Text>
                            <fieldset class="checkbox-group">
                                {chkbox.map(el=>(
                                    <div class="checkbox">
                                        <label class="checkbox-wrapper">
                                            <input type="checkbox" class="checkbox-input" value={el.name} />
                                            <span class="checkbox-tile">
                                                <span class="checkbox-icon">
                                                    <Avatar size="sm" src={el.icon} />
                                                </span>
                                                <span fontFamily="quicksand" class="checkbox-label">{el.name}</span>
                                            </span>
                                        </label>
                                    </div>    
                                ))}
                            </fieldset>
                        </div>
                        <div>
                            <Avatar size={{lg:"3xl",md:"xl",base:"lg"}} src={chefhat} alt="Chef hat icon"></Avatar> <br />
                            <Text fontSize="xl" fontFamily="quicksand" color="white"><i>EAT LIKE A KING!!!</i></Text>
                        </div>
                    </div>
                </Box>
            </Center>
            <Button variant="outline" _hover={{bg:"#0BC5EA",color:"black",transition:"0.3s ease-in-out"}} fontFamily="poetsen one" borderRadius="40px" padding="50px" marginTop={{lg:"7%",md:"20%",base:"30%"}} marginBottom={{lg:"5%",md:"7%",base:"9%"}} onClick={()=>
                {
                    navigate("/FoodMenu");
                }}>BROWSE OUR MENUS
            </Button>
            <Center>
                <Box width="100%" bg="#4299E1">
                    <Text color="white" fontFamily="cinzel" fontSize={{lg:"4xl",md:"2xl",base:"lg"}} marginBottom="5%">WHY CHOOSE A <br /><Text color="#1A365D">Blue Apron Meal Kit?</Text></Text>
                    <SimpleGrid columns={[1, null, 3]} spacing='40px' marginBottom="5%">
                        <Container color="white" fontFamily="cinzel" fontSize={{lg:"2xl",md:"xl",base:"lg"}}><Avatar src={sustainable} size="lg" /><br />A more sustainable way to cook <br />Perfectly portioned ingredients to cut down on food waste in your home.</Container>
                        <Container color="white" fontFamily="cinzel" fontSize={{lg:"2xl",md:"xl",base:"lg"}}><Avatar src={calender} size="lg" /><br />A more sustainable way to cook <br />Perfectly portioned ingredients to cut down on food waste in your home.</Container>
                        <Container color="white" fontFamily="cinzel" fontSize={{lg:"2xl",md:"xl",base:"lg"}}><Avatar src={safety} size="lg" /><br />A more sustainable way to cook <br />Perfectly portioned ingredients to cut down on food waste in your home.</Container>
                    </SimpleGrid>
                </Box>
            </Center>
            <Center>
                <Box width="100%" marginTop="7%">
                <Text fontFamily="cinzel" fontSize={{lg:"4xl",md:"2xl",base:"lg"}} marginBottom="2%">FREQUENTLY ASKED QUESTIONS</Text>
                {fData.map((el) => {
              return (
                <Accordion alignItem="center" marginLeft="25%" width="50%" allowMultiple>
                    <AccordionItem color={color}>
                        {({ isExpanded }) => (
                        <>
                            <h2>
                            <AccordionButton color={color}>
                                
                                <Box as="span" flex='1' textAlign='center'>
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
                </Box>
            </Center>        
        </div>
    )
}