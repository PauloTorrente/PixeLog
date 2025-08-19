import React from 'react';
import { 
  CommentContainer, 
  UserAvatar, 
  CommentContent, 
  CommentAuthor, 
  CommentText, 
  CommentReactions 
} from './styles';
import ReactionButton from '../ReactionButton';

const Comment = ({ comment }) => {
  return (
    <CommentContainer>
      <UserAvatar small src={comment.user.avatar} alt={comment.user.username} />
      <CommentContent>
        <CommentAuthor>{comment.user.username}</CommentAuthor>
        <CommentText>{comment.text}</CommentText>
        <CommentReactions>
          {Object.entries(comment.reactions).map(([reaction, count]) => (
            <ReactionButton key={reaction} small>
              {reaction} {count}
            </ReactionButton>
          ))}
        </CommentReactions>
      </CommentContent>
    </CommentContainer>
  );
};

export default Comment;
