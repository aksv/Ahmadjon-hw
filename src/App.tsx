import React, { useState } from 'react';
import Form from './components/MovieForm';
import Logo from './components/Logo';
import { IMovie } from './components/types';
import Header from './containers/Header';
import Movies from './containers/Movies';
import movies from './db/movies';
import { StyledApp } from './styles/App.styled';
import MovieDetails from './components/MovieDetails';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [data, setData] = useState(movies);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>()

  const deleteMovie = (id:any) => {
    const udpated = data.filter(i => i.id !== id)
    setData(udpated)
  }

  const addHandler = (movie: IMovie) => {
    setData([{...movie, id: `${data.length + 1}`}, ...data])
  }

  const editHandler = (id: string) => {
    // I will implement this one with API
    console.log('edit handler')
  }

  const filterMovies = (id:string):any =>{
    if(id === 'all'){
      setData(movies)
    }else{
      const sortedList = movies.filter(item => item.genre === id);
      setData(sortedList);
      console.log(sortedList,'sorted list', )
      console.log(data, id,'DATA list', )
    }
  }

  const selectedMovieHandler = (id:string):any => {
    if(id !== ""){
      const foundMovie = data.find(item => item.id === id)
      setSelectedMovie(foundMovie)
    }else{
      setSelectedMovie(null)
    }
  }


  return (
    <StyledApp>
      {
        !selectedMovie &&(
          <Header modalOpen={() => setModalIsOpen(true)}/>
        )
      }
      {
        selectedMovie && (
          <MovieDetails data={selectedMovie} selectedMovieHandler={selectedMovieHandler}/>
        )
      }
      <Form addMovie={addHandler} isOpen={modalIsOpen} modalClose={() => setModalIsOpen(false)}/>
      <Movies selectMovieHandler={selectedMovieHandler} filterMovies={filterMovies}  edit={editHandler} add={addHandler} deleteHandler={deleteMovie} data={data}/>
      <Logo/>
    </StyledApp>
  );
} 

export default App;
