import React from "react";
import FormCont from "./formCont";
import "./form.css";
import Contactus from "../../content/2733.png";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";

const ContactUs = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2300 },
      items: 1,
    },
    smalldesktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 2300, min: 1400 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 1024 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  const Static = [
    {
      title: " We listen",
    },
    {
      title: " We involve our customers",
    },

    {
      title: " We discuss",
    },

    {
      title: " We respond",
    },

    {
      title: "  We succeed",
    },
  ];

  return (
    <div className="formContainer">
      {/* <div> */}
      <div className="formcont">
        <h1 className="formH1">Contact Us</h1>
        <>
          <Carousel
            infinite={true}
            removeArrowOnDeviceType={[
              "tablet",
              "mobile",
              "desktop",
              "smalldesktop",
              "superLargeDesktop",
            ]}
            autoPlay="true"
            autoPlaySpeed={3000}
            responsive={responsive}
    
          >
            {Static.map((title) => {
              return <h2 style={{textAlign:"center",marginBottom:"15px",color:"#818589"}}>{title.title}</h2>;
            })}
          </Carousel>
        </>
        <FormCont />
      </div>
      <img
        alt="vogue wood"
        className="formImage"
        height={420}
        src={Contactus}
      />
      {/* </div> */}
    </div>
  );
};

export default ContactUs;
