 
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
     <Route path='/' element={ <Shop></Shop>}></Route> 
     <Route path='/shop' element={ <Shop></Shop>}></Route> 
     <Route path='/review' element={ <OrderReview></OrderReview>}></Route>
     <Route path='/orders' element={ <Orders></Orders>}></Route> 
     <Route path='/inventory' element={<Inventory></Inventory>}></Route> 
     <Route path='/about' element={<About></About>}></Route> 

      </Routes>
   
     
    </div>
  );
}

export default App;
