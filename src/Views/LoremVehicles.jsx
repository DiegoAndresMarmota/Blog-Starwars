import { useContext } from "react";
import { useParams } from "react-router-dom";
import PeopleCard from "../Components/PeopleCard";
import { Context } from "../Store/appContext";

const estiloDiv = {
  margin: "15px",
};
const estiloDiv2 = {
  marginTop: "30px",
  padding: "2px",
};
const estiloContainer = {
  height: "100px",
  width: "213px",
};
const estiloContainer2 = {
  height: "150px",
  width: "213px",
};

const estiloImagen = {
  height: "366px",
  width: "640px",
};

const LoremVehiculos = () => {
  const { tienda } = useContext(Context);
  const params = useParams();
  return (
    <>
      <div className="card mb-3" style={estiloDiv}>
        <div className="row g-0">
          <div className="col-md-8">
            <img
              src="http://placehold.it/400x200"
              className="img-fluid rounded-start"
              alt="..."
              style={estiloImagen}
            ></img>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">
                {tienda?.vehiculos?.resultados[params.index].name}
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                alias!
              </p>
            </div>
          </div>
        </div>
        <div className="container" style={estiloDiv2}>
          <div className="row" style={estiloDiv2}>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Modelo:</h5>
                <div>{tienda?.vehiculos?.resultados[params.index].model}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Fabricado:</h5>
                <div>
                  {tienda?.vehiculos?.resultados[params.index].fabricado}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Valor:</h5>
                <div>{tienda?.vehiculos?.resultados[params.index].valor}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Dimensiones:</h5>
                <div>
                  {tienda?.vehiculos?.resultados[params.index].dimension}
                </div>
              </div>
            </div>
            <div className="container-caqtegory" style={estiloContainer}>
              <div className="col-12">
                <h5>Velocidad:</h5>
                <div>
                  {tienda?.vehiculos?.resultados[params.index].velocidad}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Tripulación:</h5>
                <div>
                  {tienda?.vehiculos?.resultados[params.index].tripulacion}
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={estiloDiv2}>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Pasajeros:</h5>
                <div>
                  {tienda?.vehiculos?.resultados[params.index].pasajeros}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Capacidad de carga:</h5>
                <div>{tienda?.vehiculos?.resultados[params.index].carga}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Pilotos:</h5>
                <div>{tienda?.vehiculos?.resultados[params.index].pilotos}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Filmes:</h5>
                <div>{tienda?.vehiculos?.resultados[params.index].filmes}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoremVehiculos;
