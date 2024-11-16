import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './MediaSlider.css';
import Gredu3 from "../assets/Gredu3.jpg"
import Gredu2 from "../assets/Gredu4.jpg"
import ProductDetail from "../dataDummy/product-detail";

export default function MediaSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Example media items - replace with your actual media content

  const [mediaItems, setMediaItems] = useState([])

  useEffect(()=> {
    setMediaItems(ProductDetail.media)
  },[])


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const renderMediaItem = (item, index) => {
    const [type, src] = item.split(' ');
    if (type === 'image') {
      return (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        />
      );
    } else if (type === 'video') {
      return (
        <iframe
          key={index}
          width="560" 
          height="315"
          src={src}
          title={`Video ${index + 1}`}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          frameborder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                     referrerpolicy="strict-origin-when-cross-origin" 
                     allowfullscreen
                     
        ></iframe>
      );
    }
    return null;
  };

  return (
    <div className="media-slider">
      <div className="slider-container">
        <div className="nav-button-container">

        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="nav-button prev" aria-label="Previous slide">
          <ChevronLeft className="icon" />
        </button>
        <button onClick={nextSlide} className="nav-button next" aria-label="Next slide">
          <ChevronRight className="icon" />
        </button>
        </div>

        {/* Media Items */}
        <div className="slides">
          {mediaItems.map((item, index) => renderMediaItem(item, index))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="pagination">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}