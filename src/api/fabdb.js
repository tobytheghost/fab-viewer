const DECKS_ENDPOINT = "https://api.fabdb.net/decks/";

export const getDeck = async ({ deckId }) => {
  const url = `${DECKS_ENDPOINT}${deckId}`;

  //   console.log(url);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("404");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    return;
  }
};
