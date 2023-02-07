import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";

//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//icons
import { GrNext, GrPrevious } from "react-icons/gr";

const Landing = () => {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <GrNext />,
    prevArrow: <GrPrevious />
  };

  return (
    <div className={styles.landingContainer}>
      <Slider {...settings}>
        <div className={styles.div1}>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Landing;
