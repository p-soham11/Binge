/** @format */

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const TMDB_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjZmZjI5NTM1MTg3YThkZDE0MGQ5NzBkYjFmMmE4ZCIsInN1YiI6IjY1NGE5YjY5ZmQ0ZjgwMDEzY2VhOTJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mC5rCEJSFdsltXPWYMLHYkA9Pm1ZRedQQ6fNWWhm3sw";

const headers = {
    Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
