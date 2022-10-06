import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Truck from "../../content/icons/truck.png";
import Furniture from "../../content/icons/furniture.png";
import useMediaQuery from "@mui/material/useMediaQuery";
function Timelines() {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {/* 9:30 am */}
          </TimelineOppositeContent>
          <TimelineSeparator
            sx={{
              height: matches === true ? "50vw" : "15vw",
            }}
          >
            <TimelineConnector />
            <TimelineDot>
              {/* <LocalShippingIcon style={{color:"#66471d"}} /> */}
              <img alt="vogue wood" height={50} src={Truck} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              fontFamily={"serif"}
              variant={matches === true ? "h5" : "h4"}
              component="span"
            >
              {/* Eat */}
              service
            </Typography>
            <Typography fontSize={matches === true ? "10px" : "15px"}>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {/* 10:00 am */}
          </TimelineOppositeContent>
          <TimelineSeparator
            sx={{
              height: matches === true ? "50vw" : "15vw",
            }}
          >
            <TimelineConnector />
            <TimelineDot>
              {/* <LaptopMacIcon /> */}
              <img alt="vogue wood" height={50} src={Furniture} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              fontFamily={"serif"}
              variant={matches === true ? "h5" : "h4"}
              component="span"
            >
              {/* Code */}
              Unbeatable
            </Typography>
            <Typography fontSize={matches === true ? "10px" : "15px"}>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {/* 9:30 am */}
          </TimelineOppositeContent>
          <TimelineSeparator
            sx={{
              height: matches === true ? "50vw" : "15vw",
            }}
          >
            <TimelineConnector />
            <TimelineDot>
              {/* <LocalShippingIcon style={{color:"#66471d"}} /> */}
              <img alt="vogue wood" height={50} src={Truck} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              fontFamily={"serif"}
              variant={matches === true ? "h5" : "h4"}
              component="span"
            >
              {/* Eat */}
              Fast
            </Typography>
            <Typography fontSize={matches === true ? "10px" : "15px"}>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {/* 10:00 am */}
          </TimelineOppositeContent>
          <TimelineSeparator
            sx={{
              height: matches === true ? "50vw" : "15vw",
            }}
          >
            <TimelineConnector />
            <TimelineDot>
              {/* <LaptopMacIcon /> */}
              <img alt="vogue wood" height={50} src={Furniture} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              fontFamily={"serif"}
              variant={matches === true ? "h5" : "h4"}
              component="span"
            >
              {/* Code */}
              Unbeatable
            </Typography>
            <Typography fontSize={matches === true ? "10px" : "15px"}>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. 
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default Timelines;
