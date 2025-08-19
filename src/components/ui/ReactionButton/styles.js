import styled from 'styled-components';

export const ReactionButtonStyled = styled.button`
  background: transparent;
  border: none;
  color: #aaa;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: ${props => props.small ? '0.8rem' : '0.9rem'};
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #252525;
    color: #e0e0e0;
  }
`;
