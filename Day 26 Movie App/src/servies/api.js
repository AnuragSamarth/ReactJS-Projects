import axios from "axios";

const basedUrl = "https://api.themoviedb.org/3/discover/movie";
const apiKey = import.meta.env.VITE_API_KEY;
export const imagePath = "https://image.tmdb.org/t/p/w500";
export const imagePathOriginal = 'https://image.tmdb.org/t/p/original';

// TRENDING

async function fetchTrending(time_window = 'day'){
     const res = await axios.get(`${basedUrl}?api_key=${apiKey}`);
     return res;
    }

// async function fetchTrending(time_window = 'day') {
//   const res = await fetch(
//     `${basedUrl}/trending/all/${time_window}?api_key=${apiKey}`, {header}
//   );

//   const data = await res.json();

//   console.log(data);
// }

export { fetchTrending };
