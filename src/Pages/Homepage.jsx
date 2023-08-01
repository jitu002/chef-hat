import { Text,Card,CardBody,Image,Stack,Heading,SimpleGrid,Center, Avatar } from '@chakra-ui/react'
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
          <Text  fontSize="7xl">
            The meal kit that
          </Text>
          <Text  fontSize="6xl">
            put's quality first
          </Text>
          <button className="planbtn" onClick={()=>
          {
            window.location='http://localhost:3001/Plans'
          }}>See Plans</button>
        </div>
      </div>
      <div className="advfeature">
        <Text  fontSize="5xl" color="Blue">
          465+ million meal's shipped
        </Text>
        <Text  fontSize="3xl">
          See why home cooks stick with the <br /> original American meal kit.
        </Text>
      </div>
      <div className="features">
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
      </div>
      <div className="adv">
      <Text  fontSize="2xl">
        Get started for as little as <b>$7.99 per serving</b>
      </Text>
      <button className="planbtn1" onClick={()=>
          {
            window.location='http://localhost:3001/Plans'
          }}>See Plans</button>
      </div>
      <div className="menu">
        <Text fontSize="5xl" color="cyan">
          70+ weekly options
        </Text>
        <div>
          <SimpleGrid columns={[2, null, 5]}  spacingY='300px' spacingX='40px'>
            {fData.map((el) => {
              return <HomeOptions {...el} />;
            })}
          </SimpleGrid>
        </div>
        <button className="planbtn2" onClick={()=>
          {
            window.location='http://localhost:3001/FoodMenu'
          }}>BROWSE OUR MENUS</button>
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
            <Card maxW={{lg:'lg',md:'md',base:'sm'}} marginRight={{md:'200px'}} margin className="revcard" bg={'white'}>
              <CardBody>
                <Stack mt='9' spacing='6' className='banner'>
                  <Heading size='md'>Celebrating 10 years of happy customers</Heading>
                  <Text>
                  Before Blue Apron, I tried HelloFresh. <br /> Blue Apron beats them on all counts— <br /> directions, freshness, packing, and prep. <br />-Ajit
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center>
            <Card  maxW='lg' className="revcard" bg={'white'}>
              <CardBody>
                <Stack mt='9' spacing='6' className='banner'>
                  <Heading size='md'>Celebrating 10 years of happy customers</Heading>
                  <Text>
                  We changed from HelloFresh to Blue Apron and <br /> it was the best choice we made! <br />-Prayas
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center>
            <Card  maxW="lg" className="revcard" bg={'white'}>
              <CardBody>
                <Stack mt='9' spacing='6' className='banner'>
                  <Heading size='md'>Celebrating 10 years of happy customers</Heading>
                    <Text>
                      We love Blue Apron! <br /> It eliminates a ton of food waste while allowing us to try new things and have tasty meals. <br /> Really great quality food, awesome flavors, and <br /> things we wouldn't otherwise have any idea how to create. <br />-Shreya
                    </Text>
                </Stack>
              </CardBody>
            </Card>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center>
            <Card  maxW="lg" className="revcard" bg={'white'}>
              <CardBody>
                <Stack mt='9' spacing='6' className='banner'>
                  <Heading size='md'>Celebrating 10 years of happy customers</Heading>
                    <Text>
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
          <Text  fontSize="4xl">
            We're proud to be a
          </Text>
          <Text className="banner"  fontSize="4xl">
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