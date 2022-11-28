import "./App.css";
import Layout from "./components/layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/home";
import Categories from "./Pages/categories/categoriesPage";
import Product from "./Pages/product/product";
import Item from "./Pages/item/item";
import Contact from "./Pages/contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/product" element={<Product />}></Route>

          <Route path="/items" element={<Item />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>



        
      </Layout>
    </BrowserRouter>
  );
}

export default App;
