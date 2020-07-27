import React from "react";

import Row from './Row';
import requests from './request';

import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Netflix Home</h1>
            <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginal} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovie} />
        </div>
    );
}

export default App;
