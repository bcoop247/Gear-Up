import './App.css';
import UserLoginForm from './UserLoginForm'
import NewUserForm from './NewUserForm.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* 
      DYNAMICALLY RENDER THE FRONT END WITH REACT ROUTING
      USING BROWSEROUTER AND ROUTE COMPONENTS WITHIN ROOT COMPONENT WILL ENABLE CLIENT SIDE ROUTING */}
      <Router>
      
          <Routes>
          <Route path="/" element={<UserLoginForm />} />
          <Route path="/NewUserForm" element={<NewUserForm />} ></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
