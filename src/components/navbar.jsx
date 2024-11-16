import "./navbar.css"
import { useState, useEffect } from "react";
import Logo from "../assets/logo.png"
import { Link,NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";

import { ScrollRestoration } from "react-router-dom";

const Navbar =()=> {

    const [sticky, setSticky] = useState(false)
    

    const [activePanel, setActivePanel] = useState(false)

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
        <>
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
                className="nav-hash-link about-link"
                    to="/#about-container" 
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                >
                <p>About Us</p>
                </NavHashLink>
                <NavHashLink 
                      className="nav-hash-link sponsors-link"
                  to="/#sponsors-container" 
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                
                >
                  <p>Sponsors</p>
                </NavHashLink>

                <NavHashLink 
                      className="nav-hash-link faq-link"
                  to="/#faq-container" 
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                
                >
                  <p>FAQ</p>
                </NavHashLink>
                <NavLink       className="nav-hash-link gallery-link" to="/Gallery">
                    <p>Gallery</p>
                </NavLink>

                <div className="social-media social-link">

                <a target='_blank'rel='noopener noreferrer' href="https://www.instagram.com/gredupedia.id/"><RiInstagramFill/>
                </a>
                <a target="_blank" href="https://www.tiktok.com/@gredupedia.id">
                  <FaTiktok/> 
                </a>
                  <a target="_blank" href="https://www.facebook.com/gredupedia.pameran?locale=hy_AM">
                  <FaFacebook/>
                  </a>
                </div>
              </div>
              <div onClick={()=>setActivePanel(true)} className='burger-nav'>
                <div></div>
                <div></div>
                <div></div>
              </div>
        </div>
              
            </div>


            <div className={activePanel?"burger-panel-active":"burger-panel"}>
              <div className="x">
                <HiXMark onClick={()=>setActivePanel(false)}/>
              
              </div>
              <div className="panel-link">
              <NavHashLink 
                  to="/#about-container" 
                  onClick={()=>setActivePanel(false)}
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
              <p>About Us</p>
              </NavHashLink>
                <NavHashLink 
                  to="/#sponsors-container" 
                  onClick={()=>setActivePanel(false)}
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                
                >
                  <p>Sponsors</p>
                </NavHashLink>

                <NavHashLink 
                  to="/#faq-container" 
                  onClick={()=>setActivePanel(false)}
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                
                >
                  <p>FAQ</p>
                </NavHashLink>
                <NavLink to="/Gallery" onClick={()=>setActivePanel(false)}>
                    <p>Gallery</p>
                </NavLink>
              </div>
              <div className="panel-social-media">
              <a target='_blank'rel='noopener noreferrer' href="https://www.instagram.com/gredupedia.id/">

                  <RiInstagramFill/>
            </a>
                  <FaTiktok/> 
                  <FaFacebook/>
              </div>

            </div>

            </>
    )
}

export default Navbar