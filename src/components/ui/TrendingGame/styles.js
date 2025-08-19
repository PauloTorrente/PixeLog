import styled from 'styled-components';

export const TrendingGameContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #333;
  position: relative;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 40px;
    width: 3px;
    background-color: ${props => {
      if (props.positive) return '#4caf50';
      if (props.mixed) return '#ff9800';
      return '#f44336';
    }};
    border-radius: 0 3px 3px 0;
  }
`;

export const TrendingRank = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
  width: 30px;
  text-align: center;
  color: #64ffda;
`;

export const TrendingCover = styled.img`
  width: 50px;
  height: 65px;
  border-radius: 5px;
  object-fit: cover;
`;

export const TrendingInfo = styled.div`
  flex: 1;
`;

export const TrendingTitle = styled.h4`
  margin: 0 0 5px 0;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const TrendingStats = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${props => {
    if (props.positive) return '#4caf50';
    if (props.mixed) return '#ff9800';
    return '#f44336';
  }};
`;
