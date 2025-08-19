import styled from 'styled-components';

export const PostContainer = styled.article`
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  border-left: 4px solid ${props => props.color || '#64ffda'};
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
  margin: 0 0 8px 0;
  font-size: 0.95rem;
  font-weight: bold;
  color: #e0e0e0;
`;

export const StatusBadge = styled.span`
  font-size: 0.7rem;
  padding: 4px 10px;
  border-radius: 12px;
  background-color: ${props => props.color};
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  display: inline-block;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
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
  font-weight: bold;
`;

export const StatusMessage = styled.span`
  font-size: 0.9rem;
  color: #aaaaaa;
`;

export const Timestamp = styled.div`
  font-size: 0.8rem;
  color: #777;
  margin-top: 5px;
`;
