import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Truck from "../../content/icons/truck.png"
import Service from "../../content/icons/service.png"
import Offers from "../../content/icons/offers.png"
import Furniture from "../../content/icons/furniture.png"
import useMediaQuery from "@mui/material/useMediaQuery";
 function Timelines() {
    const matches = useMediaQuery("(max-width:600px)");
  return (
    <div style={{
        marginTop:"100px"
    }}>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {/* 9:30 am */}
        </TimelineOppositeContent>
        <TimelineSeparator sx={{
            height: matches === true ? "50vw" : "15vw"
        }}>
          <TimelineConnector />
          <TimelineDot>
            {/* <LocalShippingIcon style={{color:"#66471d"}} /> */}
            <img alt="vogue wood" height={50}  src={Truck} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography fontFamily={"serif"}   variant={matches === true ? "h5":"h4"}  component="span">
            {/* Eat */}
            service
          </Typography>
          <Typography>One Year Free Delivery Service</Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          {/* 10:00 am */}
        </TimelineOppositeContent>
        <TimelineSeparator
        sx={{
            height:matches === true ? "50vw" : "15vw"
        }}
        
        >
          <TimelineConnector />
          <TimelineDot >
            {/* <LaptopMacIcon /> */}
            <img alt="vogue wood" height={50} src={Furniture} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography fontFamily={"serif"}  variant={matches === true ? "h5":"h4"}  component="span">
            {/* Code */}
            Unbeatable
          </Typography>
          <Typography>All things home, all in one place</Typography>
        </TimelineContent>
      </TimelineItem>


   <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {/* 9:30 am */}
        </TimelineOppositeContent>
        <TimelineSeparator sx={{
            height: matches === true ? "50vw" : "15vw"
        }}>
          <TimelineConnector />
          <TimelineDot>
            {/* <LocalShippingIcon style={{color:"#66471d"}} /> */}
            <img alt="vogue wood" height={50}  src={Truck} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography fontFamily={"serif"}   variant={matches === true ? "h5":"h4"}  component="span">
            {/* Eat */}
            Fast 
          </Typography>
          <Typography>One Year Free Delivery Service</Typography>
        </TimelineContent>
      </TimelineItem>
      

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          {/* 10:00 am */}
        </TimelineOppositeContent>
        <TimelineSeparator
        sx={{
            height:matches === true ? "50vw" : "15vw"
        }}
        
        >
          <TimelineConnector />
          <TimelineDot >
            {/* <LaptopMacIcon /> */}
            <img alt="vogue wood" height={50} src={Furniture} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography fontFamily={"serif"}   variant={matches === true ? "h5":"h4"}  component="span">
            {/* Code */}
            Unbeatable
          </Typography>
          <Typography>All things home, all in one place</Typography>
        </TimelineContent>
      </TimelineItem>

      


    </Timeline>
    </div>
  );
}

export default Timelines;