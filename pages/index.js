import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header.js";
import Body from "../components/body";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Section from "../components/section";
import Background from "../components/background";
import Full from "../components/bigsec";
import Link from "next/link";

import Image from "next/image";
import fP from "../public/media/fingerprint.png";
import donate from "../public/media/donate.png";
import join from "../public/media/join.png";
import Imglink from "../components/imglink";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="The official website of the Laugh Out Together Foundation!"
        />
        <link rel="icon" href="/media/whitecirclelot.png" />
      </Head>

      <Background
        img={"/media/banners/header_background.jpg"}
        pos={0}
        backgroundPosition={"center 50%"}
      />
      <Body>
        <VStack opacity={"90%"}>
          <Section title={"Who are we?"}>
            <Text textAlign={"center"} padding={"10px 30px 5px 30px"}>
              We're a student run non-profit foundation dedicated to inspiring
              others to use their talents to create educational resources within
              the Orange County community.
            </Text>
            <Button
              width={"100%"}
              bg={"gray.400"}
              padding={0}
              m={0}
              m={"20px 0"}
              borderRadius={0}
            >
              <Link href="/about">
                <Text fontSize={"20px"}>About</Text>
              </Link>
            </Button>
          </Section>
        </VStack>

        <VStack pb={10}>
          <Full title={"What makes us different?"}>
            <Flex align={"center"}>
              <Box flex="1">
                <Image src={fP} w={350} h={400} pb={10}/>
              </Box>
              <Text textAlign={"center"} flex="2" m={3} className="small-font">
                There are a TON of nonprofits committed to a similar mission as
                us, so the inevitable question comes up: what makes us
                different? We only approve of and execute projects that strongly
                appeal to our youth community. <br></br>For example, one of our
                consistent projects is a monthly mental podcast, in which our
                hosts are dedicated to the betterment of mental health in our
                society.
              </Text>
            </Flex>
          </Full>
        </VStack>

        <VStack opacity={"90%"} mb={20}>
          <Section title={"We can use your help!"} width={"80%"}>
            <SimpleGrid columns={{ base: 1, md: 2 }} padding={10} spacing={10}>
              <VStack width={"100%"} justify={"center"} align={"center"}>
                <Link href="/donate">
                  <Imglink padding={2}>
                    <Box width={{ base: "30vw", md: "15vw" }} height={{ base: "30vw", md: "15vw" }}>
                      <Image src={'/media/donate.png'} width="100" height="100" layout="responsive"></Image>
</Box>
                  </Imglink>
                </Link>
                <Text textAlign={"center"} fontSize={"24px"} pt={10}>
                  Support our organization by donating to us! Your funds will go
                  directly to the projects that we're running. This can range
                  from tech support for people in retirement homes to teaching
                  youth coding skills.
                </Text>
              </VStack>

              <VStack width={"100%"} justify={"center"} align={"center"}>
                <Link href="/join" height>
                  <Imglink padding={2}>
                    <Box width={{ base: "30vw", md: "15vw" }} height={{ base: "30vw", md: "15vw" }}>
                      <Image src={'/media/join.png'} width="100" height="100" layout="responsive"></Image>
</Box>
                  </Imglink>
                </Link>
                <Text textAlign={"center"} fontSize={"24px"} pt={10}>
                  If you’re interested in supporting our cause, consider joining
                  us! We welcome anyone that believes they can make a positive
                  impact. Open the form in a new tab by clicking here!
                </Text>
              </VStack>
            </SimpleGrid>
          </Section>
        </VStack>
      </Body>
    </>
  );
}
