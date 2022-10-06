const getState = ({ getTienda, getAcciones, setTienda }) => {
  return {
    tienda: {
      caracteres: null,
      planetas: null,
      vehiculos: null,
      favoritos: [],
      meGusta: [],
    },
    acciones: {
      getCaracteres: async url => {
        try {
          const respuesta = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const dato = await respuesta.json();
          setTienda({ caracteres: dato });
        } catch (error) {
          console.log(error);
        }
      },
      getPlanetas: async url => {
        try {
          const respuesta = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const dato = await respuesta.json();
          setTienda({ planetas: dato });
        } catch (error) {
          console.log(error);
        }
      },
      getVehiculos: async url => {
        try {
          const respuesta = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const dato = await respuesta.json();
          setTienda({ vehiculos: dato });
        } catch (error) {
          console.log(error);
        }
      },
      agregarFavorito: nombre => {
        const acciones = getAcciones();
        const { favoritos } = getTienda();
        const favorito = {
          nombre: `${nombre}`,
        };

        const encontrarFavorito = favoritos.find(
          elemento => elemento.nombre === favorito.nombre
        );
        if (!encontrarFavorito) {
          favoritos.push(favorito);
          setTienda({ favoritos: favoritos });
          acciones.itemFavorito(nombre);
        }
      },

      borrarFavorito: nombre => {
        const acciones = getAcciones();
        const { favoritos } = getTienda();
        const buscarElemento = favoritos.filter(
          elemento => elemento.nombre !== nombre
        );
        acciones.borrarItemFavorito(nombre);
        setTienda({ favoritos: buscarElemento });
      },

      itemFavorito: nombre => {
        const tienda = getTienda();
        let meGusta = nombre;
        tienda.meGusta.push(meGusta);
      },

      borrarItemFavorito: nombre => {
        const tienda = getTienda();
        const meGustaIndice = tienda.meGusta.indexOf(nombre);
        const meGustaCopia = [...tienda.meGusta];
        meGustaCopia[meGustaIndice] = null;
        const meGustaBuscar = meGustaCopia.filter((elemento) => elemento !== null);
        setTienda({ meGusta: meGustaBuscar });
      },
    },
  };
};

export default getState;
