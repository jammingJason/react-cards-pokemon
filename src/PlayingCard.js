import React, { useState } from 'react';
import backOfCard from './back.png';
import useFlip from './hooks/useFlip';
import './PlayingCard.css';

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [flipState, flipOverCard] = useFlip();

  return (
    <img
      src={flipState ? front : back}
      alt="playing card"
      onClick={flipOverCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
