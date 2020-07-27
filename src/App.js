import React from "react";

import Row from './Row';
import requests from './request';

import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Netflix Home</h1>
            <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginal} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        </div>
    );
}

export default App;
