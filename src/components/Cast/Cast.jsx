import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { getMovieCredits } from 'components/Api/API';
import css from './Cast.module.css'




const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data.data.cast));
  }, [movieId]);

  if (!cast) {
    return;
  }
  return (
    <ul className={css.list}>
      {cast.length === 0 && <p> We don't have any cast on this movie</p>}

      {cast.map(({ id, profile_path, name, original_name, character }) => (
        <li key={id}>
          <img
            width="200"
            src={
              profile_path
                ? imgBaseUrl + profile_path
                : 'https://svgsilh.com/svg_v2/1363011.svg'
            }
            alt="Foto"
          />
          <div>
            <h2>{name && original_name}</h2>
            <p>{character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Cast;