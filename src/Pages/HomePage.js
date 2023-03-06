import React from "react";
import Banner from "../components/Banner";

import Row from "../components/Row";

import requests from "../requests";

const HomePage = () => {
  return (
    <div className="home">
      <Banner />
      <Row
        title="OZFLIX ORIGINALS"
        fetchUrl={requests.requestNetflixOriginal}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.requestNowPlaying} />
      <Row title="Top Rated" fetchUrl={requests.requestTopRated} />
      <Row title="Action Movies" fetchUrl={requests.requestActionMovies} />
      <Row title="Comedy" fetchUrl={requests.requestComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.requestDocumentaries} />
    </div>
  );
};

export default HomePage;
