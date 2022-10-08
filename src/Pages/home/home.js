import React from 'react'
import Hero from "../../components/hero/hero"
import Categories from "../../components/categoriesGallery/categories"
import TopProducts from '../../components/topProducts/topProducts'
import Section from '../../components/section/section'
import Timelines from '../../components/timeline/timeline'
import Feedback from '../../components/feedback/feedback'
import "./home.css"
import Lines from "../../content/lines.svg"


function home() {
  return (
    <>
    <Hero/>
    <Categories />
    <TopProducts/>
    <Section/>
     <div className='lines'>
       <img alt="vogue wood" className='lineImg' src={Lines}/>
        </div>
    
    <Timelines/>
    <Feedback/>
    </>
  )
}

export default home