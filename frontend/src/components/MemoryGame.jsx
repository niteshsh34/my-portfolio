import React, { useState, useEffect, useCallback } from 'react';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  // ✅ Define FIRST
  const initializeGame = useCallback(() => {
    const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
      }));

    setCards(shuffledCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  }, []);

  // ✅ Safe to use now
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const handleCardClick = (id) => {
    if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      const [first, second] = newFlipped;

      if (cards[first].emoji === cards[second].emoji) {
        setMatched((prev) => [...prev, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  return (
    <div className="text-center">
      <div className="mb-4">
        <p className="text-white">Moves: {moves}</p>
        <button
          onClick={initializeGame}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Restart
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`w-20 h-20 flex items-center justify-center rounded cursor-pointer text-7xl ${
              flipped.includes(card.id) || matched.includes(card.id)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-700'
            }`}
          >
            {flipped.includes(card.id) || matched.includes(card.id) ? card.emoji : '?'}
          </div>
        ))}
      </div>

      {matched.length === cards.length && cards.length > 0 && (
        <p className="text-green-400 mt-4">
          Congratulations! You won in {moves} moves!
        </p>
      )}
    </div>
  );
};

export default MemoryGame;
