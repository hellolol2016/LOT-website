import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Heading, Link, Text, Code } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="The official website of the Laugh Out Together Foundation!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      </main>
    </div>
  );
}
