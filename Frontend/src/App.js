import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {Route,Routes } from 'react-router-dom';
import Register from './components/Register';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">
    

<NavBar/>
   

    <Routes>
      
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
     
      
      </Routes>

     
    </div>
  );
}

export default App;
