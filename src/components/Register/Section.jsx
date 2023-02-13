import React from "react";
import "./section.scss";
const Hello = ({data}) => {
  return (
    <div className="container-section">
      <div className="cards" style={{flexDirection:(data.rev?"row-reverse":"row")}}>
        <div className="item1">
          <h1>{data.title}</h1>
          <span>
            {data.desc}
          </span>
        </div>
        <div className="item2">
        <img src={data.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hello;
