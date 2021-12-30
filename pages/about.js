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
  Spacer,
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
import Title from "../components/title";
import Img from "../components/image";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import Team from "../components/team";
export default function AboutPage({}) {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="The official website of the Laugh Out Together Foundation!"
        />
      </Head>

      <Background
        img={"/media/banners/header_background.jpg"}
        pos={0}
        backgroundPosition={"center 50%"}
      />
      <Body>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          padding={10}
          spacing={10}
          background={"gray.100"}
          margin={"10"}
          alignItems={"center"}
        >
          <Box flex={2} padding={10} textAlign={"center"}>
            <VStack>
              <Title fontWeight="500" fontSize="35px">
                The LOT Process
              </Title>
              <Text>
                We are a student run foundation working around OC, aiming to
                bring resources to all members of the community.
                <br></br>
                <br></br>
                Through our connections to various organizations, we hope to
                provide a chance for everyone to explore their passion
                regardless of their background.
              </Text>
            </VStack>
          </Box>
          <Box flex={1} padding={"10"} maxW={"1000px"}>
            <LazyLoadImage
              src={"/media/how_projects_work.png"}
              layout="responsive"
              height={"80%"}
              width={"100%"}
              effects="blur"
            ></LazyLoadImage>
          </Box>
        </SimpleGrid>

        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          padding={10}
          spacing={10}
          background={"gray.100"}
          alignItems={"center"}
          mb={20}
        >
          <Box flex={2} padding={10} textAlign={"center"} >
            <VStack>
              <Title fontWeight="500" fontSize="35px">
                Mission and Vision
              </Title>
              <Text mb={5} padding={"10"}>
                Our mission is to empower and inspire the community to do good
                by utilizing the skills of compassionate students. Here at Laugh
                Out Together Foundation, we believe every member of our
                community is unique in their own way, and we strive to bring out
                the best of our community.
              </Text>
              <Box
                margin={"10px"}
                backgroundColor={"gray.800"}
                height={"2px"}
                w={"300px"}
              ></Box>
              <Text style={{ mt: 10, pb: 10 }}>
                We believe that everyone, no matter their age and status, has an
                unique passion that can impact the community. Through
                unconventional volunteer projects, we hope to create a platform
                that showcases the unique skills and talents of our community.
              </Text>
            </VStack>
          </Box>
          <Box flex={1} padding={"10"} maxW={"1000px"}>
            <LazyLoadImage
              src={"/media/connect.png"}
              layout="responsive"
              height={"80%"}
              width={"100%"}
              effects="blur"
            ></LazyLoadImage>
          </Box>
        </SimpleGrid>

        <VStack opacity={"100%"} mb={20}>
          <Box width={"90%"} bg={"gray.100"}>
            <Title fontWeight={500} mt={10}>
              Our Team
            </Title>
            <Team />
          </Box>
        </VStack>
      </Body>
    </>
  );
}
