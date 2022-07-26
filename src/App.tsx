import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/products/product.css"
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Products from './products/Products';
import ProductDetail from './components/productdetail/ProductDetail';
import Login from './pages/login/Login';
import Layout from './pages/layout/Layout';
import Signup from './pages/login/Signup';
// import Layout from './components/product/Layout';

function App() {
  return (
    <div className="App">
     {/* <Navbar /> */}
     <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/*" element={<Layout/>} />
     </Routes>
    </div>
  );
}

export default App;
