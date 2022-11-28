import React from "react";
import Contactimg from "../../content/contact.jpg";
import "./contact.css";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AddIcCallSharpIcon from "@mui/icons-material/AddIcCallSharp";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import FormCont from "../../components/Form/formCont";
import { SnackbarProvider } from "notistack";
import useMediaQuery from "@mui/material/useMediaQuery";

function Contact() {
  const matches = useMediaQuery("(max-width:650px)");
  return (
    <div className="contactMain">
      <div className="contactHero">
        <img
          height={600}
          className="contactImg"
          src={Contactimg}
          alt="vogueWood"
        />
        <h1>Contact Us</h1>
      </div>
      <div className="contactSemi">
        <div className="contactSemi2">
          <div className="contactDiv">
            <div className="detailChild">
              <LocationOnRoundedIcon
                sx={{ textAlign: "center" }}
                style={{
                  fontSize: matches ? "62px" : "42px",
                  color: "rgba(122, 83, 12, 1)",
                }}
              />
              <h3>Our Location</h3>
              <p>Plot 62 A, Block 2 Shah Faisal Colony, Karachi, Sindh 75230</p>
            </div>

            <div className="detailChild">
              <AddIcCallSharpIcon
                sx={{ textAlign: "center" }}
                style={{
                  fontSize: matches ? "62px" : "42px",
                  color: "rgba(122, 83, 12, 1)",
                }}
              />
              <h3>Call Us</h3>

              <p>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="tel:0343220625"
                >
                  {" "}
                  923432220625{" "}
                </a>
              </p>
              <p>
                {" "}
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="tel:03185896448"
                >
                  923185896448{" "}
                </a>
              </p>
            </div>

            <div className="detailChild">
              <MarkEmailUnreadRoundedIcon
                sx={{ textAlign: "center" }}
                style={{
                  fontSize: matches ? "62px" : "42px",
                  color: "rgba(122, 83, 12, 1)",
                }}
              />
              <h3>Our Email</h3>
              <p>thevoguewood@gmail</p>
            </div>
          </div>

          <div style={{ width: "90%", margin: "auto" }}>
            <h3 style={{textAlign:"center",marginBottom:"20px"}}>Send Us A Message</h3>
            <SnackbarProvider maxSnack={3}>
              <FormCont />
            </SnackbarProvider>
          </div>
        </div>

        <div className="contactSemi1">
          {matches ? (
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                title="vogue wood map"
                  className="gmap_iframe"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=295&height=400&hl=en&q=Plot 62 A, Block 2 shah faisal colony Street No. 2, Karachi, 75230&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                />
                <a href="https://formatjson.org/">format json</a>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".mapouter{position:relative;text-align:right;width:295px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:295px;height:400px;}.gmap_iframe {width:295px!important;height:400px!important;}",
                }}
              />
            </div>
          ) : (
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                title="vogue wood map"
                  className="gmap_iframe"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=plot 62 A, block 2 shah faisal colony &t=&z=14&ie=UTF8&iwloc=B&output=embed"
                />
                <a href="https://piratebay-proxys.com/">Piratebay</a>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
