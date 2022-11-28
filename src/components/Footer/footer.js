import { Typography } from "@mui/material";
import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footerimg from "../../content/footer.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faPhone , faLocationDot,} from '@fortawesome/free-solid-svg-icons'
import What from "../../content/whats.png"
function Footer() {
  const matches = useMediaQuery("(max-width:800px)");
  const matchesmini = useMediaQuery("(max-width:600px")
  return (
    <div className="mainFooter">
      <img alt="voguewood" className="footerimg" src={Footerimg} />
      <div className="semiFooter">
      <div className="semiMainFooter">
        <div className="footerContainer">
          <Typography
            style={{
              fontFamily: "'Alegreya SC', serif",
              fontSize: matches === true ? "12px" : "22px",
              fontWeight: "bold",
              letterSpacing: "0.5px",
              color:"lightgray",
            }}
          >
            Vogue Wood
          </Typography>
       
          <p className="footerPara">
            We specialize in classy Home Furniture, Home Decor, Office Furniture
            and Living solutions, we have the skill to give the dream furniture
            at the lowest price. A lot of care is taken to ensure that the
            quality is not compromised. We have a very good relationship with
            top wood providers of Pakistan + our own factory where all furniture
            is made by hand with great care on order
          </p>
        </div>

        <div className="footerContainer">
          <Typography
            style={{
              fontFamily: "'Alegreya SC', serif",
              fontSize: matches === true ? "12px" : "22px",
              fontWeight: "bold",
              letterSpacing: "0.5px",
              color:"lightgray",
            }}
          >
            Contact Us
          </Typography>
          <a href="/" className="footerA">
          <FontAwesomeIcon className="footerIcons" icon={faLocationDot} />
           plot 62 A, Block 2 S.F.C, Karachi, Sindh 75230
          </a>
          
          <a href="/" className="footerA">
          <FontAwesomeIcon className="footerIcons" icon={faPhone} />
            923432220625
          </a>
          <div className="whatsappCont" style={{marginTop:matchesmini === true ? "5px" :"12px"}}>
          <img alt="voguewood" src={What} height={matches === true ? 12 :18} style={{marginRight:"7px"}} />
          <a href="/" className="footerAA">
      
            923185896448
          </a>
          </div>
          <a href="/" className="footerA">
          <FontAwesomeIcon className="footerIcons" icon={faEnvelope} />
           thevoguewood@gmail.com
          </a>
          
          {/* <a href="/" className="footerA">
            923208978653
          </a> */}
        
        </div>
        <div className="footerContainer">
          <Typography
            style={{
              fontFamily: "'Alegreya SC', serif",
              fontSize: matches === true ? "12px" : "22px",
              fontWeight: "bold",
              color:"lightgray",
              letterSpacing: "0.5px",
            }}
          >
            Company
          </Typography>
          <a href="/" className="footerA">
            About Us
          </a>
          <a href="/" className="footerA">
            Contact Us
          </a>
          <a href="/" className="footerA">
            Categories
          </a>
        </div>
        <div className="footerContainerSocial">
          <Typography
            style={{
              fontFamily: "'Alegreya SC', serif",
              fontSize: matches === true ? "12px" : "22px",
              fontWeight: "bold",
              letterSpacing: "0.5px",
              textAlign:"center",

              color:"lightgray",
            }}
          >
            Follow Us
          </Typography>
          <div className="footerIcon">
            <a href="https://m.facebook.com/Thevoguewood/">
            <FacebookIcon className="footerSocial" />
            </a>

<a href="https://instagram.com/vogue_.wood?r=nametag
">
            <InstagramIcon className="footerSocial" />
            </a>

            <YouTubeIcon className="footerSocial" />
          
          </div>
        </div>
      
      </div>
      <Typography className="copyright">© 2022 Vogue Wood</Typography>
      </div>
    </div>
  );
}

export default Footer;
