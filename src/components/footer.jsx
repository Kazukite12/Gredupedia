import React from "react"
import "./footer.css"
import "./navbar.css"
import Logo from "../assets/logo.png"
import { Link,NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer =()=> {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="logo">
                    <img src={Logo}/>
                </div>
                <div className="gredupedia">
                    <h2>GREDUPEDIA</h2>
                    <p>Kurikulum dan Teknologi Pendidikan<br></br>
                    Fakultas Ilmu Pendidikan dan Psikologi<br></br>
                    Universitas Negeri Yogyakarta
                    </p>
                </div>
                <div className="social-media">
                    <h2>SOCIAL MEDIA</h2>
                    <p>e-mail : gredupedia.uny@gmail.com<br></br>
                    Instagram : @Gredupedia.id<br></br>
                    Facebook : @Gredupedia<br></br>
                    Tiktok : @gredupedia.id</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024-2025 Gredupedia</p>
            
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
            </div>
        </div>
    )
}

export default Footer