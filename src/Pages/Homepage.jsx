import { Text,Card,CardBody,Image,Stack,Heading,SimpleGrid,Center,Avatar,Button ,useColorModeValue, Box} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation, Mousewheel,Autoplay } from 'swiper/modules';
import { useState } from 'react';
import { useEffect } from 'react';
import { HomeOptions } from '../Components/HomeOptions'
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import cookingpot from "../Resources/cooking-pot.webp"
import { TestimonialCard } from '../Components/TestimonialCard';


export const Homepage = () => {
  const api ="https://chef-hat.onrender.com/weekOptions";

  const color = useColorModeValue('blue.900', 'white')

  const navigate=useNavigate();
  const [fData, setFData] = useState([]);

  const testimonials = [
    {
      text: "Before Chef Hat, I tried HelloFresh. Chef Hat beats them on all counts— directions, freshness, packing, and prep.",
      author: "Ajit"
    },
    {
      text: "We changed from Hello Fresh to Chef Hat and it was the best choice we made!",
      author: "Prayas"
    },
    {
      text: "We love Chef Hat! It eliminates a ton of food waste while allowing us to try new things and have tasty meals. Really great quality food, awesome flavors, and things we wouldn't otherwise have any idea how to create.",
      author: "Shreya"
    },
    {
      text: "We'd tried many other food delivery services and none of them have compared in quality and variety to Chef Hat.",
      author: "Basudha"
    }
  ];
  
  const fetchData = async () => {
    let res = await fetch(api);
    let data1 = await res.json();
    setFData(data1);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (

    <div>
      <div className="body">
        <div className="welcome">
          <Text fontFamily="poetsen one"  fontSize={{lg:"7xl",md:"6xl",base:"5xl"}}>
            The meal kit <br /> that
          </Text>
          <Text fontFamily="dancing script"  fontSize={{lg:"7xl",md:"6xl",base:"5xl"}}>
            put's quality <br /> first
          </Text>
          <button className="planbtn" onClick={()=>
          {
            navigate("/Plans")
          }}>See Plans</button>
        </div>
      </div>
      <div className="advfeature">
        <Text fontFamily="poetsen one"  fontSize={{lg:"7xl",md:"6xl",base:"2xl"}} color="Blue">
          465+ million meal's shipped
        </Text>
        <Text fontFamily="poetsen one"  fontSize={{lg:"5xl",md:"3xl",base:"2xl"}}>
          See why home cooks stick with the <br /> original American meal kit.
        </Text>
      </div>
      <SimpleGrid fontFamily="poetsen one" px="5%" minChildWidth='200px' spacing='15px'>
      <Card maxW='sm' >
          <CardBody>
            <Image
              src='https://media.blueapron.com/assets/registration/homepage/chef-experience.webp?height=374&quality=90'
              alt='Chef experinece'
              borderRadius='lg'
            />
            <Stack mt='3' spacing='1'>
              <Heading size='md'>5 decades of top restaurant experience</Heading>
              <Text>
              Our chefs bring high standards to <br /> crafting your meals.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://media.blueapron.com/assets/registration/homepage/fresh-ingredients.webp?height=374&quality=9'
              alt='Chef experinece'
              borderRadius='lg'
            />
            <Stack mt='3' spacing='1'>
              <Heading size='md'>Fresher ingredients faster</Heading>
              <Text>
              80% of ingredients come <br /> directly from producers.
              </Text>
            </Stack>
          </CardBody> 
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://media.blueapron.com/assets/registration/homepage/flexible-mobile.webp?height=374&quality=90'
              alt='Chef experinece'
              borderRadius='lg'
            />
            <Stack mt='3' spacing='1'>
              <Heading size='md'>You're busy, so we're flexible</Heading>
              <Text>
              Get boxes on your schedule. <br /> Skip,pause, or cancel anytime.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
      
      <div className="adv">
      <Text fontFamily="caveat"  fontSize={{lg:"7xl",md:"5xl",base:"2xl"}}>
        Get started for as little as <b>$7.99 per serving</b>
      </Text>
      <button className="planbtn1" onClick={()=>
          {
            navigate("/Plans")
          }}>See Plans</button>
      </div>
      <div className="menu">
        <Text fontFamily="caveat" fontSize={{lg:"7xl",md:"6xl",base:"5xl"}} color="cyan">
          70+ weekly options
        </Text>
        <div>
          <SimpleGrid columns={[2, null, 5]}  spacingY={{lg:'300px',md:'200px',base:'220px'}} spacingX='40px'>
            {fData && fData.length>0?(fData.map((el) => {
              return <HomeOptions {...el} />;
            })):(
              <Center>
                <Text padding="20%" fontSize={{lg:"5xl",md:"3xl",base:"xl"}} color={color} fontFamily="caveat">Behold your options!!!</Text>
              </Center>
            )}
          </SimpleGrid>
        </div>
        <Button  variant="outline" _hover={{bg:"#0BC5EA",color:"black",transition:"0.3s ease-in-out"}} fontFamily="poetsen one" borderRadius="40px" padding="50px" marginTop={{lg:"20%",md:"40%",base:"70%"}} marginBottom={{lg:"5%",md:"7%",base:"9%"}} onClick={()=>
          {
            navigate("/FoodMenu")
          }}>BROWSE OUR MENUS</Button>
      </div>
      <Box bgImage={cookingpot} width="100%" height={{lg:"90vh",md:"80vh",base:"100vh"}} backgroundSize="cover">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          direction={'horizontal'}
          loop={"true"}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay,Keyboard, Pagination, Navigation, Mousewheel]}
          mousewheel={true}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard 
                text={testimonial.text}
                author={testimonial.author}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      
      <Center my="5%" >
      <Box display="flex" flexDirection="column" bgSize="cover" borderRadius="35px" alignItems="center" width={{lg:"60%",md:"70%",base:"90%"}} height={{lg:"60vh"}} py="6%"  bgImage="https://media.blueapron.com/assets/registration/homepage/green-field.png?height=400&quality=90)" >
          <Avatar src="https://media.blueapron.com/assets/registration/homepage/hand-icon.svg" alt="hand"  />
          <Text fontFamily="cinzel" color="#1A365D"  fontSize={{lg:"5xl",md:"3xl",base:"xl"}}>
            We're proud to be a
          </Text>
          <Text fontFamily="cinzel" color="#1A365D"  fontSize={{lg:"3xl",md:"2xl",base:"lg"}}>
            CARBON NEUTRAL COMPANY
          </Text>
      </Box>
      </Center>
      
      <Center>
        <Box borderRadius="35px" alignContent="center" width={{lg:"60%",md:"70%",base:"90%"}} height={{lg:"60vh"}} backgroundSize="cover"  bgImage="https://media.blueapron.com/assets/registration/homepage/gnocchi-ingredients.webp?height=400&quality=90">
          <Center>
          <Card maxW={{lg:'lg',md:'md',base:'60%'}} bg={'white'}>
            <CardBody>
              <Stack mt='6' spacing='3'>
                <Heading fontFamily="quicksand" size={{lg:"lg",md:"md",base:"sm"}} color="#1A365D">Get  started now</Heading>
                  <Text fontFamily="quicksand" fontSize={{lg:"2xl",md:"lg",base:"md"}} color="#1A365D">
                    for as little as <b>$7.99 per serving</b>
                  </Text>
              </Stack>
            </CardBody>
            <button className="planbtn3" onClick={()=>
            {
              navigate("/Plans")
            }}>See plans</button>
          </Card>
          </Center>
        </Box>
      </Center>
      
    </div>
  );
};