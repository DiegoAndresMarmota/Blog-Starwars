import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import PlanetsCard from "../Components/PlanetsCard.jsx";

const estiloCard = {
  width: "100%",
};
const estiloBoton = {
  margin: "10px",
};

const Planets = () => {
  const { tienda, acciones } = useContext(Context);

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <button
          className="btn btn-secondary"
          onClick={() => {
            acciones.getPlanetas(tienda?.planetas.atras);
          }}
          style={estiloBoton}
        >
          Retroceder página
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            acciones.getPlanetas(tienda?.planetas.siguiente);
          }}
        >
          Siguiente página
        </button>
      </div>

      <div className="container">
        <div className="card mb-3" style={estiloCard}>
          <div className="row g-0">
            {!!tienda.planetas &&
              tienda.planetas.resultados.length > 0 &&
              tienda.planetas.resultados.map((item, i) => (
                <PlanetsCard {...item} key={item.nombre} index={i} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Planets;