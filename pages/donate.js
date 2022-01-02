import Head from "next/head";
import styles from "../styles/Home.module.css";
import Body from "../components/body";
import { Box, Button, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Background from "../components/background";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Title from "../components/title";
import "react-lazy-load-image-component/src/effects/blur.css";
import Team from "../components/team";
import donatebtn from '../public/media/donate-btn.png';
import Link from "next/link";
export default function AboutPage({}) {
  return (
    <>
      <Head>
        <title>Donate</title>
        <meta
          name="description"
          content="The official website of the Laugh Out Together Foundation!"
        />
      </Head>

      <Background
        img={"/media/banners/background5.jpg"}
        pos={0}
        backgroundPosition={"center 50%"}
      />
      <Body>
        <VStack bg={"gray.100"} p={{ base: "5", xl: "20" }} m={10}>
          <Title fontWeight={500}>Donate</Title>
          <Text textAlign={ "center"} mb={5}>
            Support our cause in helping other organizations, and using the
            skills of our peers to do good in the world! If you would like to
            learn more about us <Text display={"inline"} color={"tomato"} textDecor={"underline"}><Link href="/about" >go here</Link></Text>. Your donation will help us host higher
            quality projects, help us fundraise more money for other
            organizations, and help us provide more for the community.
          </Text>
          <Box mt={10}>
         <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_blank"
            >
              <input
                type="hidden"
                name="hosted_button_id"
                value="UMHGP4HKLHN4L"
              />
              <input
                type="image"
                src={"/media/donate-btn.png"}
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
                style={{width:"100%", maxWidth:"300px"}}
              
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form> 
          
          </Box> 
          <Text>or...</Text>
          <Button className="donate-btn" bg={"#ff6b6b"} boxShadow={"0px 14px 16px -8px rgba(0,0,0,0.5)"} >
            <Link href="https://buy.stripe.com/7sIaFD2gw8jDglWaEH" >
             Quick Donate ($9.99/month) 
            </Link>           

</Button>
        </VStack>
      </Body>
    </>
  );
}
