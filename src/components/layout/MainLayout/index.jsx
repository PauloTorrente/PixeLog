import React from 'react';
import { 
  MainLayoutContainer, 
  LeftSidebar as LeftSidebarStyled, 
  Feed as FeedStyled, 
  RightSidebar as RightSidebarStyled 
} from './styles';


export const LeftSidebar = LeftSidebarStyled;
export const Feed = FeedStyled;
export const RightSidebar = RightSidebarStyled;

const MainLayout = ({ leftSidebar, feed, rightSidebar }) => {
  return (
    <MainLayoutContainer>
      <LeftSidebar>{leftSidebar}</LeftSidebar>
      <Feed>{feed}</Feed>
      <RightSidebar>{rightSidebar}</RightSidebar>
    </MainLayoutContainer>
  );
};

export default MainLayout;
