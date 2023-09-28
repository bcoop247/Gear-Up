import './App.css';
import UserLoginForm from './UserLoginForm'
import NewUserForm from './NewUserForm.js';
import HomePage from './HomePage';
import MensPage from './MensPage';
import WomensPage from './WomensPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Electronics from './Electronics';
import Jewelry from './Jewelry';
import SearchPage from './SearchPage';
import ShoppingCartPage from './ShoppingCartPage';
import Checkout from './Checkout';
import PaymentSuccessfulPage from './PaymentSuccessfulPage';

function App() {
 
  return (
//using browser router to dynamiclly display content
    <div className="App"> 
      <Router basename='/gear-up'>
          <Routes>
          <Route path="/" element={<UserLoginForm />} />
          <Route path="/login" element={<UserLoginForm />} />
          <Route path="/newuser" element={<NewUserForm />} ></Route>
          <Route path="/homepage" element={<HomePage />} > </Route>
          <Route path="/menspage" element={<MensPage />} > </Route>
          <Route path="/womenspage" element={<WomensPage />} > </Route>
          <Route path="/electronics" element={<Electronics />} > </Route>
          <Route path="/jewelry" element={<Jewelry />} > </Route>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element = {<ShoppingCartPage />} />
          <Route path="/checkout" element = {<Checkout />} />
          <Route path='paymentsuccess' element = {<PaymentSuccessfulPage />} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
