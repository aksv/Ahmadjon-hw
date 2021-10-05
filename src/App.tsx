import React, { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import Header from './containers/Header';
import Movies from './containers/Movies';
import movies from './db/movies';
import { StyledApp } from './styles/App.styled';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [data, setData] = useState(movies);

  const deleteMovie = (id:any) => {
    const udpated = data.filter(i => i.id !==id)
  }

  return (
    <StyledApp>
      <Header modalOpen={() => setModalIsOpen(true)}/>
      <Form isOpen={modalIsOpen} modalClose={() => setModalIsOpen(false)}/>
      <Movies data={data}/>
      <Logo/>
    </StyledApp>
  );
} 

export default App;
