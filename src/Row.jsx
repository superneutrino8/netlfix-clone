import React, { useState } from "react";
import axios from './axios';

function Row({ title }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <h2>{title}</h2>

            {/* container -> posters */}
        </div>
    );
}

export default Row;
