import React from 'react';
import { 
  TrendingGameContainer, 
  TrendingRank, 
  TrendingCover, 
  TrendingInfo, 
  TrendingTitle, 
  TrendingStats 
} from './styles';

const TrendingGame = ({ game, rank }) => {

  const percentageMatch = game.stats.match(/(\d+)%/);
  const percentage = percentageMatch ? parseInt(percentageMatch[1]) : 0;
  

  const isPositive = percentage >= 70;
  const isMixed = percentage >= 50 && percentage < 70;
  const isNegative = percentage < 50;

  return (
    <TrendingGameContainer 
      positive={isPositive}
      mixed={isMixed}
    >
      <TrendingRank>#{rank}</TrendingRank>
      <TrendingCover src={game.coverImage} alt={game.title} />
      <TrendingInfo>
        <TrendingTitle>{game.title}</TrendingTitle>
        <TrendingStats 
          positive={isPositive}
          mixed={isMixed}
          negative = {isNegative}
        >
          {game.stats}
        </TrendingStats>
      </TrendingInfo>
    </TrendingGameContainer>
  );
};

export default TrendingGame;