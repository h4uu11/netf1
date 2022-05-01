import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const movieAll = () => {
  return async (dispatch, getState) => {
    const upcomingApi = api.get(
      `movie/upcoming?api_key=${API_KEY}&language=en-US`
    );
    const topRatedApi = api.get(
      `movie/top_rated?api_key=${API_KEY}&language=en-US`
    );
    const popularApi = api.get(
      `movie/popular?api_key=${API_KEY}&language=en-US`
    );
    const [upcoming, topRated, popular] = await Promise.all([
      upcomingApi,
      topRatedApi,
      popularApi,
    ]);
    dispatch({
      type: "MOVIE_SUCCESS",
      payload: {
        upcoming: upcoming.data,
        topRated: topRated.data,
        popular: popular.data,
      },
    });
  };
};
const tvAll = () => {
  return async (dispatch, getState) => {
    const onTheAirApi = api.get(
      `tv/on_the_air?api_key=${API_KEY}&language=en-US`
    );
    const popularApi = api.get(`tv/popular?api_key=${API_KEY}&language=en-US`);
    const topRatedApi = api.get(
      `tv/top_rated?api_key=${API_KEY}&language=en-US`
    );
    const [onTheAir, popular, topRated] = await Promise.all([
      onTheAirApi,
      popularApi,
      topRatedApi,
    ]);
    dispatch({
      type: "TV_SUCCESS",
      payload: {
        onTheAir: onTheAir.data,
        popular: popular.data,
        topRated: topRated.data,
      },
    });
  };
};
export const movieAction = {
  movieAll,
  tvAll,
};
