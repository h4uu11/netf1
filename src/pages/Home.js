import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

const Home = () => {
  const dispatch = useDispatch();
  const { popularTvs } = useSelector((state) => state.movieReducer);

  useEffect(() => {
    dispatch(movieAction.movieAll());
    dispatch(movieAction.tvAll());
  }, [dispatch]);

  return (
    /* https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/1uegR4uAxRxiMyX4nQnpzbXhrTw.jpg */
    /* https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h9fjtMeoaI3LrW8avMZoJPoniLZ.jpg */
    <div>
      <div>
        <img
          src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${
            popularTvs.results && popularTvs.results[0].backdrop_path
          }`}
          alt=""
        />
      </div>
      {popularTvs.results &&
        popularTvs.results.map((item, index) => (
          <img
            key={index}
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
            alt=""
          />
        ))}
    </div>
  );
};

export default Home;
