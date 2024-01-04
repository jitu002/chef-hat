import { Text,Card,CardBody,Image,Stack,Heading,SimpleGrid,Center,Avatar,Button } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation, Mousewheel,Autoplay } from 'swiper/modules';
import { useState } from 'react';
import { useEffect } from 'react';
import { HomeOptions } from '../Components/HomeOptions'
import "./styles.css";

export const Homepage = () => {
  const api ="http://localhost:3000/weekoptions";


  const [fData, setFData] = useState([]);
  
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
          <Text  fontSize={{lg:"7xl",md:"6xl",base:"5xl"}}>
            The meal kit <br /> that
          </Text>
          <Text  fontSize={{lg:"7xl",md:"6xl",base:"5xl"}}>
            put's quality <br /> first
          </Text>
          <button className="planbtn" onClick={()=>
          {
            window.location='http://localhost:3001/Plans'
          }}>See Plans</button>
        </div>
      </div>
      <div className="advfeature">
        <Text  fontSize={{lg:"7xl",md:"6xl",base:"5xl"}} color="Blue">
          465+ million meal's shipped
        </Text>
        <Text  fontSize={{lg:"5xl",md:"3xl",base:"2xl"}}>
          See why home cooks stick with the <br /> original American meal kit.
        </Text>
      </div>
      <SimpleGrid marginLeft="5%"  minChildWidth='200px' spacing='15px'>
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
      <Text  fontSize={{lg:"7xl",md:"5xl",base:"2xl"}}>
        Get started for as little as <b>$7.99 per serving</b>
      </Text>
      <button className="planbtn1" onClick={()=>
          {
            window.location='http://localhost:3001/Plans'
          }}>See Plans</button>
      </div>
      <div className="menu">
        <Text fontSize={{lg:"7xl",md:"6xl",base:"5xl"}} color="cyan">
          70+ weekly options
        </Text>
        <div>
          <SimpleGrid columns={[2, null, 5]}  spacingY='300px' spacingX='40px'>
            {fData.map((el) => {
              return <HomeOptions {...el} />;
            })}
          </SimpleGrid>
        </div>
        <Button variant="outline" _hover={{bg:"#0BC5EA",color:"black"}} borderRadius="40px" padding="50px" marginTop={{lg:"20%",md:"40%",base:"70%"}} marginBottom={{lg:"5%",md:"7%",base:"9%"}} onClick={()=>
          {
            window.location='http://localhost:3001/FoodMenu'
          }}>BROWSE OUR MENUS</Button>
      </div>
      <div className="swiper1">
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
          <SwiperSlide>
            <Center>
            <Card maxW={{lg:'lg',md:'md',base:'sm'}} marginRight={{md:'160px',base:"50px"}} marginLeft={{lg:"200px",md:"160px",base:"50px"}} marginTop={{lg:"100px",md:"50px",base:"30px"}} className="revcard" bg={'white'}>
              <CardBody>
                <Stack mt='6' spacing='3' className='banner'>
                  <Heading size='md'>Celebrating 10 years of happy customers</Heading>
                  <Text fontSize={{lg:"18px",md:"16px",base:"14px"}}>
                  Before Blue Apron, I tried HelloFresh. <br /> Blue Apron beats them on all counts— <br /> directions, freshness, packing, and prep. <br />-Ajit
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center>
            <Card maxW={{lg:'lg',md:'md',base:'sm'}} marginRight={{md:'160px',base:"50px"}} marginLeft={{lg:"200px",md:"160px",base:"50px"}} marginTop={{lg:"100px",md:"50px",base:"30px"}} className="revcard" bg={'white'}>
              <CardBody>
                <Stack mt='9' spacing='6' className='banner'>
                  <Heading size='md'>Celebrating 10 years of happy customers</Heading>
                  <Text fontSize={{lg:"18px",md:"16px",base:"14px"}}>
                  We changed from HelloFresh to Blue Apron and <br /> it was the best choice we made! <br />-Prayas
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center>
            <Card maxW={{lg:'lg',md:'md',base:'sm'}} marginRight={{md:'160px',base:"50px"}} marginLeft={{lg:"200px",md:"160px",base:"50px"}} marginTop={{lg:"100px",md:"50px",base:"30px"}} className="revcard" bg={'white'}>
              <CardBody>
                <Stack mt='9' spacing='6' className='banner'>
                  <Heading size='md'>Celebrating 10 years of happy customers</Heading>
                    <Text fontSize={{lg:"18px",md:"16px",base:"14px"}}>
                      We love Blue Apron! <br /> It eliminates a ton of food waste while allowing us to try new things and have tasty meals.Really great quality food, awesome flavors, and <br /> things we wouldn't otherwise have any idea how to create. <br />-Shreya
                    </Text>
                </Stack>
              </CardBody>
            </Card>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center>
            <Card  maxW={{lg:'lg',md:'md',base:'sm'}} marginRight={{md:'160px',base:"50px"}} marginLeft={{lg:"200px",md:"160px",base:"50px"}} marginTop={{lg:"100px",md:"50px",base:"30px"}} className="revcard" bg={'white'}>
              <CardBody>
                <Stack mt='9' spacing='6' className='banner'>
                  <Heading size='md'>Celebrating 10 years of happy customers</Heading>
                    <Text fontSize={{lg:"18px",md:"16px",base:"14px"}}>
                      We'd tried many other food delivery services <br /> and none of them have compared in quality and variety to Blue Apron. <br />-Basudha
                    </Text>
                </Stack>
              </CardBody>
            </Card>
            </Center>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="carbon">
        <div>
          <Avatar src="https://media.blueapron.com/assets/registration/homepage/hand-icon.svg" alt="hand"  />
          <Text  fontSize={{lg:"7xl",md:"5xl",base:"2xl"}}>
            We're proud to be a
          </Text>
          <Text className="banner"  fontSize={{lg:"7xl",md:"5xl",base:"2xl"}}>
            CARBON NEUTRAL COMPANY
          </Text>
        </div>
      </div>
      <div className="getstarted">
        <Card maxW="md" className="startcard" bg={'white'}>
          <CardBody>
            <Stack mt='9' spacing='6'>
              <Heading size='lg' className='banner'>Get  started now</Heading>
                <Text className='banner'>
                  for as little as <b>$7.99 per serving</b>
                </Text>
            </Stack>
          </CardBody>
          <button className="planbtn3" onClick={()=>
          {
            window.location='http://localhost:3001/Plans'
          }}>See plans</button>
        </Card>
      </div>
    </div>
  );
};