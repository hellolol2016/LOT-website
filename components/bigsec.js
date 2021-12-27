

import { Box, Center, VStack } from "@chakra-ui/react";
import Title from "./title";

export default function bigsec({ children, title, ...rest }) {
  return (
    <VStack backgroundColor={"gray.200"} w={"100%"} mt={"20px"} p={"0 10%"}  {...rest} >
      <Title fontWeight={"500"} mt={3}>{title}</Title>
       
      <Box >
        {children}
      </Box>
    </VStack>
  );
}
