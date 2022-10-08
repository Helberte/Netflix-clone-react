import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRows';


export default () => {

  const [movieList, setMovieList] = useState([]);


  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total dos filmes

      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);
/*
useEffect significa que quando a tela for carregada ele vai executar a função anônima passada por parâmetro
*/

  return(
    <div className='page'>
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}