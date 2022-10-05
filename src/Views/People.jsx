import React from "react";
import { useContext } from "react";
import Card from "../Components/Card";
import { Context } from "../Store/appContext";
import PeopleCard from "../Components/PeopleCard.jsx";

const estiloCard = {
  width: "100%",
};

const estiloBoton = {
  margin: "10px",
};

const People = ({ selectorID, setSelectorID }) => {
  const { tienda, acciones } = useContext(Context);
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <button
          className="btn btn-secondary"
          onClick={() => {
            acciones.getCharacters(tienda?.caracteres.atras);
          }}
          style={estiloBoton}
        >
          Retroceder página
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            acciones.getCharacters(tienda?.caracteres.siguiente);
          }}
        >
          Siguiente página
        </button>
      </div>

      <div className="container">
        <div className="card mb-3" style={estiloCard}>
          <div className="row g-0">
            {!!tienda.caracteres &&
              tienda.caracteres.resultados.length > 0 &&
              tienda.caracteres.resultados.map((item, i) => (
                <PeopleCard {...item} key={item.nombre} index={i} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default People;