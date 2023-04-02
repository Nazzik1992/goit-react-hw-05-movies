import axios from 'axios';

const searchParams = new URLSearchParams({
  api_key: '76cdf71b1889ea17fa7152ba0e3e3fa5',
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = () => {
  return axios.get(`/trending/movie/week?${searchParams}`);
};
export const searchMovies = name => {
  return axios.get(`/search/movie?${searchParams}&query=${name}`);
};
export const getMovieDetails = id => {
  return axios.get(`/movie/${id}?${searchParams}`);
};
export const getMovieCredits = id => {
  return axios.get(`/movie/${id}/credits?${searchParams}`);
};
export const getMovieReviews = id => {
  return axios.get(`/movie/${id}/reviews?${searchParams}`);
};




