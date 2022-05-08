import axios from 'axios';

export const getRandomMovie = async () => {
    const movies = ["Titanic", "Avengers", "Zombie", "Purge", "Soldier", "Attack", "Resident", "Love"];
    const rng = Math.floor(Math.random() * movies.length);
    const movieRandom = movies[rng];
    try {
        const resp = await axios.get(`http://www.omdbapi.com/?s=${movieRandom}&apikey=be6ab966`);
        return resp.data.Search;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getMovieDetail = async (id) => {
    try {
        const resp = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=be6ab966`);
        return resp.data.Search;
    } catch (error) {
        console.log(error);
        throw error;
    }
};