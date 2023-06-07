import React from "react";
import Nav from "../../Components/Nav/Nav";
import Banner from "../../Components/Banner/Banner";
import Row from "../../Components/row/Row";
import request from "../../Components/Helpers/request";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={request.fetchNetflixOriginals}
        islarge="true"
      />
      <Row title="Trending now" fetchurl={request.fetchTrending} />
      <Row title=" Top Rated" fetchurl={request.fetchTopRated} />
      <Row title="Action Movies" fetchurl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={request.fetchHorrorMovies} />
      <Row title=" Romance Movies" fetchurl={request.fetchRomanceMovies} />
      <Row title=" Documentaries" fetchurl={request.fetchDocumentaries} />
    </div>
  );
};

export default Home;
