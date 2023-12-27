import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import FontPage from './POS/FirstPage/FontPage';
import Sales from './POS/Sales/Sales';
// import ButtonCounter from './POS/Sales/abc';
// import ImageButton1 from './POS/Sales/Table';
import AddProduct from './POS/Add Product/AddP';
import AddCatagory from './POS/Add Product/AddCatagory';
import AddUnit from './POS/Add Product/AddUnit';
import ProductList from './POS/Add Product/ProductList';
import Pupdate from './POS/Add Product/ProductUpdate';
import Search from './POS/Sales/search';
import ProductSearchInput from './POS/Sales/search';
import StockList from './POS/Add Product/Stock';
import Plist from './POS/Add Product/Plist';
import SideBar from './POS/Home/Sidebar';
import NavigationBar from './LogPage/NavBar';
import Cart from './POS/Cart/Cart';
import Header from './POS/Cart/Header';
import ImageButton from './POS/Sales/ButtonImage';
import ExCart from './POS/Cart/Ecart';
import ButtonCounter from './POS/Cart/abc';


function App() {
  return (
<div className="App"> 
<Routes>
        <Route path="/" element={<FontPage/>} />
        <Route path="/sales" element={<Sales/>} /> 
        <Route path="/add" element={<AddProduct/>} />  
        <Route path="/addc" element={<AddCatagory/>} />  
        <Route path="/addu" element={<AddUnit/>} />  
        <Route path="/list" element={<ProductList/>} />  
        <Route path="/:id/edit" element={<Pupdate/>} /> 
        <Route path="/stock" element={<StockList/>} /> 
        <Route path="/search" element={<ProductSearchInput/>} />  
        <Route path="/p" element={<Plist/>} />  
        <Route path="/s" element={<SideBar/>} /> 
        <Route path="/nav" element={<NavigationBar/>} />
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/imgbutton" element={<ImageButton/>} /> 
        <Route path="/ecart" element={<ExCart/>} /> 
        <Route path="/bc" element={<ButtonCounter/>} />  
      </Routes>
    </div>
  );
}

export default App;
