import React from 'react';
import { Link } from "react-router-dom";
import "../Styles/Index.css";

const Home = () => {
  
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
        
          </div>
        </div>
      </>
    );
}

export default Home;