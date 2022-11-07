import { ChakraProvider, theme } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Routes/Router"



function App() {
  return(
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ChakraProvider>
  )
}

export default App
