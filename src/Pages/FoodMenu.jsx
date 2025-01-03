import { Text,Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator,useColorMode,useColorModeValue,Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuCard } from "../Components/MenuCard";
import "./styles.css";
export const FoodMenu = () => {
  const api ="https://chef-hat.onrender.com/items";

  const navigate=useNavigate();

  const [fData, setFData] = useState([]);
  const { toggleColorMode } = useColorMode()

  const color = useColorModeValue('blue.900', 'white')

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
        <Text fontFamily="cinzel"  fontSize={{lg:"7xl",md:"5xl",base:"2xl"}} className="banner1" color={color}>
          Explore Our Exotic Menu
        </Text>
      </div>
      <div>
      <Tabs isFitted position="relative" variant="unstyled">
        <TabList className="filter">
          <Tab fontFamily="poetsen one" className="option" fontSize={{lg:"3xl",md:"xl",base:"14px"}}>All</Tab>
          <Tab fontFamily="poetsen one" className="option" fontSize={{lg:"3xl",md:"xl",base:"14px"}}>₹400-₹1000</Tab>
          <Tab fontFamily="poetsen one" className="option" fontSize={{lg:"3xl",md:"xl",base:"14px"}}>₹1000-₹4000</Tab>
          <Tab fontFamily="poetsen one" className="option" fontSize={{lg:"3xl",md:"xl",base:"14px"}}>More than ₹4000</Tab>
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
            return <MenuCard {...el} />;
          })}
            </div> 
          </TabPanel>
          <TabPanel>
            <div style={{ display: "flex", flexWrap: "wrap",marginLeft:"10%" }}>
              {fData.map((el) => {
                if (el.price>400 && el.price<1000){
                  return <MenuCard {...el} />;
                }
              })}
            </div> 
          </TabPanel>
          <TabPanel>
            <div style={{ display: "flex", flexWrap: "wrap",marginLeft:"10%" }}>
              {fData.map((el) => {
                if (el.price>1000 && el.price<4000){
                  return <MenuCard {...el} />;
                }
              })}
            </div>
          </TabPanel>
          <TabPanel>
          <div style={{ display: "flex", flexWrap: "wrap",marginLeft:"10%" }}>
              {fData.map((el) => {
                if (el.price>=4000 ){
                  return <MenuCard {...el} />;
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