import { Box, Container } from "@chakra-ui/react";
import Header from "../header";
import Footer from "../footer";
import { motion } from "framer-motion";

export default function Page({ children, router }) {
  return (
    <motion.div>
      <Header />

      {children}

      <Footer />
    </motion.div>
  );
}
