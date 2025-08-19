import styled from 'styled-components';

export const PostContainer = styled.article`
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const PostHeader = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

export const GameCover = styled.img`
  width: 60px;
  height: 80px;
  border-radius: 5px;
  object-fit: cover;
`;

export const PostMeta = styled.div`
  flex: 1;
`;

export const GameTitle = styled.h4`
  margin: 0 0 5px 0;
  font-size: 0.95rem;
  font-weight: bold;
`;

export const PostSubtitle = styled.h3`
  margin: 5px 0 10px 0;
  font-size: 1.1rem;
  color: #e0e0e0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserAvatar = styled.img`
  width: ${props => props.small ? '30px' : '40px'};
  height: ${props => props.small ? '30px' : '40px'};
  border-radius: 50%;
  border: 2px solid #64ffda;
  object-fit: cover;
`;

export const UserName = styled.span`
  font-size: 0.9rem;
  color: #64ffda;
`;

export const PostTypeBadge = styled.span`
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 10px;
  background-color: ${props => props.type === 'analysis' ? '#2196f3' : '#ff9800'};
  color: white;
`;

export const PostContent = styled.div`
  margin-bottom: 15px;
  line-height: 1.6;
  
  p {
    margin: 0 0 15px 0;
  }
`;

export const ContentImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 15px 0;
  max-height: 400px;
  object-fit: cover;
`;

export const ReactionsBar = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding: 10px 0;
  margin-bottom: 15px;
`;

export const ReactionButton = styled.button`
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

export const CommentButton = styled(ReactionButton)`
  margin-left: auto;
`;

export const CommentsSection = styled.div`
  padding-top: 10px;
`;

export const Comment = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
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
`;
