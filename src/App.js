import './App.css';
import Hero from "./components/hero/hero"
import Layout from "./components/layout/layout"
import Categories from "./components/categoriesGallery/categories"
import Section from './components/section/section';
import Feedback from './components/feedback/feedback';
import TopProducts from './components/topProducts/topProducts';

function App() {
 
  return (
    <Layout>
    <Hero/>
    <Categories />
    <Section/>
    <Feedback/>
    <TopProducts/>
   
    </Layout>

  );
}

export default App;
