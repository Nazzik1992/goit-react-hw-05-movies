import { Routes, Route } from 'react-router-dom';
import Header  from './Header/Header';
import { Suspense, lazy } from 'react';


export const App = () => {

  const Home = lazy(() => import('Pages/Home/Home'));
  const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
  const Movies = lazy(() => import('Pages/Movies/Movies'));
  const Cast = lazy(() => import('./Cast/Cast'));
  const Reviews = lazy(() => import('./Reviews/Reviews'));
  const NotFound = lazy(() => import('Pages/NotFound/NotFound'));
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      
      <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />}/>
        <Route element={<Movies />} path="movies" />

        <Route element={<MovieDetails />} path="movies/:movieId">
          <Route element={<Cast />} path="cast" />
          <Route element={<Reviews />} path="reviews" />
        </Route>

        
        <Route path="*" element={<NotFound />} />
      </Route>
      </Routes>
      </Suspense>
    </>
  );
};