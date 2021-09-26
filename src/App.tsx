import React from 'react';
import Logo from './components/Logo';
import Header from './containers/Header';
import Movies from './containers/Movies';
import { StyledApp } from './styles/App.styled';

function App() {
  return (
    <StyledApp>
      <Header/>
      <Movies/>
      <Logo/>
    </StyledApp>
  );
} 

export default App;
