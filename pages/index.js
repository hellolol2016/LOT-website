import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header.js";
import Body from "../components/body";
import { Button, Center, Text, VStack } from "@chakra-ui/react";
import Section from "../components/section";
import Background from '../components/background';
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="The official website of the Laugh Out Together Foundation!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Background img={'/media/banners/header_background.jpg'} pos={0} backgroundPosition={"center 20%" }/>
      <Body >
        <VStack  opacity={"90%"}>

          <Section title={"Who are we?"}>
            <Text fontSize={"40px"}textAlign={"center"}>
              We're a student run non-profit foundation dedicated to inspiring
              others to use their talents to create educational resources within
              the Orange County community.
            </Text>
            <Button width={"100%"} bg={"gray.400"} mt={"20px"}>
              <Link href="/about">
                <Text fontSize={"20px"}>


                About
                </Text>
              </Link>
            </Button>
          </Section>
        </VStack>
        
        <VStack  opacity={"90%"}>

          <Section title={"Who are we?"}>
            <Text fontSize={"40px"}textAlign={"center"}>
              We're a student run non-profit foundation dedicated to inspiring
              others to use their talents to create educational resources within
              the Orange County community.
            </Text>
            <Button width={"100%"} bg={"gray.400"} mt={"20px"}>
              <Link href="/about">
                <Text fontSize={"20px"}>


                About
                </Text>
              </Link>
            </Button>
          </Section>
        </VStack>
      </Body>
    </>
  );
}
