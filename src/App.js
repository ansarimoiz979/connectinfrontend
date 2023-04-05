// import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
function App() {
  
  return (
    <BrowserRouter>
   <div>
   <Routes>
    {/* <Route exact path="/login" element={ user? <Navigate  to="/" />: <Login/>}/>
     */}
     <Route exact path="/login" element={ <Login/> } />
     <Route exact path="/home" element={ <Home/> } />
     <Route exact path="/" element={ <Register/> } />

   </Routes>
   </div>
   </BrowserRouter>
  // <Home/>
  );
}

export default App;
