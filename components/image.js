import { Box } from "@chakra-ui/react";
import Image from "next/image";


export default function Img({ src, height,width, ...rest}) {
  return (
    <Box{...rest}>
      <Image src={src} height={height} width={width}/> 


  </Box>
  
  
    )
}