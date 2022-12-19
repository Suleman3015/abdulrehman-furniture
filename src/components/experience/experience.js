import React from "react";
import "./index.css";
import Button from "../reusable-componnent/button";
import useMediaQuery from "@mui/material/useMediaQuery";



function Experience() {
  const matches = useMediaQuery("(max-width:500px)");
  const matcheTab = useMediaQuery("(max-width:1000px)");
  return (
    <div className="Experience">
      <div className="ExOne">
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
