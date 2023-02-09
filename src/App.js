import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/Home";
import Products from "./components/products/Products";
import Login from "./components/Login";
import Search from "./components/products/Search";
import AddProduct from "./components/products/AddProduct";
import ProductDisplay from "./components/products/ProductDisplay";
import ListProducts from "./components/products/ListProducts";
import Logo from './components/Assets/uklogo.png'
import SignUp from './components/SignUp'
import "./App.css";
import Types from './components/Types'
import Footer from './components/Footer'
import About from "./components/About";
import What from "./components/What";

function App() {
  return (
    <div >
      <marquee>Website Is Under Construction</marquee>
    <Router>
<Link to="/"> <img src={Logo} alt={'logo'} style={{width:'150px',paddingTop:'20px',paddingLeft:'20px'}} /></Link>
      <nav>
        ~
        <Link to="/"> Home </Link>
        <Link to='about' >About Us</Link>
        <Link to='whatwedo'>What We Do</Link>
        <Link to="login"> Login </Link>
        <Link to="products/search"> Products </Link>
      </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={ <SignUp /> } />
          <Route path="about" element={ <About /> } />
          <Route path="whatwedo" element={ <What /> } />
          <Route path="types" element={ <Types /> } />
          <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDisplay />} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
