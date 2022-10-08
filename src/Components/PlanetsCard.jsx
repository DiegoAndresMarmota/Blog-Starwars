import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Store/Context";

const estiloCarta = {
  width: "18rem",
  margin: "5px",
};

const PlanetsCard = ({ nombre, diametro, clima, poblacion, index }) => {
  const { tienda, acciones } = useContext(Context);

  return (
    <>
      <div className="card" style={estiloCarta}>
        <img
          src="http://placehold.it/400x200"
          alt="placehold.it"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <ul className="person-details">
            <li>Diametro: {diametro}</li>
            <li>Clima: {clima}</li>
            <li>Poblacion: {poblacion}</li>
          </ul>
          <div className="btns-container d-flex">
            <Link to={`details/planet/${index}`} className="btn btn-primary">
              Aprenda más!
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
export default PlanetsCard;
