import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import HoverCard from "../HoverCard/HoverCard";

import "./Visual.scss";

const Visual = ({ name, format, main, hero, equipment, stats, weapons }) => {
  const [preview, setPreview] = useState({});
  // const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleClick = (preview) => {
    setPreview(preview);
    handleShow();
  };

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
            <svg
              height="100%"
              width="40"
              style={{
                position: "absolute",
                left: "-40px",
              }}
            >
              <polygon points="40 0, 40 90, 0 90" style={{ fill: "#121212" }} />
            </svg>
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
                  handleClick={handleClick}
                  // setPreview={setPreview}
                  // setPreviewPosition={setPreviewPosition}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="visual__equipment">
          {weapons?.map((card, i) => (
            <HoverCard
              key={i}
              card={card}
              format={format}
              handleClick={handleClick}
              // setPreview={setPreview}
              // setPreviewPosition={setPreviewPosition}
            />
          ))}
          {equipment?.map((card, i) => (
            <HoverCard
              key={i}
              card={card}
              format={format}
              handleClick={handleClick}
              // setPreview={setPreview}
              // setPreviewPosition={setPreviewPosition}
            />
          ))}
        </div>
      </div>
      <div className="visual__footer"></div>
      <Modal show={showModal} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>{preview?.name}</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <img src={preview?.image} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default Visual;
