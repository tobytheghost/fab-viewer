import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";

import { getDeck } from "../api/fabdb";
import deckData from "../api/data";
import Visual from "../components/Visual/Visual";
import Container from "../components/Container/Container";

import "./Deck.scss";

const Deck = () => {
  const { deckId } = useParams();
  const [loading, setLoading] = useState(true);
  const [deck, setDeck] = useState({});
  const [hero, setHero] = useState({});
  const [main, setMain] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [stats, setStats] = useState({});
  const [error, setError] = useState("");
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    const parseData = (data) => {
      const { cards, format } = data;

      const heros = cards.filter((card) => card.keywords?.includes("hero"));

      const equipment = cards
        .filter((card) => card.keywords?.includes("equipment"))
        .sort((a, b) => b.name - a.name)
        .flatMap((card) => {
          const arr = [];
          return arr.concat(
            Array.apply(null, Array(card.total)).map(() => card)
          );
        });

      const weapons = cards
        .filter((card) => card.keywords?.includes("weapon"))
        .sort((a, b) => b.name - a.name)
        .flatMap((card) => {
          const arr = [];
          return arr.concat(
            Array.apply(null, Array(card.total)).map(() => card)
          );
        });

      const equipmentCount = equipment.length + weapons.length;

      const attackActions = cards
        .filter(
          (card) =>
            card.keywords?.includes("attack") &&
            card.keywords?.includes("action")
        )
        .reduce((sum, card) => sum + (card.total || 0), 0);
      const attackReactions = cards
        .filter(
          (card) =>
            card.keywords?.includes("attack") &&
            card.keywords?.includes("reaction")
        )
        .reduce((sum, card) => sum + (card.total || 0), 0);
      const defenseReactions = cards
        .filter(
          (card) =>
            card.keywords?.includes("defense") &&
            card.keywords?.includes("reaction")
        )
        .reduce((sum, card) => sum + (card.total || 0), 0);

      const red = cards
        .filter((card) => card.stats?.resource === "1")
        .reduce((sum, card) => sum + (card.total || 0), 0);
      const yellow = cards
        .filter((card) => card.stats?.resource === "2")
        .reduce((sum, card) => sum + (card.total || 0), 0);
      const blue = cards
        .filter((card) => card.stats?.resource === "3")
        .reduce((sum, card) => sum + (card.total || 0), 0);

      const main = cards
        .filter(
          (card) =>
            !card.keywords?.includes("hero") &&
            !card.keywords?.includes("equipment") &&
            !card.keywords?.includes("weapon")
        )
        .sort((a, b) => b.name - a.name)
        .sort((a, b) => b.total - a.total)
        .flatMap((card) => {
          const arr = [];
          return arr.concat(
            Array.apply(null, Array(card.total)).map(() => card)
          );
        });

      const mainCount = main.length;

      setStats({
        attackActions,
        attackReactions,
        defenseReactions,
        red,
        yellow,
        blue,
        equipmentCount,
        mainCount,
      });

      const piles = [];

      while (main.length > 0) {
        piles.push(main.splice(0, format === "blitz" ? 4 : 6));
      }

      if (heros.length) {
        setHero(heros[0]);
      }
      if (equipment.length) {
        setEquipment(equipment);
      }
      if (weapons.length) {
        setWeapons(weapons);
      }
      if (piles.length) {
        setMain(piles);
      }

      setLoading(false);
    };

    const getData = async (deckId) => {
      const data = await getDeck({ deckId });
      if (!data) {
        setError("Invalid deck id.");
        setLoading(false);
        return;
      }
      setDeck(data);
      parseData(data);
    };

    getData(deckId);
    // setDeck(deckData);
    // parseData(deckData.cards);
  }, [deckId]);

  if (loading) {
    return (
      <div className="deck">
        <Container>
          <div style={{ textAlign: "center" }}>Loading ...</div>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className="deck">
        <Container>
          <div style={{ textAlign: "center" }}>
            <div className="error">{error}</div>
            <Link to="/" className="button">
              Return home
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="deck">
      <Container>
        <Visual
          name={deck.name}
          format={deck.format}
          main={main}
          hero={hero}
          equipment={equipment}
          stats={stats}
          weapons={weapons}
        />
      </Container>
    </div>
  );
};

export default Deck;
