import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Deck from "./pages/Deck";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/decks/:deckId" component={Deck} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
