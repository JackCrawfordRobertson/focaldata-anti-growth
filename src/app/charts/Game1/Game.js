import React, { useState } from 'react';
import UserRanking from './UserRanking';
import AnimatedChart from './AnimatedChart';

const Game = () => {
  const [userRanking, setUserRanking] = useState(null);  // Store the ranking data
  const [showChart, setShowChart] = useState(false);  // Control chart visibility

  // Handle submission of ranking data
  const handleSubmit = (ranking) => {
    setUserRanking(ranking);
  };

  // Handle the continue button click to show the chart
  const handleContinue = () => {
    setShowChart(true);  // Show the chart after clicking continue
  };

  return (
    <div style={{ maxWidth: '100%', width: '100%', margin: '0 auto' }}>
      {/* UserRanking component will stay visible */}
      <UserRanking onSubmit={handleSubmit} onContinue={handleContinue} />

      {/* Conditionally render the chart below UserRanking */}
      {showChart && <AnimatedChart userRanking={userRanking} />}
    </div>
  );
};

export default Game;