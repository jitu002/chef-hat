import React,{ useContext,useState } from "react";
import { Link,NavLink } from "react-router-dom";
import {
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  useDisclosure,
  Stack,
  useToast,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  useColorMode,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  useColorModeValue,
  Flex,IconButton,
  HStack,
  Text,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { CloseIcon,HamburgerIcon,MoonIcon,SunIcon,ViewIcon,ViewOffIcon }from '@chakra-ui/icons'
import "./styles.css";
import { loginContext } from "../Context/LoginContext";
import chefhat from "../Resources/chef-hat.png"


export const Navbar=()=>{
  const { colorMode, toggleColorMode } = useColorMode()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const { isOpen:signupIsopen,onOpen:signupOnopen,onClose:signupOnclose } = useDisclosure()

  const { isLogin, handleLogin } = useContext(loginContext);

  const [name,setName]=useState("")
  const [user,setUser]=useState("")
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")

  const toast = useToast()

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(25deg)'
    />
  )

  const { isOpen:modalIsopen, onOpen:modalOnopen, onClose:modalOnclose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  async function SubmitEvent(){
    if(name!=="" || email!=="" || user!=="" ||pass!==""){
      var data={name:name,username:user,email:email,password:pass};
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
          },
      });
      toast({
        title: `Account Created`,
        position: 'top',
        status:'success',
        isClosable: true,
      })
      setName("")
      setEmail("")
      setPass("")
      setUser("")
    }
    else{
      toast({
        title: `No input found`,
        position: 'top',
        status:'warning',
        isClosable: true,
      })
    }
  }

  async function submitlogin(){
      const response = await fetch('http://localhost:3000/users');
      let data1=await response.json()
      if(email==="" || user==="" || pass===""){
        toast({
          title: `Invalid credentials`,
          position: 'top',
          status:'error',
          isClosable: true,
        })
    }
      else{
        let flag=0;
          for(let i=0;i<data1.length;i++)
      {
          if(email===data1[i].email && user===data1[i].username && pass===data1[i].password)
          {
              handleLogin()
              setName(data1[i].name)
              flag=1
          }
      }
      if(flag===0){
        toast({
          title: `Invalid credentials`,
          position: 'top',
          status:'error',
          isClosable: true,
        })
      }
      
      }  
    }
    
  return (
    <div>
      <Box bg={useColorModeValue("gray.100","gray.900")} pl={"13%"} justifyContent={"center"}>
        <Flex>
          <NavLink className="items" to="/">
            <Image src={chefhat} boxSize={{lg:"160px",md:"60px",base:"60px"}}  marginLeft={{base:"5px"}} className="imgeffect" />               
          </NavLink>
          <IconButton
            marginTop="10%"
            marginLeft="50%"
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={4} alignItems={"center"}>
            <HStack
              as={"nav"}
              marginLeft="2%"
              spacing={{lg:"20",md:"19",base:"10"}}
              display={{ base: "none", md: "flex" }}
            > 
              <NavLink className="items" to="/FoodMenu">
                ON THE MENU
              </NavLink>
              <NavLink className="items" to="/Plans">
                PLANS
              </NavLink>
              <NavLink className="items" to="/Wine">
                WINE
              </NavLink>
              <NavLink className="items" to="/cart">
                CHECKOUT
              </NavLink>
              <NavLink className="items" to="/Gifts">
                GIFTS
              </NavLink>
              </HStack>
              {isLogin ? 
              <>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0} 
                >
                  <Avatar src="data:image/jpeg;base64,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"
                        size={"md"}
                        marginTop={"0.5%"}
                />
                <Text>{name}</Text>
                </MenuButton>
                <MenuList>
                  <MenuItem><Link><Button onClick={()=>{window. location. reload()}}>Signout</Button></Link></MenuItem>
                  <MenuItem><Button onClick={() => {
                      setOverlay(<OverlayOne />)
                      modalOnopen()
                    }}>Account Details</Button></MenuItem>
                  <Modal isCentered isOpen={modalIsopen} onClose={modalOnclose}>
                      {overlay}
                    <ModalContent>
                      <ModalHeader>Account details</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Text>Name:{name}</Text>
                        <Text>Username:{user}</Text>
                        <Text>Email:{email}</Text>
                        <Text>Password:{show?pass:"########"}<Button marginLeft={"10px"} onClick={handleClick}>{show?<ViewIcon />:<ViewOffIcon />}</Button></Text>
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={modalOnclose}>Close</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </MenuList>
              </Menu>
            </> :null }

          </HStack>
        </Flex>
        {
          isOpen ? (
            <Box pb={4} display={{md:'flex'}}>
              <Stack> 
                <NavLink className="items" to="/FoodMenu">
                  ON THE MENU
                </NavLink>
                <NavLink className="items" to="/Plans">
                  PLANS
                </NavLink>
                <NavLink className="items" to="/Wine">
                  WINE
                </NavLink>
                <NavLink className="items" to="/cart">
                  CHECKOUT
                </NavLink>
                <NavLink className="items" to="/Gifts">
                  GIFTS
                </NavLink>
                <Button ref={btnRef} colorScheme='orange' onClick={signupOnopen}>
                    SIGNUP
                  </Button>
                  <Drawer
                    isOpen={signupIsopen}
                    placement='right'
                    onClose={signupOnclose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent spacing="3">
                      <DrawerCloseButton />
                      <DrawerHeader>Create your account</DrawerHeader>

                      <DrawerBody>
                        <Stack spacing="3">
                          <Input placeholder='Name...' value={name} onChange={(e)=>{
                            setName(e.target.value)
                          }} />
                          <Input value={user} onChange={(e)=>{
                            setUser(e.target.value)
                          }} placeholder='Username...' />
                          <Input value={email} onChange={(e)=>{
                            setEmail(e.target.value)
                          }} placeholder='Email...' />
                          <InputGroup size='md'>
                            <Input
                              pr='4.5rem'
                              type={show ? 'text' : 'password'}
                              placeholder='Enter password'
                              value={pass} onChange={(e)=>{
                              setPass(e.target.value)
                              }} 
                            />
                            <InputRightElement width='4.5rem'>
                              <Button h='1.75rem' size='sm' marginBottom="5px" onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                        </Stack>
                      </DrawerBody>

                      <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={signupOnclose}>
                          Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={SubmitEvent}>
                          Create Account
                        </Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                  <Popover>
                    <PopoverTrigger>
                      <Button colorScheme="teal">LOGIN</Button>
                    </PopoverTrigger>
                    <PopoverContent colorScheme="teal">
                      <PopoverArrow />
                      <PopoverHeader>
                          <Input value={user} onChange={(e)=>{
                            setUser(e.target.value)
                          }} placeholder='Username...' marginBottom={'10px'} />
                          <Input value={email} onChange={(e)=>{
                            setEmail(e.target.value)
                          }} placeholder='Email...' marginBottom={'10px'} />
                          <InputGroup size='md'>
                            <Input
                              marginBottom={'10px'}
                              pr='4.5rem'
                              type={show ? 'text' : 'password'}
                              placeholder='Enter password'
                              value={pass} onChange={(e)=>{
                              setPass(e.target.value)
                              }}/>
                              <InputRightElement width='4.5rem'>
                              <Button h='1.75rem' size='sm' marginBottom="45px" onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                        </PopoverHeader>
                      <PopoverBody><Button colorScheme="teal" onClick={submitlogin}>Login</Button></PopoverBody>
                    </PopoverContent>
                  </Popover>
                <Button variant="outline" colorScheme="blue.900" onClick={toggleColorMode}>
                  {colorMode === 'light' ? <SunIcon/> : <MoonIcon /> }
                </Button>
              </Stack>
            </Box>
          ):null
        }
      </Box>
    </div>
  )
}
