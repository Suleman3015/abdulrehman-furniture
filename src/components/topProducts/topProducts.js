import React from "react";
import {Typography} from "@mui/material"

import "./topProducts.css"
import useMediaQuery from "@mui/material/useMediaQuery";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HotItem from "../../content/hotItem.jpg"
import HotItem2 from "../../content/hotItem2.jpg"
import HotItem3 from "../../content/hotItem3.jpg"
import HotItem4 from "../../content/hotItem4.jpg"
import HotItem5 from "../../content/hotItem5.jpg"


function TopProducts() {
    const matches = useMediaQuery("(max-width:600px)");
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 3000, min: 2300 },
          items: 5
        },
        smalldesktop: {
          breakpoint: { max: 1400, min: 1024 },
          items: 2.5
        },
        desktop: {
            breakpoint: { max: 2300, min: 1400 },
            items: 3
          },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="topProductsMain">
      <Typography
        data-aos="fade-up"
        data-aos-duration="1000"
        style={{
          fontSize: matches === true ? "5vw" : "2vw",
          // marginBottom:"10px",
          fontWeight: "600",
          margin: "auto auto 10px auto",
          textAlign: "center",
        }}
        className="mainTypo"
      >
        Customer Reviews
      </Typography>


      <div style={{marginTop:"2vw"}} className="topProductsSemiMain">
      <Carousel responsive={responsive}>
        <div className="productsBox">
            <img alt="voguewood" src={HotItem} height={200}/>
            <Typography style={{
                textAlign:"center",
                margin:"20px"
            }}>product name</Typography>

        </div>

        <div className="productsBox">
            <img alt="voguewood" src={HotItem2} height={200}/>
            <Typography style={{
                textAlign:"center",
                margin:"20px"
            }}>product name</Typography>

        </div>

        <div className="productsBox">
            <img alt="voguewood" src={HotItem3} height={200}/>
            <Typography style={{
                textAlign:"center",
                margin:"20px"
            }}>product name</Typography>

        </div>

        <div className="productsBox">
            <img alt="voguewood" src={HotItem4} height={200}/>
            <Typography style={{
                textAlign:"center",
                margin:"20px"
            }}>product name</Typography>

        </div>

        <div style={{margin:"15px"}} className="productsBox">
            <img alt="voguewood" src={HotItem5} height={200}/>
            <Typography style={{
                textAlign:"center",
                margin:"20px"
            }}>product name</Typography>

        </div>
        </Carousel>
      </div>


    </div>
  );
}

export default TopProducts;
