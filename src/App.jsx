import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import hero from './assets/hero.png'
import Logo from './assets/logo.png'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import theme1 from './assets/theme-1.jpg'
import Slider from 'react-slick'
import CenterMode from './components/slider'

function App() {

  const [slideIndex,setSlideIndex] = useState(0)

  

  const themeData = [
    {
        no:"01",
        tema:"Nenek Moyangku Juga Sekolah",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:theme1
    },
    {
        no:"02",
        tema:"Ini Warisan Dari Nenek Nala",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:theme1
    },
    {
        no:"03",
        tema:"Sekarang TV, Dulu Wayang",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:theme1
    },
    {
        no:"04",
        tema:"Nala Mau Jadi Kartini",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:theme1
    },
    {
        no:"05",
        tema:"Cerita Nala di Sekolah",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:theme1
    },
    {
        no:"06",
        tema:"Oh.... Medianya Lebih Moderen",
        description:"Lorem Ipsum dolor sit amet, consecteur adipiscing elit",
        img:theme1
    },
]

const filteredThemeData = themeData.filter((item, index) => index === slideIndex);

  const settings = {
    dots:true,
    speed: 500,
    infinite:true,
    className: "center",
    centerMode: true,
    centerPadding: "250px",
    slidesToShow: 3,
    slidesToScroll:3,
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div id='home-container'>
          <div className='nav-bar'>
            <div className='title'>
              <img src={Logo}/>
              <h3>Gredupedia</h3>

            </div>
            <div className='nav-link'>
              <p>Tentang</p>
              <p>Sponsors</p>
              <p>Gallery</p>
            </div>
          </div>

          <div className='home-content'>
            <div className='content-head'>
            <h1>GREDUPEDIA</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus nibh, aliquet eu neque ac, volutpat sodales risus. Pellentesque </p>
            <button>Pelajari Lebih Lanjut</button>
            </div>

            <div className='content-hero'>
              <img src={hero} />

            </div>
            
          </div>
      </div>

      <div id='about-container'>
        <div className='content-container'>
          <div className='vertical-slider'>

              <div class="about-card card1">Card 1</div>
              <div class="about-card card2">Card 2</div>
              <div class="about-card card3">Card 3</div>
              <div class="about-card card4">Card 4</div>
              <div class="about-card card5">Card 5</div>

            </div>
        
        
        
          <div className='about-content'>
              <h2>Tentang</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet in vitae iusto voluptates, ullam facere!</p>
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
            <p>{item.description}</p>
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
      </div>
    </>
  )
}

export default App
