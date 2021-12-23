import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header.js";
import Body from "../components/body";
import { Center, Text } from "@chakra-ui/react";
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
      <Center width={"100%"} bg={"green"}>
        <Body bg={"tomato"}>
          <Text>
            asdfasdfasdfasdfasdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          </Text>
        </Body>
      </Center>
    </>
  );
}
