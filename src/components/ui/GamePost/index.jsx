import React, { useState } from 'react';
import { 
  PostContainer, 
  PostHeader, 
  GameCover, 
  PostMeta, 
  GameTitle, 
  PostSubtitle, 
  UserInfo, 
  UserAvatar, 
  UserName, 
  PostTypeBadge, 
  PostContent, 
  ContentImage, 
  ReactionsBar, 
  ReactionButton, 
  CommentButton,
  CommentsSection,
  Comment,
  CommentContent,
  CommentAuthor,
  CommentText,
  CommentReactions
} from './styles';

const GamePost = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <PostContainer>
      <PostHeader>
        <GameCover src={post.game.coverImage} alt={post.game.title} />
        <PostMeta>
          <GameTitle>{post.game.title}</GameTitle>
          <PostSubtitle>{post.review.subtitle}</PostSubtitle>
          <UserInfo>
            <UserAvatar small src={post.user.avatar} alt={post.user.username} />
            <UserName>{post.user.username}</UserName>
            <PostTypeBadge type={post.review.type}>
              {post.review.type === 'analysis' ? 'ANÁLISE' : 'Diário'}
            </PostTypeBadge>
          </UserInfo>
        </PostMeta>
      </PostHeader>
      
      <PostContent>
        {post.review.content}
        {post.review.image && <ContentImage src={post.review.image} alt={post.game.title} />}
      </PostContent>
      
      <ReactionsBar>
        {Object.entries(post.reactions).map(([reaction, count]) => (
          <ReactionButton key={reaction}>{reaction} {count}</ReactionButton>
        ))}
        <CommentButton onClick={() => setShowComments(!showComments)}>
          Comentar ({post.comments.length})
        </CommentButton>
      </ReactionsBar>
      
      {showComments && (
        <CommentsSection>
          {post.comments.map(comment => (
            <Comment key={comment.id}>
              <UserAvatar small src={comment.user.avatar} alt={comment.user.username} />
              <CommentContent>
                <CommentAuthor>{comment.user.username}</CommentAuthor>
                <CommentText>{comment.text}</CommentText>
                <CommentReactions>
                  {Object.entries(comment.reactions).map(([reaction, count]) => (
                    <ReactionButton small key={reaction}>{reaction} {count}</ReactionButton>
                  ))}
                </CommentReactions>
              </CommentContent>
            </Comment>
          ))}
        </CommentsSection>
      )}
    </PostContainer>
  );
};

export default GamePost;
