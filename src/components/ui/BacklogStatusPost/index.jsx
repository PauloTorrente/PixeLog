import React from 'react';
import { 
  PostContainer,
  PostHeader,
  GameCover,
  PostMeta,
  GameTitle,
  StatusBadge,
  UserInfo,
  UserAvatar,
  UserName,
  StatusMessage,
  Timestamp
} from './styles';

const BacklogStatusPost = ({ post }) => {
  const getStatusConfig = (status) => {
    const config = {
      added: { color: '#2196f3', text: 'ADICIONADO', message: 'adicionou à biblioteca' },
      completed: { color: '#4caf50', text: 'CONCLUÍDO', message: 'concluiu' },
      dropped: { color: '#f44336', text: 'ABANDONADO', message: 'abandonou' },
      backlog: { color: '#ff9800', text: 'GELADEIRA', message: 'colocou na geladeira' },
      playing: { color: '#9c27b0', text: 'JOGANDO', message: 'está jogando' }
    };
    return config[status] || config.added;
  };

  const statusConfig = getStatusConfig(post.status);

  return (
    <PostContainer>
      <PostHeader>
        <GameCover src={post.game.coverImage} alt={post.game.title} />
        <PostMeta>
          <GameTitle>{post.game.title}</GameTitle>
          <StatusBadge color={statusConfig.color}>
            {statusConfig.text}
          </StatusBadge>
          <UserInfo>
            <UserAvatar small src={post.user.avatar} alt={post.user.username} />
            <UserName>{post.user.username}</UserName>
            <StatusMessage>
              {statusConfig.message} este jogo
            </StatusMessage>
          </UserInfo>
          <Timestamp>{post.timestamp}</Timestamp>
        </PostMeta>
      </PostHeader>
    </PostContainer>
  );
};

export default BacklogStatusPost;
