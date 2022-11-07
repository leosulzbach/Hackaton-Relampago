import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    blue: {
      900: "#070718",
      300: "#0AC6EF",
      400:"#1597B4"
    },
    
  },
  styles: {
    global: {
      fonts: {
        heading: "Roboto",
        body: "Roboto",
      },
      body: {
        bg: "#cecece",
        color: "gray.50",
      },
    },
  },
});