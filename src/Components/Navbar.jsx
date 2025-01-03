import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
  Flex,
  IconButton,
  HStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import { drawerTheme } from "../theme"; 
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import "./styles.css";
import { loginContext } from "../Context/LoginContext";
import chefhat from "../Resources/chef-hat.png";

const API_BASE_URL = 'https://chef-hat.onrender.com';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('blue.900', 'white');
  const bgColor = useColorModeValue("#bee3f8","#171923");
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: signupIsOpen, onOpen: signupOnOpen, onClose: signupOnClose } = useDisclosure();
  const { isOpen: modalIsOpen, onOpen: modalOnOpen, onClose: modalOnClose } = useDisclosure();
  
  const btnRef = React.useRef();
  const [show, setShow] = useState(false);
  const { isLogin, handleLogin } = useContext(loginContext);
  const [formData, setFormData] = useState({
    name: "",
    user: "",
    email: "",
    pass: ""
  });
  
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleShowPassword = () => setShow(!show);

  const handleSubmitSignup = async () => {
    const { name, user, email, pass } = formData;
    
    if (!name || !email || !user || !pass) {
      toast({
        title: "No input found",
        position: 'top',
        status: 'warning',
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username: user, email, password: pass }),
      });

      if (response.ok) {
        toast({
          title: "Account Created",
          position: 'top',
          status: 'success',
          isClosable: true,
        });
        setFormData({ name: "", email: "", pass: "", user: "" });
        signupOnClose();
      }
    } catch (error) {
      toast({
        title: "Error creating account",
        position: 'top',
        status: 'error',
        isClosable: true,
      });
    }
  };

  const handleLoginSubmit = async () => {
    const { email, user, pass } = formData;
    
    if (!email || !user || !pass) {
      toast({
        title: "Invalid credentials",
        position: 'top',
        status: 'error',
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: user, password: pass }),
      });

      const data = await response.json();

      if (response.ok) {
        handleLogin();
        setFormData(prev => ({ ...prev, name: data.name }));
        toast({
          title: "Login successful",
          position: 'top',
          status: 'success',
          isClosable: true,
        });
      } else {
        toast({
          title: "Invalid credentials",
          position: 'top',
          status: 'error',
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Login failed",
        position: 'top',
        status: 'error',
        isClosable: true,
      });
    }
  };

  const handleSignOut = () => {
    window.location.reload();
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(25deg)'
    />
  );

  const [overlay] = useState(<OverlayOne />);

  const navItems = [
    { to: "/FoodMenu", label: "ON THE MENU" },
    { to: "/Plans", label: "PLANS" },
    { to: "/Wine", label: "WINE" },
    { to: "/cart", label: "CHECKOUT" },
    { to: "/Gifts", label: "GIFTS" }
  ];

  return (
    <Box color={color} bg={bgColor} px="2%"  py={4}>
      <Flex align="left" justify="space-between">
        <NavLink to="/">
          <Image 
            src={chefhat} 
            boxSize={{lg:"100px", md:"60px", base:"60px"}}
            className="imgeffect"
          />
        </NavLink>
        
        <HStack spacing={{lg:8,md:4,base:2}} display={{ base: "none", md: "flex" }}>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              >
              <Text className="items" color={color} fontSize={{lg:"18px",md:"12px"}} fontFamily="Cinzel">{item.label}</Text>
            </NavLink>
          ))}

          {!isLogin && (
            <>
              <Button
                size={{lg:"md", md:"sm", base:"sm"}}
                fontSize={{lg:"18px", md:"12px"}}
                bg='#DD6B20'
                color="white"
                onClick={signupOnOpen}
                fontFamily="Cinzel"
                
                mt={{lg:"2%",md:"3%"}}
              >
                SIGNUP
              </Button>
              
              <Popover>
                <PopoverTrigger>
                  <Button
                    size={{lg:"md", md:"sm", base:"sm"}}
                    fontSize={{lg:"18px", md:"12px"}}
                    colorScheme="teal"
                    fontFamily="Cinzel"
                    mt={{lg:"2%",md:"3%"}}
                  >
                    LOGIN
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>
                    <Stack spacing={3}>
                      <Input
                        name="user"
                        value={formData.user}
                        onChange={handleInputChange}
                        placeholder="Username..."
                      />
                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email..."
                      />
                      <InputGroup>
                        <Input
                          name="pass"
                          type={show ? 'text' : 'password'}
                          value={formData.pass}
                          onChange={handleInputChange}
                          placeholder="Password..."
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                            {show ? <ViewOffIcon /> : <ViewIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </Stack>
                  </PopoverHeader>
                  <PopoverBody>
                    <Button colorScheme="teal" onClick={handleLoginSubmit}>
                      Login
                    </Button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </>
          )}

          {isLogin && (
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <Avatar 
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..." // Truncated for brevity
                  size="md"
                />
                <Text>{formData.name}</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Button onClick={handleSignOut}>Sign Out</Button>
                </MenuItem>
                <MenuItem>
                  <Button onClick={modalOnOpen}>Account Details</Button>
                </MenuItem>
              </MenuList>
            </Menu>
          )}
          
          <Button 
            size={{lg:"md", md:"sm", base:"sm"}}
            variant="outline"
            onClick={toggleColorMode}
            mt={{lg:"2%",md:"3%"}}
          >
            {colorMode === 'light' ? <MoonIcon /> :<SunIcon/>}
          </Button>
        </HStack>

        <IconButton
          display={{ base: "flex", md: "none" }}
          mt="3%"
          onClick={onOpen}
          icon={<HamburgerIcon />}
          variant="outline"
        />
      </Flex>

      {/* Mobile drawer */}
      <Drawer variant="glassback" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerContent>
          <DrawerHeader fontFamily="dancing script" fontSize="20px">"A culinary adventure on your plate!"</DrawerHeader>
          <DrawerBody>
            <Stack spacing={3}>
              {navItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                >
                  <Text fontFamily="Cinzel" fontSize="18px">{item.label}</Text>
                </NavLink>
              ))}
              <Button
                width="100px"
                fontSize="16px"
                fontFamily="Cinzel"
                bg='#DD6B20'
                
                onClick={signupOnOpen}
              >
                SIGNUP
              </Button>
              <Popover>
                <PopoverTrigger>
                  <Button
                    width="100px"
                    fontSize="16px"
                    colorScheme="teal"
                    fontFamily="Cinzel"
                  >
                    LOGIN
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>
                    <Stack spacing={3}>
                      <Input
                        name="user"
                        value={formData.user}
                        onChange={handleInputChange}
                        placeholder="Username..."
                      />
                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email..."
                      />
                      <InputGroup>
                        <Input
                          name="pass"
                          type={show ? 'text' : 'password'}
                          value={formData.pass}
                          onChange={handleInputChange}
                          placeholder="Password..."
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                            {show ? <ViewOffIcon /> : <ViewIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </Stack>
                  </PopoverHeader>
                  <PopoverBody>
                    <Button colorScheme="teal" onClick={handleLoginSubmit}>
                      Login
                    </Button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Button 
                width="100px"
                variant="outline"
                onClick={toggleColorMode}
                mt={{lg:"2%",md:"3%"}}
              >
                {colorMode === 'light' ? <MoonIcon /> :<SunIcon/>}
              </Button> 
            </Stack>
          </DrawerBody>
          <DrawerCloseButton 
            position="absolute"
            bottom="0"
            top="auto"
            left="50%"
            transform="translateX(-50%)"
            my="4%"  
            size="lg"
            borderRadius="full"
            borderColor="white"
            border="2px"
            width="40px"
            height="40px"
          />
        </DrawerContent>
      </Drawer>

      {/* Signup drawer */}
      <Drawer
        isOpen={signupIsOpen}
        placement="right"
        onClose={signupOnClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <Stack spacing={3}>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name..."
              />
              <Input
                name="user"
                value={formData.user}
                onChange={handleInputChange}
                placeholder="Username..."
              />
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email..."
              />
              <InputGroup>
                <Input
                  name="pass"
                  type={show ? 'text' : 'password'}
                  value={formData.pass}
                  onChange={handleInputChange}
                  placeholder="Password..."
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                    {show ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={signupOnClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSubmitSignup}>
              Create Account
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Account details modal */}
      <Modal isCentered isOpen={modalIsOpen} onClose={modalOnClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Account Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Text>Name: {formData.name}</Text>
              <Text>Username: {formData.user}</Text>
              <Text>Email: {formData.email}</Text>
              <Flex align="center">
                <Text>Password: {show ? formData.pass : "********"}</Text>
                <Button ml={2} onClick={handleShowPassword}>
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </Flex>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={modalOnClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};