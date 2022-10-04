import { useContext } from "react";
import { Context } from "../Store/appContext";
import FavoriteItem from "./FavoritesList";

const FavoritesList = () => {
  const { tienda, acciones } = useContext(Context);
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-primary btn-toggle dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favoritos
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {!!tienda.favoritos &&
            tienda.favoritos.length > 0 &&
            tienda.favoritos.map((favorito, index) => (
              <FavoriteItem
                key={index}
                name={favorito.nombre}
                deleteFn={acciones.borrarFavorito}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default FavoritesList;
