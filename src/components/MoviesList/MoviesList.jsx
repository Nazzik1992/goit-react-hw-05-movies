import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './MoviesList.module.css'

export const MoviesList = ({ movies }) => {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
    const location = useLocation();
  
    return (
      movies && (
        <>
          
          <ul className={css.box}>
            {movies.map(({ id, title, original_name, poster_path }) => (
              <li className={css.item} key={id}>
                <NavLink to={`/movies/${id}`} state={{ from: location }}>
                  <img className={css.img}
                    src={
                      poster_path
                        ? imageBaseUrl + poster_path
                        : 'https://svgsilh.com/svg_v2/1363011.svg'
                    }
                    alt="Foto"
                  />
                  <p className={css.title}>{title ?? original_name}</p>
                </NavLink>
              </li>
            ))}
          </ul>{' '}
        </>
      )
    );
  };