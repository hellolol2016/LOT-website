import { Box, Center, VStack } from "@chakra-ui/react";
import Title from "./title";

export default function Page({ children, title, ...rest }) {
  return (
    <VStack backgroundColor={"gray.100"} w={{ base:"90%", xl:"70%"}} mt={"20px"}{...rest}>
      <Title fontWeight={"500"} mt={3}>{title}</Title>
       
      <Box >
        {children}
      </Box>
    </VStack>
  );
}
