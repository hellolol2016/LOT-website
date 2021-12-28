import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function imglink({ children, ...rest }) {
  return (
    <Center width="70%">
      <motion.button
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgba(0,0,0,0.2)",
          borderRadius: "10px",
          padding:"5px"
        }}
        {...rest}
      >
        {children}
      </motion.button>
    </Center>
  );
}
