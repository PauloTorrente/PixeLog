import React from 'react';
import { ReactionButtonStyled } from './styles';

const ReactionButton = ({ children, small, onClick }) => {
  return (
    <ReactionButtonStyled small={small} onClick={onClick}>
      {children}
    </ReactionButtonStyled>
  );
};

export default ReactionButton;
