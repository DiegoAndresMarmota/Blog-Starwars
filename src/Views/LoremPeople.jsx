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
  height: "150px",
  width: "256px",
};
const estiloContainer2 = {
  height: "200px",
  width: "256px",
};

const LoremPeople = ({ selectorID }) => {
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
            ></img>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">
                {tienda?.caracteres?.resultados[params.index].nombre}
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quaerat?
              </p>
            </div>
          </div>
        </div>
        <div className="container" style={estiloDiv2}>
          <div className="row" style={estiloDiv2}>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Dimensiones:</h5>
                <div>
                  Altura: {tienda?.caracteres?.resultados[params.index].altura}{" "}
                  <br></br>
                  Peso: {tienda?.caracteres?.resultados[params.index].peso}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Caracteristicas</h5>
                <div>
                  Color de cabello:{" "}
                  {tienda?.caracteres?.resultados[params.index].color_cabello}{" "}
                  <br></br>
                  Color de piel:{" "}
                  {tienda?.caracteres?.resultados[params.index].color_piel}{" "}
                  <br></br>
                  Color de ojos:{" "}
                  {tienda?.caracteres?.resultados[params.index].color_ojos} <br></br>
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Año de nacimiento:</h5>
                <div>{tienda?.caracteres?.resultados[params.index].año_nacimiento}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Sexo:</h5>
                <div>{tienda?.caracteres?.resultados[params.index].sexo}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Hogar:</h5>
                <div>{tienda?.caracteres?.resultados[params.index].hogar}</div>
              </div>
            </div>
          </div>
          <div className="row" style={estiloDiv2}>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Apariciones en las peliculas:</h5>
                <div>{tienda?.caracteres?.resultados[params.index].apariciones_peliculas}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Especie:</h5>
                <div>{tienda?.caracteres?.resultados[params.index].especie}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Vehiculos</h5>
                <div>{tienda?.caracteres?.resultados[params.index].vehiculos}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Aeronave:</h5>
                <div>{tienda?.caracteres?.resultados[params.index].aeronave}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoremPeople;

