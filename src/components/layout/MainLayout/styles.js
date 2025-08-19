import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

export const LeftSidebar = styled.aside`
  width: 280px;
`;

export const Feed = styled.main`
  flex: 1;
  max-width: 700px;
`;

export const RightSidebar = styled.aside`
  width: 280px;
`;
