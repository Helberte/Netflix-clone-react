import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

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
          <div>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  );
}