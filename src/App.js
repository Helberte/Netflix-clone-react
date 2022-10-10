import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRows';
import FeaturedMovie from './components/featuredMovie';


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredDate, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total dos filmes

      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o featured filme em destaque
      let originais = list.filter(i=>i.slug === 'originais');
      let randomChosen = Math.floor(Math.random() * (originais[0].items.results.length -1));
      let chosen = originais[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);
/*
useEffect significa que quando a tela for carregada ele vai executar a função anônima passada por parâmetro
*/

  return(
    <div className='page'>

      {featuredDate &&
        <FeaturedMovie item={featuredDate} />
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}