import React from 'react';
import { SidebarSectionContainer, SectionTitle } from './styles';

const SidebarSection = ({ title, children }) => {
  return (
    <SidebarSectionContainer>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SidebarSectionContainer>
  );
};

export default SidebarSection;
