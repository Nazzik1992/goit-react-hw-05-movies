import { useLocation, useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { MovieDetailsCard } from 'components/MovieDetailsCard/MovieDetailsCard';
import { getMovieDetails } from 'service/API';
import { NavLink } from 'react-router-dom';
import css from './MovieDetails.module.css'

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(res => setMovieDetails(res.data));
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }
  const backLink = location.state?.from ?? '/';

  return (
    <>
      
        <NavLink  to={backLink}> ← Go back</NavLink>
        <MovieDetailsCard movie={movieDetails} />
      
        <NavLink className={css.item} to={'cast'} state={{ from: backLink }}>
          Cast
        </NavLink>
        <NavLink className={css.item} to={'reviews'} state={{ from: backLink }}>
          Reviews
        </NavLink>
      
      <Outlet />
    </>
  );
};

export default MovieDetails;