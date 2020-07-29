import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import axios from "./axios";
import "./Row.css";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        // if [], run once when row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl]);

    if (movies)
        movies.sort((a, b) => (a.vote_average < b.vote_average ? 1 : -1));

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
            origin: "http://localhost:3000",
        },
    };

    const handleClick = (movie) => {
        console.log("Click");
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    console.log(url);
                    const urlParamas = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParamas.get("v"));
                })
                .catch((err) => console.log(err));
        }
    };

    // console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow &&
                            "row__posterLarge"}`}
                        onClick={() => handleClick(movie)}
                        src={`${BASE_URL}${
                            isLargeRow
                                ? movie.poster_path
                                : movie?.backdrop_path
                                ? movie?.backdrop_path
                                : movie.poster_path
                        }`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {/* container -> posters */}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
