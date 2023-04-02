import { useState, useEffect } from 'react';
import { getTrending } from 'components/Api/API'
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Home.module.css'


const Home = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      getTrending().then(res => setMovies(res.data.results));
    }, []);
  
    return (
      <>
      <h2 className={css.hometitle}> Trending today </h2>
        <MoviesList movies={movies} />
      </>
    );
  };
   export default Home;