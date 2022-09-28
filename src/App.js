import './App.css';
import Hero from "./components/hero/hero"
import Layout from "./components/layout/layout"
import Categories from "./components/categoriesGallery/categories"

function App() {
  return (
    <Layout>
    <Hero/>
    <Categories />
    </Layout>

  );
}

export default App;
