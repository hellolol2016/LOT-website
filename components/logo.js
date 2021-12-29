import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
const LogoContainer = styled.span`
  display:block;
  width:30%;
  min-width:200px;
  align-items: center;
  padding: 20px;
`;
const Logo = () => {
  const lotLogo = "/media/white_logo.png";
  return (
    <LogoContainer>
      <Link href="/">
        <Image
          src={"/media/white_logo.png"}
          height={60}
          width={250}
          layout="responsive"
          alt="logo"
          loading="eager"
          priority={true}
        />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
