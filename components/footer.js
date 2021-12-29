import { Box, Center, HStack, VStack } from "@chakra-ui/react";
import Title from "./title";
import { AiFillInstagram, AiFillMail, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs';


export default function Page({ }) {
  return (
    <VStack bg="rgba(0,0,0,0.8) ">
      <Title color="gray.100" fontSize={"30px"} mt={5} >Feel free to contact us, we'd love to hear from you!</Title>
      <HStack fontSize={"60px"} color="gray.100" spacing={{ base:3,md:10}} padding={5}>
       <AiFillMail /> 
        <AiFillInstagram />
        <AiFillYoutube />
        <BsTwitch />
<AiFillTwitterCircle />


</HStack>

    </VStack>
  )
}