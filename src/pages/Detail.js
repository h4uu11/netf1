import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { movieAction } from "../redux/actions/movieAction";

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { videoDetail, videoRecommend } = useSelector(
    (state) => state.movieReducer
  );
  const navigate = useNavigate();

  const goLink = (videoType, id) => {
    navigate(`/${videoType}/${id}`);
  };

  useEffect(() => {
    dispatch(movieAction.videoDetail(params.videoType, params.id));
    dispatch(movieAction.videoRecommend(params.videoType, params.id));
  }, [dispatch, params.id, params.videoType]);

  return (
    <div className="detail">
      <div
        className="visual"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${videoDetail.backdrop_path})`,
        }}
      >
        <div className="inner">
          <div className="img">
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${videoDetail.poster_path}`}
              alt=""
            />
          </div>
          <div className="info">
            <div className="title">
              {videoDetail.title ? videoDetail.title : videoDetail.name}
              <span className="date">
                {videoDetail.release_date &&
                  videoDetail.release_date.substring(0, 4)}
              </span>
            </div>
            {/* <div className="tagline">{videoDetail.tagline}</div> */}
            <div className="geRun">
              <div className="genres">
                {videoDetail.genres &&
                  videoDetail.genres.map((item) => (
                    <span key={item.id}>{item.name}</span>
                  ))}
              </div>
              <div className="runtime">
                {videoDetail.runtime ? videoDetail.runtime + "m" : ""}
              </div>
            </div>
            <div className="overview">{videoDetail.overview}</div>
            <div className="btnWrap">
              <button>Trailer</button>
            </div>
          </div>
        </div>
      </div>
      <div className="recommend subVisual">
        <div className="title">Recommend</div>

        <Swiper
          slidesPerView={7}
          slidesPerGroup={7}
          spaceBetween={10}
          speed={1000}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className=""
        >
          {videoRecommend.map((item, index) => (
            <SwiperSlide
              key={index}
              onClick={() => goLink(params.videoType, item.id)}
            >
              <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Detail;
