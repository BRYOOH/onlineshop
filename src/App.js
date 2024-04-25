
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import LoginSignUp from './Pages/LoginSignUp'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/men/banner.jpg'
import women_banner from './components/assets/women/banner.jpg'
import kids_banner from './components/assets/Boys/banner.jpg'


function App() {
  return (
    <>
     <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}  />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kids'/>} />
          <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

      </div>
    </>
  );
}

export default App;
