import React, { useState, useEffect } from "react";

import requests from "./request";
import axios from "./axios";

import "./Banner.css";

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center top",
            }}
        >
            <div className="banner__contents">
                {/* title */}
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                {/* Button */}
                <button className="banner__btn">Play</button>
                <button className="banner__btn">My List</button>

                {/* description */}
                <h3 className="banner__desc">
                    {truncate(movie?.overview, 150)}
                </h3>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    );
}

export default Banner;
