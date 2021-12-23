import { Text } from "@chakra-ui/react"
export default function Title({ children, ...rest }) {

  return (
    <Text fontSize="5xl" {...rest}>
     {children} 


  </Text>
  
    )
}