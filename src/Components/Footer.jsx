import { Text,Card,CardBody,Stack,Heading,Divider,Tabs, TabList, TabPanels, Tab, TabPanel,Avatar } from "@chakra-ui/react";
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import ajit from "../Resources/developers/ajit.jpg"
import mki from "../Resources/developers/mki.jpg"
import raj from "../Resources/developers/raj.jpg"
import prayas from "../Resources/developers/prayas.jpg"
import shreya from "../Resources/developers/shreya.jpg"
import subashis from "../Resources/developers/subashis.jpg"


export const Footer = () => {
    return (
      <footer className="footerdsgn">
        <Tabs isFitted variant='enclosed'>
          <TabList mb='1em'>
            <Tab>Developer's</Tab>
            <Tab>Contact us</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className="panel">
              <Card maxW='sm' marginBottom={"20%"}>
                <CardBody>
                <Avatar size={{lg:'2xl',base:"1xl"}} name='Ajit Kumar Mishra' src={ajit} className="imgeffect" />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Ajit Kumar Mishra <br />Lead Developer</Heading>
                    <Text>
                      CS grad with a knack for programming and<br /> deeply invested in cybersecurity,Machine Learning among others.
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
              <Card maxW='sm' marginBottom={"20%"}>
                <CardBody>
                <Avatar size={{lg:'2xl',base:"1xl"}} name='Dibyaraj Sendh' className="imgeffect" src={raj} />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Dibyaraj Sendh <br />Programmer</Heading>
                    <Text>
                      Electrical grad with a knack for making new things along with<br />being a part time prankster 
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
              <Card maxW='sm' marginBottom={"20%"}>
                <CardBody>
                <Avatar size={{lg:'2xl',base:"1xl"}} name='Basudha Ojha' className="imgeffect" src={mki} />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Basudha Ojha <br />Programmer</Heading>
                    <Text>
                      Electronics grad with a knack for electrfying things along with being<br />a avid dancer.
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
              <Card maxW='sm' marginBottom={"20%"}>
                <CardBody>
                <Avatar size={{lg:'2xl',base:"1xl"}} name='Prayas Ashirwad Nanda' className="imgeffect" src={prayas} />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Prayas Ashirwad Nanda <br />Programmer</Heading>
                    <Text>
                      Electronics grad with a knack for programming and<br /> deeply invested in trying out new technologies among others.
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
              <Card maxW='sm' marginBottom={"20%"}>
                <CardBody>
                <Avatar size={{lg:'2xl',base:"1xl"}} name='Shreya' className="imgeffect" src={shreya} />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Shreya <br />Programmer</Heading>
                    <Text>
                      Eletronics grad with a knack for experimenting along with<br /> a mission of living life to the fullest .
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
              <Card maxW='sm' marginBottom={"20%"}>
                <CardBody>
                <Avatar size={{lg:'2xl',base:"1xl"}} name='Subashis Samantaray' className="imgeffect" src={subashis} />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Subashis Samantaray <br />Programmer</Heading>
                    <Text>
                      CS grad with a knack for programming and<br /> deeply invested in solving even the minutest problems.
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
              <Card maxW='sm' marginBottom={"20%"}>
                <CardBody>
                <Avatar size={{lg:'2xl',base:"1xl"}} name='Ronit' className="imgeffect" src="data:image/jpeg;base64,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" />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Ronit <br />Programmer</Heading>
                    <Text>
                      CS grad with a knack for programming.<br />
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
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
  
