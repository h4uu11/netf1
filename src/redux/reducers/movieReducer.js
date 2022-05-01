const init = {
  upcomingMovies: [],
  topRatedMovies: [],
  popularMovies: [],
  onTheAirTvs: [],
  topRatedTvs: [],
  popularTvs: [],
};

const movieReducer = (state = init, action) => {
  switch (action.type) {
    case "MOVIE_SUCCESS":
      return {
        ...state,
        upcomingMovies: action.payload.upcoming,
        topRatedMovies: action.payload.topRated,
        popularMovies: action.payload.popular,
      };
    case "TV_SUCCESS":
      return {
        ...state,
        onTheAirTvs: action.payload.onTheAir,
        topRatedTvs: action.payload.topRated,
        popularTvs: action.payload.popular,
      };

    default:
      return { ...state };
  }
};

export default movieReducer;
