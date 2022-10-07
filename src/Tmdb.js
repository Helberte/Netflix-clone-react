const API_KEY = 'ce2ca0e5c919d735241b3c414855d5f9';
const API_BASE = 'https://api.themoviedb.org/3';

/*

- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários

*/


const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}


export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originais',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: []
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: []
      },
      {
        slug: 'action',
        title: 'Ação',
        items: []
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: []
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: []
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: []
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: []
      }
    ];
  }
}