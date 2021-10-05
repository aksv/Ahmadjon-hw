import React, { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import Header from './containers/Header';
import Movies from './containers/Movies';
import { StyledApp } from './styles/App.styled';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  return (
    <StyledApp>
      <Header modalOpen={() => setModalIsOpen(true)}/>
      <Form isOpen={modalIsOpen} modalClose={() => setModalIsOpen(false)}/>
      <Movies/>
      <Logo/>
    </StyledApp>
  );
} 

export default App;
