import './App.css';
import Hero from "./components/hero/hero"
import Layout from "./components/layout/layout"
import Categories from "./components/categoriesGallery/categories"
import Section from './components/section/section';

function App() {
  return (
    <Layout>
    <Hero/>
    <Categories />
    <Section/>
    </Layout>

  );
}

export default App;
