import { useState,useEffect, useRef } from 'react'
import './Main.css'
import { TiArrowSortedDown } from "react-icons/ti";
import hero from '../assets/hero.png'
import Logo from '../assets/logo.png'
import 'swiper/css'
import 'swiper/css/pagination'
import AccordionData from '../dataDummy/accordion-data'

import Slider from 'react-slick'
import Gredu3 from "../assets/Gredu3.jpg"
import Gredu4 from "../assets/Gredu4.jpg"
import "../util.css"
import tema1 from "../assets/assetTema/masa-1.png"
import tema2 from "../assets/assetTema/masa-2.jpg"
import tema3 from "../assets/assetTema/masa-3.png"
import tema4 from "../assets/assetTema/masa-4.png"
import tema5 from "../assets/assetTema/masa-5.png"
import tema6 from "../assets/assetTema/masa-6.png"
import Footer from '../components/footer';

import about1 from "../assets/foto-about-1.jpg"
import about2 from "../assets/foto-about-2.png"
import about3 from "../assets/foto-about-3.png"
import about4 from "../assets/foto-about-4.png"
import about6 from "../assets/foto-about-6.png"

import Aos from 'aos';

import 'aos/dist/aos.css'

import { IoIosArrowDown } from "react-icons/io";

import { FaLocationDot } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoPricetags } from "react-icons/io5";
import { HashLink } from 'react-router-hash-link';

import mainLogo from "../assets/main-logo.png"

import codemiLogo from "../assets/sponsorship/codemi_final.png"

import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

function Main() {

  let sliderRef = useRef(null);

  const next =()=> {
    sliderRef.slickNext()
  }
  const previous =()=> {
    sliderRef.slickPrev()
  }
  useEffect(()=> {
    Aos.init({duration:500,
      delay:100,
      anchorPlacement:"center-center"
    })
  },[])

  const [slideIndex,setSlideIndex] = useState(0)

  const [selected, setSelected] = useState(null)

  const toggle =(i)=> {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  

  const themeData = [
    {
        no:"01",
        tema:"Nenek Moyangku Juga Sekolah",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:tema1,
        bottom:"-200px"
    },
    {
        no:"02",
        tema:"Ini Warisan Dari Nenek Nala",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:tema2,
         bottom:"-60px"
    },
    {
        no:"03",
        tema:"Sekarang TV, Dulu Wayang",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:tema3,
         bottom:"-200px"
    },
    {
        no:"04",
        tema:"Nala Mau Jadi Kartini",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:tema4,
           bottom:"-350px"
    },
    {
        no:"05",
        tema:"Cerita Nala di Sekolah",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:tema5,
         bottom:"-600px"
    },
    {
        no:"06",
        tema:"Oh.... Medianya Lebih Moderen",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:tema6,
         bottom:"0px"
    },
]

const filteredThemeData = themeData.filter((item, index) => index === slideIndex);

  const settings = {
    dots:true,
    speed: 500,
    centerMode:true,
    className:"center",
    centerPadding:"5px",

    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
     
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          centerPadding: "0px",
          centerMode:true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: "0px",
          centerMode:true
        }
      }
    ],
  
    beforeChange:(current,next)=>setSlideIndex(next),
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding:"10px",
   
        }}
      >
        <ul style={{ margin: "0px", color:'white'}}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div id='main-container'>
      <div id='trailer-container'>
          <img className='trailer-logo' src={mainLogo}/>
    
      </div>
          
      <div id='home-container'>
      <div style={{top:0,transform:"scaleY(-1)",height:'15%'}} className='shadow-overlay'></div>
  
       
          <div className='home-content'>
            
            
            
            <div data-aos="fade-up" className='content-head'>
            <h1>Halo, Sobat Gredu!</h1>
            <p>Yuk, siap-siap! Ikutan event pendidikan yang seru, kreatif, dan penuh inspirasi.</p>
            <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} to="#about-container">

            <button className='main-button'>Pelajari Lebih Lanjut <IoIosArrowDown/></button>
            </HashLink>
            </div>

            <div data-aos="fade-up" className='content-hero'>
              <img src={hero} />

            </div>
            
          </div>
      </div>

      <div id='about-container'>
        <div className='content-container'>
          <div data-aos="fade-right" className='vertical-slider'>

              <div class="about-card card1">
              <div className='card-wrapper'>
                    <img src={about1} alt='gambar-gredupedia 5-1'/>
                {/* <div className='card-description'>
                    <p>Gredupedia #4</p>
                    <p>2024</p>
                </div>
                 */}
                </div>
              </div>
              <div class="about-card card2">
                <div className='card-wrapper'>
                    <img src={about2} alt='gambar-gredupedia 5-2'/>
                {/* <div className='card-description'>
                    <p>Gredupedia #4</p>
                    <p>2024</p>
                </div> */}

                </div>
              </div>
              <div class="about-card card3">
              <img src={about3} alt='gambar-gredupedia 5-pengenalan karakter Nala'/>
              </div>
              <div class="about-card card4">
              <img src={about4} alt='gambar-gredupedia 5-pengenalan karakter Kuda Sembrani'/>
              </div>
              <div class="about-card card5">
              <img src={about6} alt='gambar-gredupedia 5-tentang budaya jawa'/>
              </div>

            </div>
        
        
        
          <div className='about-content'>
            <div className='content-wrapper'>
              <h1 data-aos="fade-right">Apa itu <span style={{color:"#F28F00"}} >Gredupedia?</span></h1>
              <p data-aos="fade-right"> Gredupedia adalah sebuah pameran yang diselenggarakan oleh mahasiswa Teknologi Pendidikan Universitas Negeri Yogyakarta (UNY). Pameran ini menampilkan berbagai karya media pembelajaran yang inovatif dan kreatif</p>


            </div>
            <br></br>
            <div className='content-wrapper'>
              <h1 className='gredupedia-5' style={{color:"#F28F00"}} data-aos="fade-right">Gredupedia 5</h1>
              <p data-aos="fade-right"> Memasuki tahun ke-5 penyelanggaraan, Gredupedia Kembali hadir sebagai wadah eksplorasi 
mahasiswa serta kontribusinya untuk dunia Pendidikan Indonesia. Kali ini, Gredupedia 
Kembali dengan wajah baru, mengangkat tajuk "Time Travel : Nala dan Kuda Sembrani" kita akan ditemani Nala dan Kuda Sembrani dalam perjalanannya berkelana untuk memahami dan mengenal tentang Pendidikan Budaya Jawa
</p>

            </div>

           
            
          </div>
        </div>

        <div style={{bottom:0}} className='shadow-overlay'></div>
      </div>

      <div id='location'>
        <div className='location-content'>
        <div data-aos="fade-up"  className='location-map'>
         
         <iframe height="250px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.451927674791!2d110.36715900450247!3d-7.800003111308953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578614472d91%3A0x13cb03c951e9b2f8!2sTaman%20Budaya%20Yogyakarta!5e0!3m2!1sen!2sid!4v1731865153263!5m2!1sen!2sid" allowFullScreen="true"  referrerPolicy="no-referrer-when-downgrade"/>
         </div>
         <div data-aos="fade-right" className='location-description'>
                   <h3>Offline Event at</h3>
                   <h1>Taman Budaya Yogyakarta</h1>
                   <h3>19 - 21 December 2024</h3>
         </div>
        </div>
      

      </div>


      <div className='theme-container'>
      <div style={{top:0,transform:"scaleY(-1)",height:'15%'}} className='shadow-overlay'></div>

      {filteredThemeData.map((item)=>{
        return (
          <img className='img-background' style={{bottom:item.bottom}} src={item.img}/>
        )
      })}
      <div className='theme-content'>
          <h1>6 Tema Karya</h1>
          <div className='theme-description'>
            {filteredThemeData.map((item)=> {
              return (
                  <>
                  <br></br>
                   <p>{item.no}</p>
            <h1>{item.tema}</h1>
            <p className='description-text'>{item.description}</p>
                  </>
              )
            })}
           
          </div>
          <div className="theme-slider">
            <Slider ref={slider=>{
              sliderRef = slider;
            }} {...settings}>
            {themeData.map((item,index)=> {
              return (
                <div key={index} onClick={()=>setSlideIndex(index)} className={index === slideIndex ? 'slider-card-active':'slider-card'}>
                
                  <img src={item.img}/>
              
                </div>
              )     
              })}  
          
  
              
            </Slider>
           
      
            <IoMdArrowDropright className='theme-next' onClick={next}/>
            <IoMdArrowDropleft className='theme-previous' onClick={previous}/>
          
          
     
          </div>
      </div>
      <div style={{bottom:0,height:'10%'}} className='shadow-overlay'></div>

      </div>



      <div className='project-container'>
          <div className='project-header'>
            <div>
                  
                <h1><span>300+</span> PRODUK KARYA</h1>
                    <p>dari para Teknolog Pendidikan</p>
                    <br></br>
                    <button className='main-button'>Pelajari Lebih Lanjut</button>
              
            </div>
            


          </div>
          <div className='project-card-container'>
            <div className='card-container'>
              <div className='card-column'>
                <div className='product-card'></div>
                <div className='product-card'></div>
                <div className='product-card'></div>
              </div>
              <div className='card-column'>
              <div className='product-card'></div>
                <div className='product-card'></div>
                <div className='product-card'></div>
              </div>
              <div className='card-column'>
              <div className='product-card'></div>
                <div className='product-card'></div>
                <div className='product-card'></div>
              </div>

            </div>

          </div>
      </div>

      <div id='sponsors-container'>
      <div style={{top:0,height:'15%',transform:"scaleY(-1)"}} className='shadow-overlay'></div>
            <div className='sponsors-wrapper'>
                <h1>SPONSORS</h1>
                <div className='sponsors-card'>
                    <div>

                    <img src={codemiLogo}/>
                    </div>
           
                
                </div>
            </div>
            <div className='media-wrapper'>
              <h1>MEDIA PARTNER</h1>
              <div className='media-card'>
                  <div>

                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
            </div>

            <div style={{bottom:0,height:'10%'}} className='shadow-overlay'></div>
          

      </div>


      <div id='faq-container'>
        <h1>FAQ</h1>
        <div className='accordion-container'>
          {AccordionData.map((data,i)=>{
            return (
            <div className='accordion'>
              <div className={selected==i?"title selected":"title"} onClick={()=>toggle(i)} >
                <p>{data.question}</p>
                <TiArrowSortedDown/>
              </div>
              <div className={selected == i? "show":"answer"}>
                <p>{data.answer}</p>
              </div>
          </div>

            )
          
          })}
              
        </div>


      </div>

      <Footer/>
    </div>
  )
}

export default Main
