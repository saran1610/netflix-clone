import React from "react";
import "./Row.scss";
import { useState } from "react";
import { useEffect } from "react";

import axios from "../Helpers/Axios";

const Row = ({ title, fetchurl, islarge = false }) => {
  const [movies, setmovies] = useState([]);

  const baseurl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchdata = async () => {
      const request = await axios.get(fetchurl);
      setmovies(request.data.results);

      return request;
    };
    fetchdata();
  }, [fetchurl]);
  //   console.log(movies);
  return (
    <div className="row1">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map(
          (movie) =>
            ((islarge && movie.poster_path) ||
              (!islarge && movie.backdrop_path)) && (
              <img
                key={movie.id}
                src={`${baseurl}${
                  islarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
                className={`poster $(islarge && "posterLarge")`}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
