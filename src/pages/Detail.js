import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { videoOne } = useSelector((state) => state.movieReducer);
  useEffect(() => {
    dispatch(movieAction.videoOne(params.videoType, params.id));
  }, [dispatch, params.id, params.videoType]);

  return (
    <div className="detail">
      <div
        className="visual"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${videoOne.backdrop_path})`,
        }}
      >
        <div className="title">{videoOne.title}</div>
      </div>
    </div>
  );
};

export default Detail;
