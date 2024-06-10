import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
 import Signup from './components/Signup';
import Login from './Login';
import Producthome from './Producthome'
import Cart from './Cart'

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/Producthome' element={<Producthome/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
     
    </div>
  );
}

export default App;

