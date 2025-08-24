'use client';
import React, { useEffect, useState } from 'react';

const EMOJIS = ['❤️', '🍀', '🌍', '🍎', '⚽', '🚗', '🚨', '💎'];

interface CardType {
  id: number;
  emoji: string;
  flipped: boolean;
  matched: boolean;
}

const shuffleArray = (array: string[]) => {
  return array
    .flatMap((emoji) => [emoji, emoji]) // Duplicate emojis for pairs
    .sort(() => Math.random() - 0.5);
};

export default function MemoryGame() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);

  // Initialize game
  const startGame = () => {
    const shuffled = shuffleArray(EMOJIS).map((emoji, index) => ({
      id: index,
      emoji,
      flipped: false,
      matched: false,
    }));
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
  };

  useEffect(() => {
    startGame();
  }, []);

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || cards[index].flipped || cards[index].matched) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newFlipped;
      if (newCards[first].emoji === newCards[second].emoji) {
        // Match found
        newCards[first].matched = true;
        newCards[second].matched = true;
        setCards(newCards);
        setMatches((m) => m + 1);
        setFlippedCards([]);
      } else {
        // Not matched, flip back after delay
        setTimeout(() => {
          const revertedCards = [...newCards];
          revertedCards[first].flipped = false;
          revertedCards[second].flipped = false;
          setCards(revertedCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Memory Matching Game</h1>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`w-20 h-20 flex items-center justify-center text-2xl font-bold rounded-lg cursor-pointer transition-transform duration-300
              ${card.flipped || card.matched ? 'bg-white border-2 border-green-500' : 'bg-blue-500'}
            `}
            onClick={() => handleCardClick(index)}
          >
            {card.flipped || card.matched ? card.emoji : '❓'}
          </div>
        ))}
      </div>
      <div className="flex gap-6 mb-4">
        <p className="text-lg font-semibold">Moves: {moves}</p>
        <p className="text-lg font-semibold">Matches: {matches}</p>
      </div>
      <button
        onClick={startGame}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Reset Game
      </button>
    </div>
  );
}
