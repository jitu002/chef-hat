// theme.js
import { extendTheme } from '@chakra-ui/react'
import { drawerAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(drawerAnatomy.keys)

const glassback = definePartsStyle({
  overlay: {
    bg: 'blackAlpha.200',
    backdropFilter: 'blur(10px)',
  },
  dialogContainer: {
    bg: 'rgba(206, 205, 205, 0.73)',
    backdropFilter: 'blur(10px)',
    boxShadow: 'lg',
    _dark: {
      bg: 'rgba(0, 2, 50, 0.8)',
      color: 'white',
    },
  },
  dialog: {
    bg: 'transparent',
  },
  body: {
    bg: 'transparent',
  },
  footer: {
    bg: 'transparent',
  }
})

const drawerTheme = defineMultiStyleConfig({
  variants: { glassback },
})

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ 
  config,
  components: {
    Drawer: drawerTheme
  }
})

export default theme