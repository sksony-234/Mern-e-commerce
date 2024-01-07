import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './customer/components/cart/Cart';
import CheckOut from './customer/components/checkout/CheckOut';
import Footer from './customer/components/footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import Order from './customer/components/order/Order';
import OrderDetails from './customer/components/order/OrderDetails';
import Products from './customer/components/product/Products';
import ProductDetails from './customer/components/productDetials/ProductDetails';
import HomePage from './pages/home/HomePage';
import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
