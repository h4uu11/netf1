const init = {
  upcomingMovies: [],
};

const movieReducer = (state = init, action) => {
  switch (action.type) {
    case "MOVIE_SUCCESS":
      return {
        ...state,
        upcomingMovies: action.payload.upcoming,
      };

    default:
      return { ...state };
  }
};

export default movieReducer;
