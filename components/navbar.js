import data from "./data";
import {
  List,
  Box,
  UnorderedList,
  Stack,
  Menu,
  Button,
  MenuItem,
  MenuButton,
  MenuList,
  Center,
  background,
} from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar({}) {
  const navlinks = data.header[0].links;

  return (
    <>
      <Stack
        direction="row-reverse"
        spacing="20px"
        className="navlinks"
        display={{ base: "none", md: "flex" }}
      >
        {navlinks.map((navlink) => {
          return (<motion.button whileHover={{scale:1.1 ,backgroundColor:'rgba(0,0,0,0.5)' , color:'#bccac9'}}>
            <Box padding="5px" marginRight="10px" textStyle="navlink" borderRadius="5px">
            
              <Link href={navlink.link}>{navlink.name}</Link>
            
            
            </Box></motion.button>
          );
        })}
      </Stack>
      <Center m={2} w="100%" display={["flex" ,"flex", "none"]}>
        <Menu
          as={Button}
          rightIcon={<BsChevronDoubleDown />}
          w="100vw"
        >
          <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />} w= '80vw'>
            Navigation
          </MenuButton>
          <MenuList>
            {navlinks.slice(0).reverse().map((navlink) => {
              return <Link style={{width:"100vw", display:'inline-block'} }href={navlink.link}><MenuItem as="div" w="100vw" className="chakra">{navlink.name}</MenuItem></Link>;
            })}
          </MenuList>
        </Menu>
      </Center>
    </>
  );
}
