import React, { useEffect } from "react";
import "../css/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact_form from "./Contact_form";
import Residential_icon from "../images/residential-icon.svg";
import Commertial_icon from "../images/commertial-icon.svg";
import WhyChooseDwellSMART from "./WhyChooseDwellSMART";
import { useNavigate } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();

  function handleSoftware() {
    navigate("/services");
  }
  return (
    <div className="container-fluid homeMainDiv">
      <marquee behavior="scroll" direction="left">Under Development</marquee>
      <div className="container-fluid row heroDiv">
        <div className="container-fluid row heroDivInside">
          <div className="col div1">
            <h2 className="energise">
              Energize Your Tomorrow with <br />
              <span className="brandName" data-text="DwellSMART">
                DwellSMART
              </span>
            </h2>
            <p>
              At DwellSMART, we're dedicated to revolutionizing the energy
              landscape. Our advanced energy measurement products redefine
              efficiency and sustainability, offering precision solutions for
              utilities globally. Explore a future where every watt counts,
              shaping a greener world for generations to come.
            </p>

            <button className="btn exploreBtn">Schedule demo</button>
          </div>
        </div>
      </div>

      <div className="row div3">
        <h2 data-aos="fade-in">
          Smart energy solutions for a brighter and <span style={{color:"green"}}>greener</span> future.
        </h2>
        <p data-aos="fade-out">
          At <span style={{color:"#b3d661", fontWeight:'bolder'}}>DwellSMART</span>, we're on a mission to create a greener and brighter
          future through innovative smart energy solutions. Our commitment is
          rooted in the belief that every bit of power contributes to a
          sustainable tomorrow. By joining our community, you become a vital
          part of shaping a cleaner and more energy-efficient world. At the core
          of our approach is the relentless pursuit of cutting-edge
          technologies, from solar solutions to energy-efficient appliances.
          We're not just about products; we're dedicated to fostering awareness
          through outreach and education, empowering individuals to make
          eco-conscious choices. Together, let's pioneer a future filled with
          limitless possibilities and a legacy of environmental stewardship.
        </p>
      </div>

      <div className="row ourProducts">
        <h1 data-aos="fade-in" className="ourProductTitle">
          Our Products
        </h1>
        <div className="hr"></div>
        <div className="row content">
          <div data-aos="fade-in" className="col-lg-3 product">
            <img src={require("../images/Dwell-meter.png")} alt="img" />
            <h2>Single Phase Meter</h2>
            <p>suitable for residential and commertial</p>
            <button className="btn">Learn More</button>
          </div>

          <div className="col-lg-3 product">
            <img src={require("../images/Dwell-meter.png")} alt="img" />
            <h2>3 Phase Meter</h2>
            <p>suitable for residential and commertial</p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>

      <WhyChooseDwellSMART />

      <div className="softwareDiv">
        <h1 data-aos="slide-left">Our Software</h1>
        <intro data-aos="zoom-out">
          WavePLUS is an IoT (internet of Things) based ESTATE Management Suite
          which is hosted in cloud and has a fully integrated Prepaid Energy
          Metering system. WavePLUS is not just another online society
          management software, it is an ESTATE Management Suite which is fully
          integrated with SMART Energy Management System. It can read the energy
          metering systems remotely and manage the comprehensive billing for
          utility & other maintenance charges automatically, thereby offering
          property owners & managers of multi-family Estates and Commercial
          Communities a reduced total estate management cost. Moreover, our
          engineers have decoupled the prepaid metering logic with the energy
          meters so that the real estate builder do no need to procure the
          costly prepaid energy meters in order to have prepaid energy metering
          implemented.
        </intro>
        <button onClick={handleSoftware} className="btn">
          Explore
        </button>
      </div>

      <div className="row servicesDiv">
        <h1 data-aos="zoom-in">Our Services</h1>
        <div className="services">
          <div className="div1">
            <div className="text">
              <img src={Residential_icon} />
              <h2>Residential</h2>
            </div>
          </div>

          <div className="div2">
            <div className="text">
              <img src={Commertial_icon} />
              <h2>Commertial</h2>
            </div>
          </div>
        </div>
      </div>

      <Contact_form />
    </div>
  );
}
