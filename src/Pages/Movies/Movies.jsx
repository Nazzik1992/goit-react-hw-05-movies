import { MoviesList } from 'components/MoviesList/MoviesList';
import { Search } from 'components/Search/Search';
import { useState, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/API';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;
    searchMovies(query).then(res => setMovies(res.data.results));
  }, [searchParams]);


  return (
<>
    <Search setSearchParams={setSearchParams}/>
    <MoviesList movies={movies} />
    </>
  )
}
export default Movies;