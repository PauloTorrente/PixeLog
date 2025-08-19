import styled from 'styled-components';

export const GameSuggestionContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #333;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const GameCover = styled.img`
  width: 60px;
  height: 80px;
  border-radius: 5px;
  object-fit: cover;
`;

export const GameInfo = styled.div`
  flex: 1;
`;

export const GameTitle = styled.h4`
  margin: 0 0 5px 0;
  font-size: 0.95rem;
  font-weight: bold;
  color: #e0e0e0;
`;

export const GameMeta = styled.p`
  margin: 0 0 8px 0;
  font-size: 0.8rem;
  color: #aaaaaa;
`;

export const FollowButton = styled.button`
  background: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;
