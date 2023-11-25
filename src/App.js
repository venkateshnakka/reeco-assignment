import Header from './components/Header';
import OrderId from './components/OrderId';
import ProductsContainer from './components/ProductsContainer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     < Header/>
     <OrderId />
     <ProductsContainer />
    </div>
  );
}

export default App;
