import React from 'react';
import Header from './components/Header';
import { StyledApp } from './styles/App.styled';

function App() {
  return (
    <StyledApp>
      <Header/>
      <h1>Global mentoring react</h1>
      <p>Hello world!</p>
    </StyledApp>
  );
} 

export default App;
