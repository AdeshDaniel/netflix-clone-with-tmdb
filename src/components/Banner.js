import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../Request";
import "./banner.css";

const Banner = () => {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrignals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h2 className="banner__desc">{movie.overview}</h2>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
