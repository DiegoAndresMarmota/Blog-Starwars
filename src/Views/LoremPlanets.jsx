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
  width: "256px",
};
const estiloContainer2 = {
  height: "150px",
  width: "256px",
};

const estiloContainerNaboo = {
  height: "380px",
  width: "256px",
};
const estiloImagen = {
  height: "466px",
  width: "640px",
};

const LoremPlanets = () => {
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
                {tienda?.planetas.resultados[params.index].nombre}
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, minima!
              </p>
            </div>
          </div>
        </div>
        <div className="container" style={estiloDiv2}>
          <div className="row" style={estiloDiv2}>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Rotación planetaria:</h5>
                <div>
                  {tienda?.planetas?.resultados[params.index].rotacion_planetaria}
                </div>
              </div>
            </div>
            <div className="container-categiry" style={estiloContainer}>
              <div className="col-12">
                <h5>Traslación planetaria:</h5>
                <div>
                  {tienda?.planetas?.resultados[params.index].traslacion_planetaria}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Diametro:</h5>
                <div>{tienda?.planetas?.resultados[params.index].diametro}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Clima:</h5>
                <div>{tienda?.planetas?.resultados[params.index].clima}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Gravedad:</h5>
                <div>{tienda?.planetas?.resultados[params.index].gravedad}</div>
              </div>
            </div>
          </div>
          <div className="row" style={estiloDiv2}>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Terreno:</h5>
                <div>{tienda?.planetas?.resultados[params.index].terreno}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Superficie del agua:</h5>
                <div>
                  {tienda?.planetas?.resultados[params.index].superficie_agua}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Población:</h5>
                <div>{tienda?.planetas?.resultados[params.index].poblacion}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainerNaboo}>
              <div className="col-12">
                <h5>Residentes:</h5>
                <div>{tienda?.planetas?.resultados[params.index].residentes}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Filmes:</h5>
                <div>{tienda?.planetas?.resultados[params.index].filmes}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoremPlanets;

