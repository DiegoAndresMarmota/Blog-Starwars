import { createContext, useState, useEffect } from "react";
import getState from "./flux";

export const Context = createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getTienda: () => state.tienda,
        getAcciones: () => state.acciones,
        setTienda: (updatedStore) =>
          setState({
            tienda: Object.assign(state.tienda, updatedStore),
            acciones: { ...state.acciones },
          }),
      })
    );

    useEffect(() => {
      state.acciones.getCaracteres("https://swapi.dev/api/people/");
      state.acciones.getPlanetas("https://swapi.dev/api/planets/");
      state.acciones.getVehiculos("https://swapi.dev/api/vehicles/");
    }, []);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
