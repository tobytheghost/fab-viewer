import React, { useState, useEffect } from "react";

import useMousePosition from "../../hooks/useMousePosition";

const HoverCard = ({ card, format, handleClick }) => {
  //   const { x, y } = useMousePosition();
  //   const [hovered, setHovered] = useState(false);

  //   const handleMouseEnter = (e) => {
  //     setHovered(true);
  //   };
  //   const handleMouseLeave = () => {
  //     setHovered(false);
  //   };
  //   const onTimeout = () => {
  //     setPreviewPosition({ x, y });
  //     setPreview(card.image);
  //   };

  //   useEffect(() => {
  //     if (hovered) {
  //       const timer = setTimeout(onTimeout, 500);
  //       return () => {
  //         clearTimeout(timer);
  //       };
  //     } else {
  //       setPreview("");
  //     }
  //   }, [hovered]);

  return (
    <div
      //   onMouseEnter={handleMouseEnter}
      //   onMouseLeave={handleMouseLeave}
      className={`visual__card visual__card--${format}`}
      href={card.image}
      target="_blank"
      onClick={() => handleClick(card)}
    >
      <img src={card.image || "/cardback.png"} alt={card.name} />
    </div>
  );
};

export default HoverCard;
