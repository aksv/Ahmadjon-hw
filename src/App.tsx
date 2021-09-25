import React from 'react';
import Header from './containers/Header';
import Movies from './containers/Movies';
import { StyledApp } from './styles/App.styled';

function App() {
  return (
    <StyledApp>
      <Header/>
      <Movies/>
    </StyledApp>
  );
} 

export default App;
