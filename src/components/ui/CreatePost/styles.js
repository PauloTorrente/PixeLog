import styled from 'styled-components';

export const CreatePostContainer = styled.form`
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #64ffda;
  object-fit: cover;
  align-self: flex-start;
`;

export const PostInput = styled.textarea`
  background-color: #252525;
  border: none;
  border-radius: 15px;
  padding: 15px 20px;
  color: #e0e0e0;
  font-size: 0.9rem;
  font-family: inherit;
  resize: vertical;
  min-height: 60px;
  
  &::placeholder {
    color: #777;
  }
  
  &:focus {
    outline: none;
    border: 1px solid #64ffda;
  }
`;

export const PostTypeSelector = styled.div`
  display: flex;
  gap: 10px;
  align-self: flex-end;
`;

export const TypeOption = styled.button`
  padding: 8px 20px;
  border-radius: 20px;
  background-color: ${props => props.active ? '#64ffda' : '#252525'};
  color: ${props => props.active ? '#121212' : '#aaa'};
  font-size: 0.8rem;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  
  &:hover {
    background-color: ${props => props.active ? '#64ffda' : '#333'};
    transform: translateY(-1px);
  }
`;
