import React from "react";
import FormCont from "./formCont";
import "./form.css"
import Contactus from "../../content/273.jpg"

const ContactUs = () => {

  return (
    <div className="formContainer">
      {/* <div> */}
      <div className="formcont">
        <h1 className="formH1">Contact Us</h1>
        <FormCont/>

    </div>
    <img alt="vogue wood" className="formImage" height={400} src={Contactus} />
    {/* </div> */}
    </div>

  );
};

export default ContactUs;
