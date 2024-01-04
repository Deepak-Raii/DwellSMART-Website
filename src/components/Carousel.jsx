import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/carousel.css";

export default function Carousell() {
  return (
    <Carousel
      className="mainCarousel container-fluid"
      autoPlay
      infiniteLoop
      stopOnHover={true}
      showThumbs={false}
    >
      <div className="carousel">
        <div className="title">
          <h2>Seamless Online Recharge for Your Smart Energy Meter</h2>
        </div>
        <img src={require("../images/online-recharge.jpg")} alt="img" />
      </div>
      <div className="carousel">
        <div className="title">
          <h2>Watch Your Energy Usage in Real-Time</h2>
        </div>
        <img src={require("../images/live.png")} alt="img" />
      </div>
      <div className="carousel">
        <div className="title">
          <h2>Unlocking Energy Efficiency Through Consumption Statements</h2>
        </div>
        <img src={require("../images/statements.jpg")} alt="img" />
      </div>
    </Carousel>
  );
}
