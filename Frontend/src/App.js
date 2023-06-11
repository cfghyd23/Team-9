
import './App.css';
import Login from './components/Login';
import {Route,Routes } from 'react-router-dom';
import Register from './components/Register';
import HospitalRequest from './components/HospitalRequest';
import NavBar from './components/navbar/NavBar';
import Home from './components/Home';
import RegisterBB from './components/RegisterBB';


import AdminHome from './components/AdminHome';
import HosAdmin from './components/HosAdmin';

function App() {

  return (
    <div className="App">
    

<NavBar/>
   

    <Routes>
      
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/adminHome" element={<AdminHome />}/>
      <Route path="/hosAdmin" element={<HosAdmin />}/>
      
      <Route path="/hReq" element={<HospitalRequest />}/>
      
      <Route path="/registerBB" element={<RegisterBB />}/>
      
      </Routes>

     
    </div>
  );
}

export default App;
