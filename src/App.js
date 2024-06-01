
import './App.css';
import Navbar from './components/NavBar/Navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCaegory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './assets/men_banner.png';
import women_banner from './assets/women_bannerPNG.PNG';
import kid_banner from './assets/kid_banner.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCaegory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCaegory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCaegory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
