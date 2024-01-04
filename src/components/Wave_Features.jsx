import React from "react";
import Screen1 from "../images/Screen1.png";
import Screen2 from "../images/Screen2.png";
import Screen3 from "../images/Screen3.png";
import Screen4 from "../images/Screen4.png";

import CC from "../images/credit_card.svg";
import Live from "../images/livedata.svg";
import Reciept from "../images/receipt.svg";
import "../css/wave_features.css";

export default function Wave_Features() {
  const data = [
    {
      icon: CC,
      title: "Consumption Trends",
      body: "Effortlessly monitor your available balance and track daily, weekly, and monthly energy consumptions with just a click, a seamless way to stay in control of your energy usage.",
      img: Screen1,
    },
    {
      icon: Reciept,
      title: "Statements",
      body: "Understand and manage your energy consumption effortlessly with our clear and concise monthly statements. Dive into detailed insights, track your usage, and plan for a greener future all in one place. Because when it comes to your energy, every detail matters for a smarter tomorrow.",
      img: Screen2,
    },
    {
      icon: Live,
      title: "Live Data Reading",
      body: "Experience the power of real time insights with our live data reading feature. Monitor your energy consumption instantaneously, empowering you to make informed decisions for a more efficient and sustainable lifestyle.",
      img: Screen3,
    },
    {
      icon: CC,
      title: "Online Recharge",
      body: "Recharge your smart energy meter online effortlessly with our user-friendly platform. Ensure uninterrupted power and control at your fingertips—simple, secure, and in tune with your energy needs.",
      img: Screen4,
    },
  ];
  return (
    <div className="conatiner-fluid mainDiv">
      {data.map((data, index) => (
        <div
          key={index}
          className="Feature-div"
        >
          {index % 2 === 0 ? (
            <div className="div1">
              <h1>{data.title}</h1>
              <p>{data.body}</p>
            </div>
          ) : (
            <img src={data.img} alt="img" />
          )}
          {index % 2 === 0 ? (
            <img src={data.img} alt="img" />
          ) : (
            <div className="div1">
              <h1>{data.title}</h1>
              <p>{data.body}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
