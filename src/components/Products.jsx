import React, { useEffect } from "react";
import "../css/products.css";
import Aos from "aos";

export default function Products() {
  useEffect(()=>{
    Aos.init({duration:500})
  },[])
  const products = [
    {
      product_img:
        require("../images/Dwellsmart_v9.png"),
      product_name: "3 Phase Meter",
    },

    {
      product_img:
        require("../images/1.png"),
      product_name: "3 Phase Meter",
    },

    // {
    //   product_img:
    //     "https://img.freepik.com/free-photo/hardhat-electrical-tools_23-2147743039.jpg?w=740&t=st=1699004596~exp=1699005196~hmac=101f23c2399bd454adf1d878dc3f40b67f404ebdc6390b9bdb0671321415192b",
    //   product_name: "1 Phase Meter",
    // }
  ];
  return (
    <>
      <div className="product-main-Div">
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Josefin Sans",
            margin: "40px 0px",
            fontSize:'1.5rem',
            borderBottom:'2px solid red',
          }}
          data-aos='fade-out'
        >
          Products
        </h1>
        <div className="container-fluid main-Div">
          {products.map((data, index) => (
            <div className=" product-container" data-aos='zoom-in'>
              <div key={index} className="product-card" data-aos='ease-in-out-quart'>
                <img style={{ height: "250px",width:'280px', borderRadius:'5px', objectFit:'cover' }} src={data.product_img} alt="img" />
                <h3>
                  {data.product_name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
