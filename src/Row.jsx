import React, { useState, useEffect  } from "react";

import axios from "./axios";
import "./Row.css";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // if [], run once when row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters" >
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className="row__poster"
                        src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {/* container -> posters */}
        </div>
    );
}

export default Row;
