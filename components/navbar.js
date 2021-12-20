import data from './data';
import { List, ListItem, UnorderedList } from "@chakra-ui/react";


export default function Navbar({ }) {
  const navlinks  = data.header[0].links;




  return (<>
    <UnorderedList>
      {navlinks.map((navlink) => {
        console.log(navlink.name);
        return(<ListItem>{navlink.name}</ListItem>)
      
      })} 
    </UnorderedList>
    <UnorderedList>
        <ListItem>Hello</ListItem>
    </UnorderedList>
    </>
  )
}