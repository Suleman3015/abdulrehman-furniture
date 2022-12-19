import React,{useEffect} from "react";
import "./index.css";
import Button from "../reusable-componnent/button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Aos from "aos";
import "aos/dist/aos.css";



function Experience() {
  const matches = useMediaQuery("(max-width:500px)");
  const matcheTab = useMediaQuery("(max-width:1000px)");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Experience">
      <div 
       data-aos-duration="500"
      data-aos="fade-up" className="ExOne">
        <h2>Over 10 Years Of Experience</h2>
        <p>
          We would love to work with homeowners who are planning on renovating
          their living room & kitchen
        </p>

        <Button href="/" Wid={matches ? "60%" : matcheTab ? "50%": "30%" } Text="Why Choose Us"/>
      </div>

    </div>
  );
}

export default Experience;
