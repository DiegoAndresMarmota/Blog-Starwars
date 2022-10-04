import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Store/appContext";

const estiloCarta = {
  width: "18rem",
  margin: "5px",
};

const PeopleCard = ({ nombre, altura, peso, raza, index }) => {
  const { tienda, acciones } = useContext(Context);

  return (
    <>
      <div className="card" style={estiloCarta} id={index}>
        <img
          src="http://placehold.it/400x200"
          alt="placehold.it"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <ul className="person-details">
            <li>Altura: {altura}</li>
            <li>Peso: {peso}</li>
            <li>Raza: {raza}</li>
          </ul>
          <div className="btns-container d-flex">
            <Link to={`details/character/${index}`} className="btn btn-primary">
              ¿Quiere aprender más?
            </Link>

            {tienda.liked.includes(nombre) ? (
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
export default PeopleCard;