import React from "react";
import "./brandsWeCarry.css";
import { BrandsList } from "../../static/brands.static";
import useMediaQuery from '@mui/material/useMediaQuery';


function BrandWeCarry() {
  const matches = useMediaQuery('(max-width:550px)');
  const matchesPhone = useMediaQuery('(max-width:1400px)');
  return (
    <div className="brandsMain">
      {
        matches ? 
        <h2 className="brandText">Brands We Carry</h2>
        :
        <h1 className="brandText">Brands We Carry</h1>
      }
    

      <div className="brandsWeCarryContainer">
        {BrandsList.map((brands) => {
          return (
            <div className="brandsWeCarryBoxes">
              <img alt="vogue wood" height={  matches ? 130 :matchesPhone? 100 : 160} src={brands.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BrandWeCarry;
