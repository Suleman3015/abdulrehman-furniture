import './App.css';
import Layout from "./components/layout/layout"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/home/home"
import Categories from './Pages/categories/categoriesPage';



function App() {
 
  return (
   
    
            <BrowserRouter>
             <Layout>
      <Routes>
        <Route exact path="/" element={<Home/>}>
          
        </Route>
        <Route path="/categories" element={ <Categories/>}>
         
        </Route>
      </Routes>
      </Layout>
      </BrowserRouter>
   
 
 

   
    

  );
}

export default App;
