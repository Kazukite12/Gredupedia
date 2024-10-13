import "./navbar.css"
import { useState, useEffect } from "react";
import Logo from "../assets/logo.png"
import { Link,NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar =()=> {

    const [sticky, setSticky] = useState(false)

    const handleScroll = () => {
      if (window.scrollY > 1) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
      
  
    return (

        <div className={sticky?"nav-bar-sticky":"nav-bar"}>
        <div className='nav-container'>
              <div className='title'>
                <img src={Logo}/>
                <Link to="/">
                <h3>Gredupedia</h3>
                </Link>
  
              </div>
              <div className='nav-link'>
              <NavHashLink 
                  to="/#about-container" 
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
              >
              <p>About Us</p>
              </NavHashLink>
                <NavHashLink 
                  to="/#sponsors-container" 
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                
                >
                  <p>Sponsors</p>
                </NavHashLink>

                <NavHashLink 
                  to="/#faq-container" 
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                
                >
                  <p>FAQ</p>
                </NavHashLink>
                <NavLink to="/Gallery">
                    <p>Gallery</p>
                </NavLink>

                <div className="social-media">

                  <RiInstagramFill/>
                  <FaTiktok/> 
                  <FaFacebook/>
                </div>


                

              </div>
              <div className='burger-nav'>
                <div></div>
                <div></div>
                <div></div>
              </div>
        </div>
              
            </div>
    )
}

export default Navbar