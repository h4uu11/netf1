import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const movieAction = () => {
  return async (dispatch, getState) => {
    const upcomingApi = api.get(
      `movie/upcoming?api_key=${API_KEY}&language=en-US`
    );

    const [upcoming] = await Promise.all([upcomingApi]);
    dispatch({ type: "MOVIE_SUCCESS", payload: { upcoming: upcoming.data } });
  };
};

export default movieAction;
