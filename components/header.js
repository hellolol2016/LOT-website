import Link from "next/link";
import { Box, Text, Center } from "@chakra-ui/react";
import data from "./data.js";
import Navbar from './navbar';
import Logo from'./logo';
import { css } from "@emotion/react";
const Title = () => {
  return (
    <Center>
      <Text
        textStyle="h1"
      >A little from you, a <span>LOT</span> for the world!</Text>
    </Center>
  )
}


export default function Header({ }) {
  return (
    <Box
      w="100vw"
      top="0"      
      bg="gray.400"
      as="nav"
      left="0"
      position="relative"
    >
      
      <Link href="/" ><Logo css={css`padding:32px;`} /></Link>
      <Title />

      <Navbar />
    </Box>
  )
}
