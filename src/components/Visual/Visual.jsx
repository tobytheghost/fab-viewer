import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import * as htmlToImage from "html-to-image";
import * as download from "downloadjs";

import HoverCard from "../HoverCard/HoverCard";

import "./Visual.scss";

const Visual = ({ name, format, main, hero, equipment, stats, weapons }) => {
  const [preview, setPreview] = useState({});
  // const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleClick = (preview) => {
    handleShow();
    setPreview(preview);
  };

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  const [downloading, setDownloading] = useState(false);

  const image = useRef();

  const downloadPreview = () => {
    if (downloading) {
      return;
    }
    setDownloading(true);
    htmlToImage.toPng(image.current).then((dataUrl) => {
      download(dataUrl, "visual.png");
      setDownloading(false);
    });
  };

  return (
    <>
      <div className="visual" ref={image} style={{ background: "#fff" }}>
        <div className="visual__header">
          <div
            className="visual__art"
            style={
              hero.image
                ? { backgroundImage: `url(${hero.image})` }
                : { background: `#eee` }
            }
            onClick={() => handleClick(hero)}
          ></div>
          <div className="visual__title">
            <h1 className="visual__name">{name}</h1>
            <h2 className="visual__info">
              {hero.name ? `${hero.name} - ` : ""}
              {capitalize(format)}
            </h2>
            <div className="visual__divider">
              <svg
                height="100%"
                width="30"
                style={{
                  position: "absolute",
                  left: "-30px",
                }}
              >
                <polygon
                  points="30 0, 30 90, 0 90"
                  style={{ fill: "#121212" }}
                />
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
          <div className={`visual__main visual__main--${format}`}>
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
          <div className={`visual__equipment visual__equipment--${format}`}>
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
            <img src={preview?.image || `/cardback.png`} />
          </Modal.Body>
          {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
        </Modal>
      </div>
      <button className="button" onClick={downloadPreview}>
        {downloading ? (
          <span className="button__label">
            <div className="deck__loader"></div>
          </span>
        ) : (
          <span className="button__label">Download Image</span>
        )}
      </button>
    </>
  );
};

export default Visual;
