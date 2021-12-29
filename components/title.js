import { Text } from "@chakra-ui/react"
export default function Title({ children, ...rest }) {

  return (
    <Text fontSize={{ base: '3xl', xl: "5xl" }} {...rest}  textAlign={"center"}>
     {children} 


  </Text>
  
    )
}