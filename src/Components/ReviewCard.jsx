import "./styles.css";
import { Heading,Stack,Card,CardBody } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
export const ReviewCard = ({id,review,name}) => {
  return (
    <div>
        <SwiperSlide>
        <Card maxW='lg' className="revcard" bg={'white'}>
              <CardBody>
                <Stack mt='9' spacing='6' className='banner'>
                  <Heading size='md'>Celebrating 10 years of happy customers</Heading>
                  <p>{review} <br />-{name}</p>
                </Stack>
            </CardBody>
        </Card>
        </SwiperSlide>
    </div>
  );
};
