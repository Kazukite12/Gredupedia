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
          
      <div id='home-container'>
  
       
          <div className='home-content'>
            
            
            
            <div className='content-head'>
            <h1>GREDUPEDIA</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus nibh, aliquet eu neque ac, volutpat sodales risus. Pellentesque </p>
            <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} to="#about-container">

            <button className='main-button'>Pelajari Lebih Lanjut <IoIosArrowDown/></button>
            </HashLink>
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
              <h1 data-aos="fade-right">Apa itu <span >Gredupedia?</span></h1>
              <p data-aos="fade-right"> Gredupedia adalah sebuah pameran yang diselenggarakan oleh mahasiswa Teknologi Pendidikan Universitas Negeri Yogyakarta (UNY). Pameran ini menampilkan berbagai karya media pembelajaran yang inovatif dan kreatif</p>


            </div>
            <br></br>
            <div className='content-wrapper'>
              <h1 className='gredupedia-5' data-aos="fade-right">Gredupedia 5</h1>
              <p data-aos="fade-right"> Memasuki tahun ke-5 penyelanggaraan, Gredupedia Kembali hadir sebagai wadah eksplorasi 
mahasiswa serta kontribusinya untuk dunia Pendidikan Indonesia. Kali ini, Gredupedia 
Kembali dengan wajah baru, mengangkat tajuk "Time Travel : Nala dan Kuda Sembrani" kita akan ditemani Nala dan Kuda Sembrani dalam perjalanannya berkelana untuk memahami dan mengenal tentang Pendidikan Budaya Jawa
</p>

            </div>

            <div className='information-container'>
                  <div className='information-wrapper' data-aos="fade-right">
                    <FaLocationDot className='information-icon'/>
                    <p>Gredupedia tahun ke-5 akan berlokasi di <span style={{fontWeight:'700'}}>Taman Budaya Yogyakarta</span></p>
                  </div>
                  <div className='information-wrapper' data-aos="fade-right">
                    <BsCalendar2DateFill className='information-icon'/>
                  <p>Diselenggarakan pada tanggal <span style={{fontWeight:'700'}}> 19 - 21 Desember 2024</span></p>
                  </div>
                  <div className='information-wrapper' data-aos="fade-right">
                    <IoPricetags className='information-icon'/>
                    <p>Terbuka untuk Umum dan <span style={{fontWeight:'700'}}>Gratis!</span></p>
                  </div>
            </div>

            
          </div>
        </div>

        <div style={{bottom:0}} className='shadow-overlay'></div>
      </div>


      <div className='theme-container'>
      <div style={{top:0,transform:"scaleY(-1)",height:'15%'}} className='shadow-overlay'></div>

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
