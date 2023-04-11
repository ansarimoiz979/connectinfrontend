// import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext)
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Register />} />
          <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route exact path="/register" element={user ? <Navigate to="/" /> : <Register />} />

        </Routes>
      </div>
    </BrowserRouter>
    // <Home/>
  );
}

export default App;
