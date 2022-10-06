import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Store/appContext";

const estiloCarta = {
  width: "18rem",
  margin: "5px",
};

const estiloCartaCuerpo = {
  height: "210px",
};

const estiloBotonesComplementarios = {
  width: "254px",
  justifyContent: "center",
  marginTop: "none",
  marginBottom: "15px",
};

const VehicleCard = ({
  nombre,
  modelo,
  fabricadoPor,
  vehiculo_clase,
  index,
}) => {
  const { tienda, acciones } = useContext(Context);
  return (
    <>
      <div className="card" style={estiloCarta}>
        <img
          src="http://placehold.it/400x200"
          alt="..."
          className="card-img-top"
        />
        <div className="container-category">
          <div className="card-body" style={estiloCartaCuerpo}>
            <h5 className="card-title">{nombre}</h5>
            <ul className="person-details">
              <li>Modelo: {modelo}</li>
              <li>Fabricación: {fabricadoPor}</li>
              <li>Clase: {vehiculo_clase}</li>
            </ul>
          </div>
          <div
            className="btns-container d-flex"
            style={estiloBotonesComplementarios}
          >
            <Link to={`details/vehicle/${index}`} className="btn btn-primary">
              ¿Desea aprender más?
            </Link>
            {tienda.meGusta.includes(nombre) ? (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  acciones.borrarFavorito(nombre);
                  console.log(tienda.favoritos);
                }}
              >
                <i className="fa-solid fa-heart"></i>
              </button>
            ) : (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  acciones.agregarFavorito(nombre);
                  console.log(tienda.favoritos);
                }}
              >
                <i className="fa-regular fa-heart"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleCard;
