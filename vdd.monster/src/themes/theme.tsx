// src/themes/theme.ts
import { extendTheme } from "@chakra-ui/react"

const styles = {
  global: {
    body: {
      color: "white",
      bg: "brand.500",
      fontFamily: "Blox2, Arial, sans-serif", // Use your font here
    },
    p: {
      color: "brand.400",
      textDecoration: "none",
    },
    a: {
      color: "brand.500",
      textDecoration: "none",
    },
  },
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  styles,
  config,
  colors: {
    brand: {
      500: "#E5FF00",
      400: "#FF004C",
      300: "#000000",
    },
  },
});

export default theme;
