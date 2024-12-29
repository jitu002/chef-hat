import { Text,Card,CardBody,Stack,Heading,Divider,Tabs, TabList, TabPanels, Tab, TabPanel,Avatar,SimpleGrid } from "@chakra-ui/react";
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import ajit from "../Resources/developers/ajit.jpg"
import mki from "../Resources/developers/mki.jpg"
import raj from "../Resources/developers/raj.jpg"
import prayas from "../Resources/developers/prayas.jpg"
import shreya from "../Resources/developers/shreya.jpg"
import subashis from "../Resources/developers/subashis.jpg"
import soumya from "../Resources/developers/soumya.jpg"


export const Footer = () => {

    const footer=
    [
      {
        "image":ajit,
        "name":"Ajit Kumar Mishra",
        "desgination":"Lead Programmer",
        "description":"CS grad with a knack for programming and deeply invested in cybersecurity,Machine Learning among others.",
      },
      {
        "image":mki,
        "name":"Basudha Ojha",
        "desgination":"Programmer",
        "description":"Electronics grad with a knack for electrfying things along with being a avid dancer.",
      },
      {
        "image":raj,
        "name":"Dibyaraj Sendh",
        "desgination":"Programmer",
        "description":"Electrical grad with a knack for making new things along with being a part time prankster",
      },
      {
        "image":prayas,
        "name":"Prayas Ashirwad Nanda",
        "desgination":"Programmmer",
        "description":"Electronics grad with a knack for programming and deeply invested in trying out new technologies among others.",
      },
      {
        "image":shreya,
        "name":"Shreya",
        "desgination":"Programmer",
        "description":"Eletronics grad with a knack for experimenting along with a mission of living life to the fullest .",
      },
      {
        "image":subashis,
        "name":"Subashis Samantaray",
        "desgination":"Programmer",
        "description":"CS grad with a knack for programming and deeply invested in solving even the minutest problems.",
      },
      {
        "image":soumya,
        "name":"Soumyajeet Parida",
        "designation":"Programmer",
        "description":"Electrical grad with a knack for making new things along with being a part time prankster."
      }
    ]



    return (
      <footer className="footerdsgn">
        <Tabs isFitted variant='enclosed'>
          <TabList mb='1em'>
            <Tab>Developer's</Tab>
            <Tab>Contact us</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className="panel">
            <SimpleGrid columns={[1, null, 3]} spacing='40px' >
              {
                footer.map(el=>(
                  <Card fontFamily="dosis" maxW='lg' marginBottom={"10%"}>
                    <CardBody>
                    <Avatar size={{lg:'2xl',base:"1xl"}} name={el.name} src={el.image} className="imgeffect" />
                      <Stack mt='6' spacing='3'>
                        <Heading fontFamily="dosis" size='md'>{el.name} <br />{el.desgination}</Heading>
                        <Text fontSize={{lg:"xl",md:"lg",base:"md"}}>
                          {el.description}
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                  </Card>
                ))
              }
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              Customer care: <br /> Phone:(011)896-9696 <br /> Email:contact@blueapron.com
              <br /><FontAwesomeIcon icon={faCopyright} />CodeHub,2023
            </TabPanel>
          </TabPanels>
        </Tabs>
      </footer>
    );
  };
  
