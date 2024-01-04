import React, { useEffect } from "react";
import '../css/WhyChooseDwellSMART.css';
import Aos from "aos";

const WhyChooseDwellSMART = () => {
  const cardData = [

    {icon:'🔍',
      title:'Expertise that Matters',
      description:'With years of expertise in the energy sector, our team comprises seasoned professionals dedicated to revolutionizing the way we consume and manage energy. We bring a wealth of knowledge to every project, ensuring our clients benefit from the latest advancements in smart metering technology.'
    },

    {icon:'🏆',
      title:'Leaders in Smart Energy Solutions',
      description:'At DwellSMART, we stand at the forefront of innovation, delivering cutting-edge smart energy solutions to empower businesses and homeowners alike. Here why choosing DwellSMART is a decision that aligns with a sustainable, efficient, and intelligent future.'
    },

    {icon:'💡',
      title:'Innovative Products, Tailored Solutions',
      description:'DwellSMART takes pride in offering a diverse range of smart energy solutions designed to meet the unique needs of our clients. From advanced smart meters to comprehensive energy analytics, our products are at the forefront of the industry, providing real-time insights and actionable data.'
    },
    {icon:'🍃',
      title:'Commitment to Sustainability',
      description:'We are driven by a commitment to creating a sustainable future. DwellSMART solutions go beyond efficiency – they contribute to a greener world. By optimizing energy consumption and reducing waste, we help businesses and individuals lower their environmental impact while enjoying cost savings.'
    },
  ];

  useEffect(()=>{
    Aos.init({ duration: 3000 });
  },[]);
  return (
    <section className="why-choose-container">
      <h1 data-aos='slide-right' className="why-choose-title">Why Choose DwellSMART</h1>
      <div className="card-container">
        {cardData.map((data,index)=>{
          return <div data-aos='zoom-in' key={index} className="card">
          <div className="card-icon">{data.icon}</div>
          <div className="card-content">
            <h3 className="card-title">{data.title}</h3>
            <p className="card-description">
              {data.description}
            </p>
          </div>
        </div>
        })}

        

        {/* <div className="card">
          <div className="card-icon">🏆</div>
          <div className="card-content">
            <h3 className="card-title">Leaders in Smart Energy Solutions</h3>
            <p className="card-description">
              At DwellSMART, we stand at the forefront of innovation, delivering cutting-edge smart energy solutions to empower businesses and homeowners alike. Here's why choosing DwellSMART is a decision that aligns with a sustainable, efficient, and intelligent future.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">🔍</div>
          <div className="card-content">
            <h3 className="card-title">Expertise that Matters</h3>
            <p className="card-description">
              With years of expertise in the energy sector, our team comprises seasoned professionals dedicated to revolutionizing the way we consume and manage energy. We bring a wealth of knowledge to every project, ensuring our clients benefit from the latest advancements in smart metering technology.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseDwellSMART;

