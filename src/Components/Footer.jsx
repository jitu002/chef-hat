import { Stack,SimpleGrid,Text } from "@chakra-ui/react";
import "./styles.css"


export const Footer = () => {

    const footer=
    [
      {
        "heading":"col1",
        "list":["On the Menu","Pricing","Our Vision","Market","Gift Cards","Blog","Cookbook"]
      },
      {
        "heading":"col2",
        "list":["Suppliers","Affiliates","Supply Chains Act","Food safety","Career","Press","Our Team"]
      },
      {
        "heading":"col3",
        "list":["Military & Veterans","Students","Graduates","Teachers","Seniors(+55)","Medical stuff","First responders"]
      },
      {
        "heading":"col4",
        "list":["Customer support","Help center & FAQ","contact@bchefhat.com"]
      }
    ]



    return (
      <footer className="footerdsgn">
        <SimpleGrid columns={[1, null, 5]} spacing='5px' textAlign="center" padding="5%" >
              {
                footer.map(el=>(
                  <Stack direction="column" spacing="14px">
                    {el.list.map(item=>
                      <Text fontSize="14px" fontFamily="quicksand" textAlign="left" >{item}</Text>
                    )}
                  </Stack>  
                ))
              }
              <Text fontSize="14px" fontFamily="quicksand" textAlign="left">© Chef Hat<br />Ajit Kumar Mishra,2025</Text>
          </SimpleGrid>
      </footer>
    );
  };
  
