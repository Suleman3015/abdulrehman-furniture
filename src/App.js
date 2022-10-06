import './App.css';
import Hero from "./components/hero/hero"
import Layout from "./components/layout/layout"
import Categories from "./components/categoriesGallery/categories"
import Section from './components/section/section';
import Feedback from './components/feedback/feedback';
import TopProducts from './components/topProducts/topProducts';
import Timelines from './components/timeline/timeline';
function App() {
 
  return (
    <Layout>
    <Hero/>
    <Categories />
    <TopProducts/>
    <Section/>
    <Timelines/>
    <Feedback/>
 

   
    </Layout>

  );
}

export default App;
