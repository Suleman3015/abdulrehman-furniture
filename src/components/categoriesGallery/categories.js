import React ,{useEffect} from "react"
import "./categories.css";
import {Typography} from "@mui/material"
import Bed from "../../content/categories/bed.jpg"
import Sofe from "../../content/categories/sofa.jpg"
import Dining from "../../content/categories/dining.jpg"
import OfficeChair from "../../content/categories/officechair.jpg"
import StudyTable from "../../content/categories/studytable.jpg"
import Table from "../../content/categories/tables.jpg"
import Dresser from "../../content/categories/dresser.jpg"
import WARDROBES from "../../content/categories/wardrobes.jpg"
import Bunked  from "../../content/categories/bunkbed.jpg"
import BookShel from "../../content/categories/bookshelves.jpg"
import Kitchen from "../../content/categories/kitchen.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import Aos from "aos"
import "aos/dist/aos.css"






function Categories() {

  useEffect(()=>{
    Aos.init({duration:2000})
},[])




  const matches = useMediaQuery('(max-width:600px)');
 
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
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

      
    <div data-aos="fade-up" className="main">
        <Typography 
        style={{
          fontSize: matches === true ? "5vw" : "28px",
          letterSpacing:"1px",
            fontWeight: "600",
            fontFamily:"'Alegreya SC', serif",
            margin:"auto auto 10px auto",
            // color:"rgb(54, 69, 79)"
        }} 
        
        className="mainTypo">Procure By Categories</Typography>
      <Carousel responsive={responsive}>
        
      <div style={{overflow:"hidden",height:"100%"}}>

        <div  className="boxes">
            <Typography style={{
              fontSize:"25px",
              letterSpacing:"2px",
              fontFamily:"'Alegreya SC', serif",
            }} className="Typo"> Beds</Typography>
        <img alt="furniture" className="img" src={Bed} />
        </div>
        </div>

        <div style={{overflow:"hidden",height:"100%"}}>
        <div className="boxes">
        <Typography style={{
              fontSize:"25px",
              letterSpacing:"2px",
              fontFamily:"'Alegreya SC', serif",}} className="Typo" > Sofas</Typography>
        <img alt="furniture" className="img" src={Sofe} />
        </div>
        </div>


        <div style={{overflow:"hidden",height:"100%"}}>
        <div className="boxes">
        <Typography style={{
              fontSize:"25px",
              letterSpacing:"2px",
              fontFamily:"'Alegreya SC', serif",}} className="Typo"> Dining Tables</Typography>
        <img alt="furniture"className="img" src={Dining} />
        </div>
        </div>
      
        <div style={{overflow:"hidden",height:"100%"}}>
        <div className="boxes">
        <Typography style={{
              fontSize:"25px",
              letterSpacing:"2px",
              fontFamily:"'Alegreya SC', serif",}} className="Typo"> Office Chairs</Typography>
        <img alt="furniture" className="img" src={OfficeChair} />
        </div>
        </div>

        <div style={{overflow:"hidden",height:"100%"}}>
        <div className="boxes">
        <Typography style={{
              fontSize:"25px",
              letterSpacing:"2px",
              fontFamily:"'Alegreya SC', serif",}} className="Typo"> Stydy Tables</Typography>
        <img alt="furniture" className="img" src={StudyTable} />
        </div>
        </div>
        
        <div style={{overflow:"hidden",height:"100%"}}>
        <div className="boxes">
        <Typography style={{
              fontSize:"25px",
              letterSpacing:"2px",
              fontFamily:"'Alegreya SC', serif",}} className="Typo"> Tables</Typography>



        <img alt="furniture" className="img" src={Table} />
        
        
        </div>
        </div>

        <div style={{overflow:"hidden",height:"100%"}}>
        <div className="boxes">
        <Typography style={{
              fontSize:"25px",
              letterSpacing:"2px",
              fontFamily:"'Alegreya SC', serif",}} className="Typo"> Dressers</Typography>
        <img alt="furniture" className="img" src={Dresser} />
        </div>
        </div>

        <div style={{overflow:"hidden",height:"100%"}}>
        <div className="boxes">
        <Typography style={{
              fontSize:"25px",
              letterSpacing:"2px",
              fontFamily:"'Alegreya SC', serif",}} className="Typo"> Wardrobes</Typography>
        <img alt="furniture" className="img" src={WARDROBES} />
        </div>
        </div>

        <div style={{overflow:"hidden",height:"100%"}}>
        <div className="boxes">
        <Typography style={{
              fontSize:"25px",
              letterSpacing:"2px",
              fontFamily:"'Alegreya SC', serif",}} className="Typo"> Bunk Beds</Typography>
        <img alt="furniture" className="img" src={Bunked} />
        </div>
        </div>

        <div style={{overflow:"hidden",height:"100%"}}>
        <div className="boxes">
        <Typography style={{
              fontSize:"25px",
              letterSpacing:"2px",
              fontFamily:"'Alegreya SC', serif",}} className="Typo"> Book Shelves</Typography>
        <img alt="furniture" className="img" src={BookShel} />
        </div>
        </div>

        <div style={{overflow:"hidden",height:"100%"}}>
        <div className="boxes">
        <Typography style={{
              fontSize:"25px",
              letterSpacing:"2px",
              fontFamily:"'Alegreya SC', serif",}} className="Typo"> Kitchen Cabinets</Typography>
        <img alt="furniture" className="img" src={Kitchen} />
        </div>
        </div>
        </Carousel>
      {/* </div> */}
    </div>
   
  );
}

export default Categories;
