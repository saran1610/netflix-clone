import axios from "../Helpers/Axios";
import React, { useEffect, useState } from "react";
import request from "../Helpers/request";
import"./Banner.scss"
import { BsFillPlayCircleFill,BsInfoCircle } from "react-icons/bs";

const Banner = () => {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const requests = await axios.get(request.fetchNetflixOriginals);
    //  
    setmovie(
        requests.data.results[
            Math.floor(Math.random()*requests.data.results.length-1)
        ]
    );
    return request;
    };
    fetchdata();
  }, []);
  console.log(movie);

  function display(string,n){
    return string?.length>n ? string.substr(0,n-1)+"...":string;
  }

  return <header className="banner"
    style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition:"center center"
    }}>
      
        <div className="banner-content">
            <h1 className="banner-title ">
{movie?.title ||movie?.name || movie?.original_name }
            </h1>
          
            <h4 className="banner-display">
                {display(movie?.overview,150)}
            </h4>
        </div>
        <div className="banner-btn">
                <button className="banner-btn1"><BsFillPlayCircleFill className="me-2"/>Play</button>
                <button className="banner-btn1"><BsInfoCircle className="me-2"/>My list</button>
            </div>
            
       
  </header>;
};

export default Banner;
