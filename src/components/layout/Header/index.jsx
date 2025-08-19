import React from 'react';
import { 
  HeaderContainer, 
  Logo, 
  Nav, 
  NavLink, 
  UserSection, 
  UserAvatar, 
  NotificationBadge 
} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>PixeLog</Logo>
      <Nav>
        <NavLink active>Feed</NavLink>
        <NavLink>Jogos</NavLink>
        <NavLink>Amigos</NavLink>
      </Nav>
      <UserSection>
        <UserAvatar src="https://i.pravatar.cc/40" alt="Usuário" />
        <NotificationBadge>3</NotificationBadge>
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;
