import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./Store/appContext";
import Navbar from "./Components/Navbar";
import Home from "./Views/Home";
import People from "./Views/People";
import Vehicles from "./Views/Vehicles";
import Planets from "./Views/Planets";
import PageNotFound from "./Views/PageNotFound";
import LoremPeople from "./Views/LoremPeople";
import LoremVehicles from "./Views/LoremVehicles";
import LoremPlanets from "./Views/LoremPlanets";
import "./Styles/App.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/categoria/personajes" element={<People />} />
            <Route path="/categoria/planetas" element={<Planets />} />
            <Route path="/categoria/vehiculos" element={<Vehicles />} />
            <Route path="/detalle/elenco/:index" element={<LoremPeople />} />
            <Route
              path="/categoria/elenco/ficha/caracter/:index"
              element={<LoremPeople />}
            />
            <Route path="detalle/vehiculo/:index" element={<LoremVehicles />} />
            <Route
              path="/categoria/maquina/ficha/vehiculo/:index"
              element={<LoremVehicles />}
            />
            <Route path="/detalle/planeta/:index" element={<LoremPlanets />} />
            <Route
              path="/categoria/planetas/sistema/planeta/:index"
              element={<LoremPlanets />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
