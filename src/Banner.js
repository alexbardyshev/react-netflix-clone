import React, {useEffect, useState} from 'react';
import axios from "axios";
import requests from "./requests";

function Banner( props ) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);


    return (
        <header>
            {/* Background image */}
            {/* Title */}
            {/* Div > 2 buttons */}
            {/* Description */}
        </header>
    );
}

export default Banner;
