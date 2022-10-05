import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import VehicleCard from "../Components/VehicleCard.jsx";

const estiloCard = {
  width: "100%",
};
const estiloBoton = {
  margin: "10px",
};

const Vehicles = () => {
  const { tienda, acciones } = useContext(Context);
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <button
          className="btn btn-secondary"
          onClick={() => {
            acciones.getVehiculos(tienda?.vehiculos.atras);
          }}
          style={estiloBoton}
        >
          Retroceder página
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            acciones.getVehiculos(tienda?.vehiculos.siguiente);
          }}
        >
          Siguiente página
        </button>
      </div>

      <div className="container">
        <div className="card mb-3" style={estiloCard}>
          <div className="row g-0">
            {!!tienda.vehiculos &&
              tienda.vehiculos.resultados.length > 0 &&
              tienda.vehiculos.resultados.map((item, i) => (
                <VehicleCard {...item} key={item.nombre} index={i} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicles;