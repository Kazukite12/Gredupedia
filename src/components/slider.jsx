
import React, { Component } from "react";
import Slider from "react-slick";
import dataTema from "../data.tema";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {dataTema.map((item)=> {
            <h1>{item.no}</h1>
        })}
      </Slider>
    </div>
  );
}

export default CenterMode;
