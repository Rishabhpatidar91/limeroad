import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/products/product.css"
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Products from './products/Products';
import ProductDetail from './components/productdetail/ProductDetail';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/productdetail" element={<ProductDetail/>} />
     </Routes>
    </div>
  );
}

export default App;
