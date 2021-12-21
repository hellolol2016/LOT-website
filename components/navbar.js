import data from './data';
import { List, Box, UnorderedList, Stack } from "@chakra-ui/react";

import Link from 'next/link';

export default function Navbar({ }) {
  const navlinks  = data.header[0].links;




  return (<>
    <Stack direction="row-reverse" spacing="20px" className="navlinks" display={{ base: 'none', md:"flex"}}>
      {navlinks.map((navlink) => {
        console.log(navlink.name);
        return (<Box padding="5px" marginRight="10px" textStyle="navlink" > 
          {navlink.link}
        </Box>)
      
      })} 
    </Stack>
    </>
  )
}