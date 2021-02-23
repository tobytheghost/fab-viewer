import React from "react";

import "./Container.scss";

const Container = ({ children, elementRef }) => {
  return (
    <div className="container" style={{ background: "#fff" }}>
      {children}
    </div>
  );
};

export default Container;
