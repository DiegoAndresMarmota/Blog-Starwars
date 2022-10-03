import React from "react";

const FavoriteItem = ({ nombre, borrarItemFavorito }) => {
  return (
    <div className="todo d-flex flex-row align-items-center">
      <li className="dropdown-item text-light">{nombre}</li>
      <span
        onClick={() => borrarItemFavorito(nombre)}
        className="trash-btn d-flex align-items-center ms-auto text-light"
      >
        <i className="fa-solid fa-trash-can"></i>
      </span>
    </div>
  );
};

export default FavoriteItem;
