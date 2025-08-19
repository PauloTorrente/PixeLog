import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #1a1a1a;
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
  color: #64ffda;
  letter-spacing: 1px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavLink = styled.a`
  color: ${props => props.active ? '#64ffda' : '#aaaaaa'};
  text-decoration: none;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  position: relative;
  padding: 5px 0;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: #64ffda;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #64ffda;
  object-fit: cover;
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff4081;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
`;
