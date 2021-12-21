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
} from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";
import Link from "next/link";

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
          return (
            <Box padding="5px" marginRight="10px" textStyle="navlink">
              {navlink.link}
            </Box>
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
              return <MenuItem as="a" w="100vw">{navlink.link}</MenuItem>;
            })}{" "}
          </MenuList>
        </Menu>
      </Center>
    </>
  );
}
