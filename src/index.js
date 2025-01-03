// index.js
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import { CartContextProvider } from "./Context/CartContext";
import { LoginContextProvider } from "./Context/LoginContext";
import theme from './theme'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <CartContextProvider>
      <LoginContextProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </LoginContextProvider>
    </CartContextProvider>
  </BrowserRouter>
);