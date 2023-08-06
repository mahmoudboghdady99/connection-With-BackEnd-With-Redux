import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} /> {/* Add leading slash to the path */}
        <Route path="/cart" element={<Cart />} /> {/* Change the prop name to 'element' */}
      </Routes>
    </>
  );
}

export default App;
