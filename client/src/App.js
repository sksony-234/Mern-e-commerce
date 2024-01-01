import './App.css';
import Footer from './customer/components/footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import Products from './customer/components/product/Products';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Products/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
