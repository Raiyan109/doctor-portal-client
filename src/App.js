import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Auth/Login/Login';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
