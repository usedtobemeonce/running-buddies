import React from 'react';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import styled from 'styled-components';

const StyledMain = styled.main`
  height: calc(100% - 60px);
  display: flex;
  flex-wrap: nowrap;
`;

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <StyledMain>
        <Sidebar />
        <h1>running-buddies</h1>
      </StyledMain>
    </>
  );
}

export default App;
