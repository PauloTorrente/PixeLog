import React, { useState } from 'react';
import { 
  CreatePostContainer, 
  UserAvatar, 
  PostInput, 
  PostTypeSelector, 
  TypeOption 
} from './styles';

const CreatePost = ({ onPostCreate }) => {
  const [postType, setPostType] = useState('analysis');
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim()) {
      onPostCreate({
        content: postContent,
        type: postType
      });
      setPostContent('');
    }
  };

  return (
    <CreatePostContainer onSubmit={handleSubmit}>
      <UserAvatar src="https://i.pravatar.cc/40" alt="Usuário" />
      <PostInput 
        placeholder="Compartilhe suas impressões sobre um jogo..." 
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <PostTypeSelector>
        <TypeOption 
          type="button"
          active={postType === 'analysis'} 
          onClick={() => setPostType('analysis')}
        >
          Análise
        </TypeOption>
        <TypeOption 
          type="button"
          active={postType === 'Diário'} 
          onClick={() => setPostType('Diário')}
        >
          Diário
        </TypeOption>
      </PostTypeSelector>
    </CreatePostContainer>
  );
};

export default CreatePost;
