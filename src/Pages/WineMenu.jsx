import { Text,Tab,TabIndicator,TabPanels,TabPanel,Tabs,TabList,useColorMode,useColorModeValue,Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { WineCard } from "../Components/WineCard";
import "./styles.css";



export const WineMenu = () => {


  const navigate=useNavigate();

  const color = useColorModeValue('blue.900', 'white')



  const api =
    "https://chef-hat.onrender.com/wine";

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
    <div className="menubody">
      <div className="head">
        <Text fontFamily="cinzel"  fontSize={{lg:"7xl",md:"5xl",base:"2xl"}} color={color} className="banner1">
          Quench your thirst
        </Text>
        <Text fontFamily="cinzel"  fontSize={{lg:"4xl",md:"2xl",base:"lg"}} color={color} className="banner1" marginTop={"20px"}>
          Summer wine bundles
        </Text>
      </div>
      <div>
      <Tabs isFitted position="relative" variant="unstyled">
        <TabList className="filter">
          <Tab fontFamily="poetsen one" className="option" fontSize={{lg:"3xl",md:"xl",base:"14px"}}>All</Tab>
          <Tab fontFamily="poetsen one" className="option" fontSize={{lg:"3xl",md:"xl",base:"14px"}}>₹20-₹60</Tab>
          <Tab fontFamily="poetsen one" className="option" fontSize={{lg:"3xl",md:"xl",base:"14px"}}>₹60-₹100</Tab>
          <Tab fontFamily="poetsen one" className="option" fontSize={{lg:"3xl",md:"xl",base:"14px"}}>More than ₹100</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.900"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <div style={{ display: "flex", flexWrap: "wrap",marginLeft:"10%" }}>
          {fData.map((el) => {
            return <WineCard {...el} />;
          })}
            </div> 
          </TabPanel>
          <TabPanel>
            <div style={{ display: "flex", flexWrap: "wrap",marginLeft:"10%" }}>
              {fData.map((el) => {
                if (el.price>=20 && el.price<60){
                  return <WineCard {...el} />;
                }
              })}
            </div> 
          </TabPanel>
          <TabPanel>
            <div style={{ display: "flex", flexWrap: "wrap",marginLeft:"10%" }}>
              {fData.map((el) => {
                if (el.price>=60 && el.price<100){
                  return <WineCard {...el} />;
                }
              })}
            </div>
          </TabPanel>
          <TabPanel>
          <div style={{ display: "flex", flexWrap: "wrap",marginLeft:"10%" }}>
              {fData.map((el) => {
                if (el.price>=100 ){
                  return <WineCard {...el} />;
                }
              })}
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button size="lg" colorScheme="teal" variant="outline" onClick={()=>navigate("/cart")}>
        Checkout
      </Button>
      </div> 
    </div>
  );
};

