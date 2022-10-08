import './App.css';
import Hero from "./components/hero/hero"
import Layout from "./components/layout/layout"
import Categories from "./components/categoriesGallery/categories"
import Section from './components/section/section';
import Feedback from './components/feedback/feedback';
import TopProducts from './components/topProducts/topProducts';
import Timelines from './components/timeline/timeline';
import Lines from "./content/lines.svg"
function App() {
 
  return (
    <Layout>
    <Hero/>
    <Categories />
    <TopProducts/>
    <Section/>
    <div className='lines'>
      <img alt="vogue wood" className='lineImg' src={Lines}/>
    </div>
    
    <Timelines/>
    <Feedback/>
 

   
    </Layout>

  );
}

export default App;
