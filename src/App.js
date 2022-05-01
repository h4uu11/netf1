import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import movieAction from "./redux/actions/movieAction";

function App() {
  const dispatch = useDispatch();
  const { upcomingMovies } = useSelector((state) => state.movieReducer);

  useEffect(() => {
    dispatch(movieAction());
  }, [dispatch]);
  console.log(upcomingMovies);
  return <>asd</>;
}

export default App;
