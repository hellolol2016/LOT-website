import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
const LogoContainer = styled.span`
  display: inline-flex;
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
          height={100}
          width={400}
          alt="logo"
        />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
