import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { CartProvider } from './context/CardContext';

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;