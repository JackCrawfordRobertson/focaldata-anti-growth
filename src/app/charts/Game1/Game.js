import React, { useState } from 'react';
import UserRanking from './UserRanking';
import AnimatedChart from './AnimatedChart';

const Game = () => {
  const [userRanking, setUserRanking] = useState(null);

  const handleSubmit = (ranking) => {
    setUserRanking(ranking);
  };

  return (
    <div style={{ maxWidth: '100%', width: '100%', margin: '0 auto' }}>


      {!userRanking && <UserRanking onSubmit={handleSubmit} />}
      {userRanking && <AnimatedChart userRanking={userRanking} />}
    </div>
  );
};

export default Game;