import React from 'react';
import { 
  GameSuggestionContainer, 
  GameCover, 
  GameInfo, 
  GameTitle, 
  GameMeta, 
  FollowButton 
} from './styles';

const GameSuggestion = ({ game }) => {
  return (
    <GameSuggestionContainer>
      <GameCover src={game.coverImage} alt={game.title} />
      <GameInfo>
        <GameTitle>{game.title}</GameTitle>
        <GameMeta>{game.genre} • {game.developer}</GameMeta>
        <FollowButton>Seguir</FollowButton>
      </GameInfo>
    </GameSuggestionContainer>
  );
};

export default GameSuggestion;
