const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: null,
      planetas: null,
      vehiculos: null,
      favorites: [],
      liked: [],
    },
    actions: {
      getCaracteres: async (url) => {
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setStore({ characters: data });
        } catch (error) {
          console.log(error);
        }
      },
      getPlanetas: async (url) => {
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setStore({ planetas: data });
        } catch (error) {
          console.log(error);
        }
      },
      getVehiculos: async (url) => {
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setStore({ vehiculos: data });
        } catch (error) {
          console.log(error);
        }
      },
      addFavorite: (name) => {
        const actions = getActions();
        const { favorites } = getStore();
        const favorite = {
          name: `${name}`,
        };

        const findFav = favorites.find((elem) => elem.name === favorite.name);
        if (!findFav) {
          favorites.push(favorite);
          setStore({ favorites: favorites });
          actions.likedItem(name);
        }
      },
      deleteFavorite: (name) => {
        const actions = getActions();
        const { favorites } = getStore();
        const filterElem = favorites.filter((elem) => elem.name !== name);
        actions.deleteLikedItem(name);
        setStore({ favorites: filterElem });
      },
      likedItem: (name) => {
        const store = getStore();
        let like = name;
        store.liked.push(like);
      },
      deleteLikedItem: (name) => {
        const store = getStore();
        const likedIndex = store.liked.indexOf(name);
        const likedCopy = [...store.liked];
        likedCopy[likedIndex] = null;
        const filterLikes = likedCopy.filter((elem) => elem !== null);
        setStore({ liked: filterLikes });
      },
    },
  };
};

export default getState;
