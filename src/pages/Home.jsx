import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "../components/Container/Container";

import "./Home.scss";

const Home = () => {
  const [value, setValue] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!value) {
      return;
    }
    const parts = value.split("/");
    const link = parts[parts.length - 1];
    history.push(`/decks/${link}`);
  };

  return (
    <div className="home">
      <Container>
        <div className="home__form">
          <input
            className="home__input"
            placeholder="Enter FABDB link or id ..."
            name=""
            value={value}
            onChange={handleChange}
          />
          <button className="button" onClick={handleSubmit}>
            View Deck
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
