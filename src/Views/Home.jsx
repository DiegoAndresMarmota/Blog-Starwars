import React from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PeopleCard from "../Components/PeopleCard.jsx";
import PlanetsCard from "../Components/PlanetsCard.jsx";
import VehicleCard from "../Components/VehicleCard";
import "../index.css";

const Home = () => {
    const { tienda, acciones } = useContext(Context);
  
    return (
      <>
        <div className="people mt-5">
          <div className="header-container mb-4 d-flex align-items-center">
            <h1 className="category-title">Elenco</h1>
            <button className="btn btn-more">
              <Link to="/category/people">Mostrar todos</Link>
            </button>
          </div>
          <div className="d-flex">
            {!!tienda.caracteres &&
              tienda.caracteres.resultados.length > 0 &&
              tienda.caracteres.resultados
                .filter((item, index, objeto) => index <= 3)
                .map((item, i) => (
                  <PeopleCard {...item} key={item.nombre} index={i} />
                ))}
          </div>
        </div>
        <div className="vehicles mt-5">
          <div className="header-container mb-4 d-flex align-items-center">
            <h1 className="category-title">Vehiculos</h1>
            <button className="btn btn-more">
              <Link to="/category/vehicles">Mostrar todos</Link>
            </button>
          </div>
          <div className="d-flex">
            {!!tienda.vehiculos &&
              tienda.vehiculos.resultados.length > 0 &&
              tienda.vehiculos.resultados
                .filter((item, index, objeto) => index <= 3)
                .map((item, i) => (
                  <VehicleCard {...item} key={item.nombre} index={i} />
                ))}
          </div>
        </div>
        <div className="planets mt-5">
          <div className="header-container mb-4 d-flex align-items-center">
            <h1 className="category-title">Planetas</h1>
            <button className="btn btn-more">
              <Link to="/category/planets">Mostrar todos</Link>
            </button>
          </div>
          <div className="d-flex">
            {!!tienda.planetas &&
              tienda.planetas.resultados.length > 0 &&
              tienda.planetas.resultados
                .filter((item, index, objeto) => index <= 3)
                .map((item, i) => (
                  <PlanetsCard {...item} key={item.nombre} index={i} />
                ))}
          </div>
        </div>
      </>
    );
}

export default Home;