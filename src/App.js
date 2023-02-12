import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./components/Home";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Home />
        <Cart/>
      </CartProvider>
    </div>
  );
}

export default App;
