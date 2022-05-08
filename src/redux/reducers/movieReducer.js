const init = {
  upcomingMovies: [],
  topRatedMovies: [],
  popularMovies: [],
  onTheAirTvs: [],
  topRatedTvs: [],
  popularTvs: [],
  videoOne: [],
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
    case "VIDEO_SUCCESS":
      return {
        ...state,
        videoOne: action.payload.video,
      };

    default:
      return { ...state };
  }
};

export default movieReducer;
