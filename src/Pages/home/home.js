import React from 'react'
import Hero from "../../components/hero/hero"
import Categories from "../../components/categoriesGallery/categories"
import TopProducts from '../../components/topProducts/topProducts'
import Section from '../../components/section/section'
import Timelines from '../../components/timeline/timeline'
import Feedback from '../../components/feedback/feedback'
import "./home.css"
import Lines from "../../content/lines3.png"
import useMediaQuery from "@mui/material/useMediaQuery";


function Home() {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
    <Hero/>
    <Categories />
    <TopProducts pex={matches === true ? "15px" : "28px"} align="center"  boxColor="black" title="Top Deals" background="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"/>
    <Section/>
     <div className='lines'>
       <img alt="vogue wood" className='lineImg' src={Lines}/>
        </div>
    
    <Timelines/>
    <Feedback/>
    </>
  )
}

export default Home