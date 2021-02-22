import React, { useState, useEffect } from "react";

import HoverCard from "../HoverCard/HoverCard";

import "./Visual.scss";

const Visual = ({ name, format, main, hero, equipment, stats }) => {
  // const [preview, setPreview] = useState("");
  // const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  return (
    <div className="visual">
      <div className="visual__header">
        <div
          className="visual__art"
          style={{ backgroundImage: `url(${hero.image})` }}
        ></div>
        <div className="visual__title">
          <h1 className="visual__name">{name}</h1>
          <h2 className="visual__info">
            {hero.name} - {capitalize(format)}
          </h2>
          <div className="visual__divider">
            <ul className="visual__stats">
              <li className="visual__stat">
                Attack Actions: {stats.attackActions}
              </li>
              <li className="visual__stat">
                Attack Reactions: {stats.attackReactions}
              </li>
              <li className="visual__stat">
                Defense Reactions: {stats.defenseReactions}
              </li>
            </ul>
            <ul className="visual__stats">
              <li className="visual__stat">Deck: {stats.mainCount}</li>
              <li className="visual__stat">
                Equipment: {stats.equipmentCount}
              </li>
              <li className="visual__stat visual__stat--red">
                Red: {stats.red}
              </li>
              <li className="visual__stat visual__stat--yellow">
                Yellow: {stats.yellow}
              </li>
              <li className="visual__stat visual__stat--blue">
                Blue: {stats.blue}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="visual__deck">
        <div className="visual__main">
          {main?.map((pile, i) => (
            <div key={i} className="visual__pile">
              {pile?.map((card, i) => (
                <HoverCard
                  key={i}
                  card={card}
                  format={format}
                  // setPreview={setPreview}
                  // setPreviewPosition={setPreviewPosition}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="visual__equipment">
          {equipment?.map((card, i) => (
            <HoverCard
              key={i}
              card={card}
              format={format}
              // setPreview={setPreview}
              // setPreviewPosition={setPreviewPosition}
            />
          ))}
        </div>
      </div>
      <div className="visual__footer"></div>
      {/* {preview && (
        <div
          className="visual__preview"
          style={{
            position: "fixed",
            top: previewPosition.y,
            left: previewPosition.x,
            zIndex: 99,
          }}
        >
          <img src={preview} />
        </div>
      )} */}
    </div>
  );
};

export default Visual;
