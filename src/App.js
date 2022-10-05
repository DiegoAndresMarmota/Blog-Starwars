import { BrowserRouter, Routes, Route } from "react-router-dom";
import AplicationContext from "./Store/appContext";
import Navbar from "./Components/Navbar";
import Home from "./Views/Home";
import People from "./Views/People";
import Vehicles from "./Views/Vehicles";
import Planets from "./Views/Planets";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/personajes" element={<People />} />
            <Route path="/categoria/planetas" element={<Planets />} />
            <Route path="/categoria/vehiculos" element={<Vehicles />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default AplicationContext(App);
