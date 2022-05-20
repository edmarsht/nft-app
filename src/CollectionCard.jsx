import React from "react";
import "./CollectionCard.css";
import weth from "./assets/weth.png";

function CollectionCard({ id, name, traits, image }) {
  return (
    <div className="collection">
      <div className="collection__img">
        <img src={image} alt="" />
      </div>
      <div className="collection__padding">
        <div className="details"></div>
        <div className="name">
          {name}
          <div className="id">•#{id}</div>
        </div>
        <div className="price__container">
          <img src={weth} alt="" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
