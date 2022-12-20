import React from "react";
import Carousel from "react-multi-carousel";
import "./index.css";
import SellSharpIcon from "@mui/icons-material/SellSharp";
import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import SpaSharpIcon from '@mui/icons-material/SpaSharp';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import Diversity1SharpIcon from '@mui/icons-material/Diversity1Sharp';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';

function WhyUs() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2300 },
      items: 3,
    },
    smalldesktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 2300, min: 1400 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 1024 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 2,
    },
  };



  const Static = [
    {
        title:"Competitive pricing",
        icon: SellSharpIcon
    },
    {
        title:"Our qualified, insured expert carpenters who worked with us for many years",
        icon: EngineeringSharpIcon
    },
    {
        title:"Big enough to specialise, small enough to care",
        icon: SpaSharpIcon
    },
    {
        title:"Flexible payment options including EasyPayment and Zero interest",
        icon: AccountBalanceSharpIcon
    },
    {
        title:"Pakistani family owned and operated for over 10 years",
        icon: Diversity1SharpIcon 
    },
    {
        title:"Dedicated customer support, 'underpromise, overdeliver' attitude",
        icon: SupportAgentSharpIcon
    },
  ]
  return (
    <div className="WhyUs">
        <h1 className="whyText">Why Choose Us</h1>
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

        {
            Static.map((elem)=>{
                return(
                    <div className="WhyBox">
                    <div className="whycircle">
                      <elem.icon className="Whyicons"/>
                
                    </div>
                    <p className="whyP" >{elem.title}</p>
                  </div>
          
                )
            })
        }
    


     

    
      </Carousel>
    </div>
  );
}

export default WhyUs;
