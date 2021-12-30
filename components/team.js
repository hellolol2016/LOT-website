import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import data from "./data";
export default function Team({}) {
  console.log(data.team);
  return (
    <SimpleGrid columns={{ base: 1, md: 3, xl: 4 }} padding={10} spacing={10 } width={"90vw"} justifyContent={"center"} alignItems={"center"} justifyItems={"center"}>
      {data.team.map((person) => {
        return (
          <Box width={{ base:"60%", md:"90%" }} display={"block"} textAlign={"center"} alignContent={"center"}>
            <Image src={person.img} width={"90%"} height={"120%"} layout="responsive" ></Image>
            <Text fontSize={"20px"}fontWeight={500}>{person.name} </Text>
            <Text fontSize={"16px"}>{person.role}</Text>
          </Box>
        );
      })}
    </SimpleGrid>
  );
}
