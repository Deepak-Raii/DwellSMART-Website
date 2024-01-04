import React, { useEffect } from "react";
import "../css/services.css";
import Aos from "aos";
import features from "../wave-features";
import Carousel from "./Carousel";
import Wave_Features from "./Wave_Features";
import Playstore from "../images/google-playstore.svg";
import Appstore from "../images/apple.svg";

export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div className="container-fluid services-Main-Div">
      <Carousel />
      {/* <div className="hrrr"></div> */}

      <div className=" services-Div">
        <div className="wave-intro-mainDiv">
          <div className="row wave-intro">
            <h1>
              Introducing <span className="brandName">DwellSMART</span> Mobile
              App
            </h1>
            <h4>Take Control of Your Energy Usage</h4>
            <p>
              At DwellSMART, we understand the importance of seamless energy
              management. That's why we bring you the DwellSMART Mobile App, a
              powerful tool designed to enhance your control over your energy
              meter and elevate your overall experience.
            </p>
          </div>
        </div>

        <div className="aboutWave">
          <h1>
            <span className="waveName">WavePLUS</span> <br /> An Smart
            Application
          </h1>
          <p>
            At DwellSMART, we understand the importance of seamless energy
            management. That's why we bring you the DwellSMART Mobile App, a
            powerful tool designed to enhance your control over your energy
            meter and elevate your overall experience.
          </p>
          <div className="devices">
            <img className="img" src={require('../images/Screen1.png')}/>
            <img className="imgMiddle"  src={require('../images/Screen2.png')}/>
            <img className="img"  src={require('../images/Screen3.png')}/>
          </div>

          <div className="keyFeaturesDiv">
            <h2>Key Features</h2>
          </div>
        </div>

        <Wave_Features />

        <div className=" service-Card-Div">
          <div className="service-card" data-aos="slide-right">
            <h4>For new and upcoming Real Estate Projects</h4>
            <p>
              Get Wave+ along with the advanced energy meters and Home Display
              Units from DwellSMART's product portfolio. Elevate your projects
              with cutting-edge efficiency and smart technology, setting new
              standards in sustainable living and modern convenience.
            </p>
          </div>
          <div className="service-card" data-aos="slide-left">
            <h4>For existing Estates with Automatic Meter Reading System</h4>
            <p>
              Switch to Wave+, our experts can explore the feasibility to
              integrate Wave+ with your existing Energy meters thereby reducing
              the risk and cost of complete overhauling.
            </p>
          </div>
          <div className="service-card" data-aos="slide-right">
            <h4>
              For existing Estates without Automatic Meter Reading System{" "}
            </h4>
            <p>
              Get Wave+ without AMR, just gather the energy consumption in
              simple excel file and still enjoy all the features of the Estate
              Management Suite.
            </p>
          </div>
        </div>

        <div className=" features-Div">
          {features.map((data, index) => (
            <div className="features-card" key={index}>
              <img className="imgg" src={data.image} alt="img" />
              <h4>{data.title}</h4>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="downloadDiv">
        <div className="storeDiv">
          <h2>Download the app now</h2>
          <p>
            We believe in putting the power of energy management directly into
            your hands. With our user-friendly mobile app, you can effortlessly
            manage your energy meter, ensuring a seamless and efficient
            experience.
          </p>
          <div className="link">
            <img className="img" src={Playstore} alt="playstore" />
            <img className="img" src={Appstore} alt="appstore" />
          </div>
        </div>
        <img src={require("../images/Screen1.png")} alt="img" />
      </div>
    </div>
  );
}
