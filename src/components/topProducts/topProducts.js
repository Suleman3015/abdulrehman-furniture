import React,{useEffect} from "react";
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
import Aos from "aos";
import "aos/dist/aos.css";


function TopProducts() {
    const matches = useMediaQuery("(max-width:600px)");
    useEffect(() => {
        Aos.init({ duration: 2500 });
      }, []);
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
          breakpoint: { max: 1024, min: 1024 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1
        }
      };
  return (
    <div className="topProductsMain">
      <Typography
        data-aos="fade-up"
        data-aos-duration="1000"
        style={{
          fontSize: matches === true ? "5vw" : "28px" ,
          letterSpacing:"1px",
          fontWeight: "600",
          fontFamily:"'Alegreya SC', serif",
          margin: "auto auto 10px auto",
          textAlign: "center",
          // color:"rgb(54, 69, 79)"
          
        }}
        className="mainTypo"
      >
    Top Deals
      </Typography>


      <div  data-aos="fade-right"  style={{marginTop:"2vw"}} className="topProductsSemiMain">
      <Carousel responsive={responsive}>

      <div  className="productsBox">
            <img alt="voguewood" src={HotItem2} height={200}/>
            <Typography style={{
                   textAlign:"center",
                   margin:"20px",
                   color:"rgb(54, 69, 79)",
                   fontSize: "22px",
                   fontFamily: "Libre Baskerville , serif",
                   lineHeight: "45px", 
                   textShadow: "0 1px 1px #fff",
            }}>Stylish Console</Typography>

        </div>

        
        <div   className="productsBox">
            <img 
            className="productImg"
            alt="voguewood" src={HotItem} height={200}/>
            <Typography style={{
                textAlign:"center",
                margin:"20px",
                color:"rgb(54, 69, 79)",
                fontSize: "22px",
                fontFamily: "Libre Baskerville , serif",
                lineHeight: "45px", 
                textShadow: "0 1px 1px #fff",
            }}>Wooden Lamp</Typography>

        </div>

       

        <div  className="productsBox">
            <img alt="voguewood" src={HotItem3} height={200}/>
            <Typography style={{
                   textAlign:"center",
                   margin:"20px",
                   color:"rgb(54, 69, 79)",
                   fontSize: "22px",
                   fontFamily: "Libre Baskerville , serif",
                   lineHeight: "45px", 
                   textShadow: "0 1px 1px #fff",
            }}>Wooden Chair</Typography>

        </div>

        <div   className="productsBox">
            <img alt="voguewood" src={HotItem4} height={200}/>
            <Typography style={{
                  textAlign:"center",
                  margin:"20px",
                  color:"rgb(54, 69, 79)",
                  fontSize: "22px",
                  fontFamily: "Libre Baskerville , serif",
                  lineHeight: "45px", 
                  textShadow: "0 1px 1px #fff",
            }}>Bed Side Table </Typography>

        </div>

        <div  className="productsBox">
            <img alt="voguewood" src={HotItem5} height={200}/>
            <Typography style={{
                  textAlign:"center",
                  margin:"20px",
                  color:"rgb(54, 69, 79)",
                  fontSize: "22px",
                  fontFamily: "Libre Baskerville , serif",
                  lineHeight: "45px", 
                  textShadow: "0 1px 1px #fff",
            }}>Bed Side Console</Typography>

        </div>
        </Carousel>
      </div>


    </div>
  );
}

export default TopProducts;
