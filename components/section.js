import { Box, Center, VStack } from "@chakra-ui/react";
import Title from "./title";

export default function Page({ children, title, ...rest }) {
  return (
    <VStack backgroundColor={"gray.100"} w={"70%"} mt={"20px"}{...rest}>
      <Title>{title}</Title>
      <Box padding={10} fontSize={{ base: "14px", xl: "20px" }}>
        {children}
      </Box>
    </VStack>
  );
}
