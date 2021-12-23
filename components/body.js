import { Box, } from "@chakra-ui/react";

export default function Body({ children, ...rest }) {
  return (
      <Box bg="gray.100" p={5} w={{base:"90%",md:"100vw" }} {...rest}>
        {children}
    </Box>
  );
}
