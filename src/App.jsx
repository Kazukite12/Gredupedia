import { useState,useEffect } from 'react'
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
    centerPadding: "250px",
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
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: "5px",
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
    <div className={sticky?"nav-bar-sticky":"nav-bar"}>
      <div className='nav-container'>
            <div className='title'>
              <img src={Logo}/>
              <h3>Gredupedia</h3>

            </div>
            <div className='nav-link'>
              <p>Tentang</p>
              <p>Sponsors</p>
              <p>Gallery</p>
            </div>
            <div className='burger-nav'>
              <div></div>
              <div></div>
              <div></div>
            </div>
      </div>
            
          </div>
      <div id='home-container'>
          

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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente pariatur maxime nam omnis eveniet ea debitis alias dolor et, hic impedit. Reprehenderit molestias temporibus harum rerum? Voluptates, nobis error quos adipisci mollitia earum est asperiores quas natus laboriosam necessitatibus velit consectetur doloremque sint illum nulla qui reiciendis repudiandae! A!</p>
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
    </div>
  )
}

export default App
