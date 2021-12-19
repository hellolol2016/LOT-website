import { Box, Text } from "@chakra-ui/react";
import data from "./data.js";
import Logo from'./logo';
import { css } from "@emotion/react";
const Title = () => {
  return (
    <>
      <Text
        textStyle="h1"
      >A little from you, a <span>LOT</span> for the world!</Text>
    </>
  )
}


export default function Header({ }) {
  return (
    <Box
      w="100vw"
      top="0"      
      bg="tomato"
      as="nav"
      position="fixed"
    >
      
      <Logo css={css`padding:32px;`} />
      <Title />
    </Box>
  )
}
