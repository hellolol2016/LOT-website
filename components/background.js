import { Box } from "@chakra-ui/react";

export default function Page({ img, pos, ...rest}) {
  return (
    <Box
    height={"100%"}
      width={"100%"}
      backgroundImage={img}
      position={"absolute"} 
      zIndex={"-1"}
      top={pos}
      backgroundAttachment={"fixed"}
    backgroundPosition= {"50%"}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
     {...rest} 
    />
    )
}