import { Box, Container } from "@chakra-ui/react"
import Header from "../header"
import Footer from '../footer' 



export default function Page({children, router }) {
  return (
    <Box>
    <Header /> 
    
      <Container>
        {children}



      </Container>
    
    <Footer />
    
    </Box>
  )
}