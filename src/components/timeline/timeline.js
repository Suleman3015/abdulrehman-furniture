import  React,{useEffect} from "react";
import "./timeline.css"
import Truck2 from "../../content/truck2.jpg"
import Service from "../../content/service.jpg"
import Offer from "../../content/offer.jpg"
import Aos from "aos"
import "aos/dist/aos.css"

function Timelines() {

  useEffect(()=>{
    Aos.init({duration:2000})
},[])



  return (
    <div className="timeLineContainer">
    <div className="timelineMain"
    >

<div   className="timeLineBox">
      {/* <img alt="voguewood" src={HotItem2} height={200}/> */}
      <img
      alt="vogue wood"
       data-aos="fade-up"
      src={Truck2}
      className="timelineImg"
    
      />

      <div data-aos="fade"  className="timelineTypo">
 <h1 className="headingh2"> Free Delivery </h1>
      <p className="timelinePara">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      </p>
      </div>
      </div>

   

      <div className="timeLineBox">
      {/* <img
      alt="vogue wood" alt="voguewood" src={HotItem2} height={200}/> */}
      <img
      alt="vogue wood"
       data-aos="fade-up"
      src={Service}
      className="timelineImg"
      />

      <div   data-aos="fade" className="timelineTypo">
 <h1 className="headingh2"> Service </h1>
      <p className="timelinePara">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      </p>
      </div>
      </div>

      <div className="timeLineBox">
      {/* <img
      alt="vogue wood" alt="voguewood" src={HotItem2} height={200}/> */}
      <img
      alt="vogue wood"
       data-aos="fade-up"
      src={Offer}
      className="timelineImg"
      />

      <div data-aos="fade" className="timelineTypo">
 <h1 className="headingh2"> Offers</h1>
      <p className="timelinePara">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      </p>
      </div>
      </div>
    

    </div>
    
</div>
  );
}

export default Timelines;


