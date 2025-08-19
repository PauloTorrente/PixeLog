import styled from 'styled-components';

export const CommentContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

export const UserAvatar = styled.img`
  width: ${props => props.small ? '30px' : '40px'};
  height: ${props => props.small ? '30px' : '40px'};
  border-radius: 50%;
  border: 2px solid #64ffda;
  object-fit: cover;
`;

export const CommentContent = styled.div`
  flex: 1;
  background-color: #252525;
  border-radius: 10px;
  padding: 10px 15px;
`;

export const CommentAuthor = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
  color: #64ffda;
  margin-bottom: 5px;
`;

export const CommentText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
`;

export const CommentReactions = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 5px;
`;
