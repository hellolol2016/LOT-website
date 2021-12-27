import { Box } from "@chakra-ui/react";
import Image from "next/image";


export default function Img({ src, h,w, ...rest}) {
  return (
    <Box{...rest}>
      <Image src={src} height={h} w={w}/> 


  </Box>
  
  
    )
}