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
        
      </Routes>
    </div>
  );
}

export default App;
