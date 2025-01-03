import { Center,Card,CardBody,Stack,Heading,Text } from "@chakra-ui/react";

export const TestimonialCard = ({ text, author }) => (
    <Center>
      <Card 
        maxW={{ lg: 'lg', md: 'md', base: 'sm' }}
        marginRight={{ md: '160px', base: "50px" }}
        marginLeft={{ lg: "200px", md: "160px", base: "50px" }}
        marginTop={{ lg: "100px", md: "50px", base: "30px" }}
        className="revcard"
        bg="white"
      >
        <CardBody>
          <Stack mt='9' spacing='6' color="#1A365D">
            <Heading fontFamily="poetsen one" size='md'>
              Celebrating 10 years of happy customers
            </Heading>
            <Text fontFamily="dancing script" fontSize={{ lg: "20px", md: "18px", base: "16px" }}>
              {text}<br />-{author}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );