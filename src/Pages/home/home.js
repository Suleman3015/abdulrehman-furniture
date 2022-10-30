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
import ContactUs from '../../components/Form/form'
import { SnackbarProvider} from 'notistack';
import BrandWeCarry from '../../components/brandWeCarry/brandWeCarry'
import Value from '../../components/value/value'

function Home() {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
    <Hero/>
    <Categories />

    <Section/>
     <div className='lines'>
       <img alt="vogue wood" className='lineImg' src={Lines}/>
        </div>
        <TopProducts pex={matches === true ? "15px" : "28px"} align="center"  boxColor="black" title="Top Deals" background="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"/>
    <Timelines/>
    <Value/>
    <BrandWeCarry/>


    <Feedback/>
    
    <SnackbarProvider maxSnack={3} >
    <ContactUs/>
    </SnackbarProvider>
    </>
  )
}

export default Home