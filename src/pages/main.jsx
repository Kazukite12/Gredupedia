import { useState,useEffect } from 'react'
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
import tema1 from "../assets/assetTema/1.jpg"
import tema2 from "../assets/assetTema/2.jpg"
import tema3 from "../assets/assetTema/3.jpg"
import tema4 from "../assets/assetTema/4.jpg"
import tema5 from "../assets/assetTema/5.jpg"
import tema6 from "../assets/assetTema/6.jpg"
import Footer from '../components/footer';

import Aos from 'aos';

import 'aos/dist/aos.css'

import { IoIosArrowDown } from "react-icons/io";

function Main() {

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
        img:tema1
    },
    {
        no:"02",
        tema:"Ini Warisan Dari Nenek Nala",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:tema2
    },
    {
        no:"03",
        tema:"Sekarang TV, Dulu Wayang",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:tema3
    },
    {
        no:"04",
        tema:"Nala Mau Jadi Kartini",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:tema4
    },
    {
        no:"05",
        tema:"Cerita Nala di Sekolah",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:tema5
    },
    {
        no:"06",
        tema:"Oh.... Medianya Lebih Moderen",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:tema6
    },
]

const filteredThemeData = themeData.filter((item, index) => index === slideIndex);

  const settings = {
    dots:true,
    speed: 500,
    infinite:true,
    className: "center",
    centerPadding: "260px",
    centerMode:true,
    slidesToShow: 3,
    slidesToScroll:3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
     
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          centerPadding: "3px",
          centerMode:true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: "3px",
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
          
      <div id='home-container'>
  
       
          <div className='home-content'>
            
            
            
            <div className='content-head'>
            <h1>GREDUPEDIA</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus nibh, aliquet eu neque ac, volutpat sodales risus. Pellentesque </p>
            <button className='main-button'>Pelajari Lebih Lanjut <IoIosArrowDown/></button>
            </div>

            <div className='content-hero'>
              <img src={hero} />

            </div>
            
          </div>
      </div>

      <div id='about-container'>
        <div className='content-container'>
          <div className='vertical-slider'>

              <div class="about-card card1">
              <div className='card-wrapper'>
                    <img src={Gredu4}/>
                <div className='card-description'>
                    <p>Gredupedia #4</p>
                    <p>2024</p>
                </div>
                
                </div>
              </div>
              <div class="about-card card2">
                <div className='card-wrapper'>
                    <img src={Gredu4}/>
                <div className='card-description'>
                    <p>Gredupedia #4</p>
                    <p>2024</p>
                </div>

                </div>
              </div>
              <div class="about-card card3"></div>
              <div class="about-card card4"></div>
              <div class="about-card card5"></div>

            </div>
        
        
        
          <div className='about-content'>
              <h1 data-aos="fade-right">Tentang</h1>
              <p data-aos="fade-right"> Gredupedia#5 adalah ruang bagi pengunjung untuk menjelajahi inovasi terkini, berinteraksi dengan teknologi, dan memahami arah masa depan pendidikan yang menghubungkan teknologi, kreativitas, dan pembelajaran.
</p>

            
          </div>
        </div>

        <div style={{bottom:0}} className='shadow-overlay'></div>
      </div>


      <div className='theme-container'>
      <div style={{top:0,transform:"scaleY(-1)",height:'10%'}} className='shadow-overlay'></div>

      {filteredThemeData.map((item)=>{
        return (
          <img className='img-background' src={item.img}/>
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
            <Slider {...settings}>
            {themeData.map((item,index)=> {
              return (
                <div key={index} className={index === slideIndex ? 'slider-card-active':'slider-card'}>
                
                  <img src={item.img}/>
              
                </div>
              )     
              })}  
          
  
              
            </Slider>
     
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
                <button>Pelajari Lebih Lanjut</button>
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
      <div style={{top:0,height:'10%',transform:"scaleY(-1)"}} className='shadow-overlay'></div>
            <div className='sponsors-wrapper'>
                <h1>SPONSORS</h1>
                <div className='sponsors-card'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            </div>
            <div className='media-wrapper'>
              <h1>MEDIA PARTNER</h1>
              <div className='media-card'>
                  <div></div>
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
