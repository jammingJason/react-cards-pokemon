import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import PlayingCard from './PlayingCard';
import useAxiosGet from './hooks/useAxiosGet';
import './PlayingCardList.css';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const data = useAxiosGet('https://deckofcardsapi.com/api/deck/new/draw/');
  // const addCard = async () => {
  //   const response = await axios.get(
  //     'https://deckofcardsapi.com/api/deck/new/draw/'
  //   );
  //   setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
  // };
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={data.connect}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {data.data.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
