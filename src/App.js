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
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route />
            <Route />
            <Route />
            <Route />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default AplicationContext(App);
