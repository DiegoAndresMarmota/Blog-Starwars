import { createContext, useState, useEffect } from "react";
import getEstado from "./Flux";

export const Contexto = createContext(null);

const useContext = (componentePadre) => {
  const StoreWrapper = (props) => {
    const [estado, setEstado] = useState(
      getEstado({
        getTienda: () => estado.tienda,
        getAcciones: () => estado.acciones,
        setTienda: (actualizarTienda) =>
          setEstado({
            tienda: Object.assign(estado.tienda, actualizarTienda),
            acciones: { ...estado.acciones },
          }),
      })
    );

    useEffect(() => {
      estado.acciones.getCaracteres("https://swapi.dev/api/people/");
      estado.acciones.getPlanetas("https://swapi.dev/api/planets/");
      estado.acciones.getVehiculos("https://swapi.dev/api/vehicles/");
    }, []);

    return (
      <Contexto.Provider value={estado}>
        <componentePadre {...props} />
      </Contexto.Provider>
    );
  };
  return StoreWrapper;
};

export default useContext;
