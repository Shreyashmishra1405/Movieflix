import React from "react";
import "./listitem.scss";
const ListItem = ({ data }) => {
  return (
    <div className="listitem">
      <img
        src={"https://image.tmdb.org/t/p/original" + data.poster_path}
        alt=""
      />
      <span>{data.overview}</span>
    </div>
  );
};

export default ListItem;
