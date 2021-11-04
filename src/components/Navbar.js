import {React} from 'react'
import { Link } from "react-router-dom"
import WhiteLogo from "../media/white_logo.png";
import data from "../pages/data"
function Navbar() {
    const links = data.header[0].links;
    console.log(links)
    
    return (
      <header>
        <div className="banner darker-background">
            <Link to="/">
                <img src={WhiteLogo} className="header_logo" alt="LOT"></img>
            </Link>
            <h1 className="white-font">
                A little from you, a <i>LOT</i> for the world!
            </h1>
            <nav>
                <ul>
                    {links.map((link) => {
                        if (link.name !== "gallery") {
                            
                        }
                    })}
                </ul>
            </nav>
        </div>
      </header>
    );
}

export default Navbar
