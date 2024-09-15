import axios from "axios";

const basedUrl = "https://api.themoviedb.org/3/trending";
const apiKey = import.meta.env.VITE_API_KEY;
export const imagePath = "https://image.tmdb.org/t/p/w500";
export const imagePathOriginal = 'https://image.tmdb.org/t/p/original';

// Featching Treanding Movies 
export async function fetchTrending(time_window = 'day'){
    const res = await axios.get(`${basedUrl}/movie/${time_window}?api_key=${apiKey}`);
    return res;
}

// Featching Treanding Shows 
export async function fetchTvSeries(time_window = 'day'){
    const res = await axios.get(`${basedUrl}/tv/${time_window}?api_key=${apiKey}`);
    return res
}

// // Featching Details of Movies $ Tv Shows 
export async function fetchDetails(time_window){
    const res = await axios.get(`${basedUrl}/all/${time_window}?api_key=${apiKey}`);
    return res
}