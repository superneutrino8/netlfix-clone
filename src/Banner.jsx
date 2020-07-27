import React, { useState, useEffect } from "react";

import requests from "./request";
import axios from "./axios";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function getMovie() {
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        getMovie();
    }, []);

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents"></div>
        </header>
    );
}

export default Banner;
