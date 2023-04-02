import { MoviesList } from 'components/MoviesList/MoviesList';
import { Search } from 'components/Search/Search';
import { useState, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'components/Api/API';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;
    searchMovies(query).then(res => setMovies(res.data.results));
  }, [query, searchParams]);



  const handleChange = (e) => setQuery(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(query !== '' ? {query} : {})
  }

  return (
<>
    <Search onSubmit={handleSubmit} onChange={handleChange}/>
    <MoviesList movies={movies} />
    </>
  )
}
export default Movies;