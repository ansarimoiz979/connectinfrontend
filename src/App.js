// import logo from './logo.svg';
import './App.css';
import Login from "./pages/home/login/Login";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/home/login/Home';
function App() {
  
  return (
  //   <BrowserRouter>
  //  <div>
  //  <Routes>
  //   {/* <Route exact path="/login" element={ user? <Navigate  to="/" />: <Login/>}/>
  //    */}
  //    <Route exact path="/" element={ <Login/> } />
  //  </Routes>
  //  </div>
  //  </BrowserRouter>
  <Home/>
  );
}

export default App;
