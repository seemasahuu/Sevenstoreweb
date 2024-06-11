// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import Signup from "./components/Signup";
// import Login from "./Login";
// import Producthome from "./Producthome";
// import Cart from "./Cart";
// import { IndividualPuja } from "./tab/IndividualPuja";
// import {PartenerPuja} from "./tab/PartenerPuja";
// import JointFamilyPuja from './tab/JointFamilyPuja';
// import {FamilyPuja} from "./tab/FamilyPuja";

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Signup" element={<Signup />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Producthome" element={<Producthome />} />
//         <Route path="/Cart" element={<Cart />} />
//         <Route path="/IndividualPuja" element={<IndividualPuja />} />
//         <Route path="/PartenerPuja " element={<PartenerPuja />} />
//         <Route path="/FamilyPuja" element={<FamilyPuja />} />
//         <Route path="/JointFamilyPuja" element={<JointFamilyPuja />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./components/Signup";
import Login from "./Login";
import Producthome from "./Producthome";
import Cart from "./Cart";
import { IndividualPuja } from "./tabs/IndividualPuja";
import { PartenerPuja } from "./tabs/PartenerPuja";
import { JointFamilyPuja } from './tabs/JointFamilyPuja'; // Correct import
import { FamilyPuja } from "./tabs/FamilyPuja";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Producthome" element={<Producthome />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/IndividualPuja" element={<IndividualPuja />} />
        <Route path="/PartenerPuja" element={<PartenerPuja />} />
        <Route path="/FamilyPuja" element={<FamilyPuja />} />
        <Route path="/JointFamilyPuja" element={<JointFamilyPuja />} />
      </Routes>
    </div>
  );
}

export default App;
