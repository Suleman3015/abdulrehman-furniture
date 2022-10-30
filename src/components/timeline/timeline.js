import React, { useEffect } from "react";
import "./timeline.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { timelineStatic } from "../../static/timeline.static";

function Timelines() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="timeLineContainer">
      <div className="timelineMain">
        {timelineStatic.map((timeline) => {
          return (
            <div className="timeLineBox">
              {/* <img alt="voguewood" src={HotItem2} height={200}/> */}
              <img
                alt="vogue wood"
                data-aos="fade-up"
                src={timeline.img}
                className="timelineImg"
              />

              <div data-aos="fade" className="timelineTypo">
                <h1 className="headingh2"> {timeline.head} </h1>
                <p className="timelinePara">{timeline.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timelines;
