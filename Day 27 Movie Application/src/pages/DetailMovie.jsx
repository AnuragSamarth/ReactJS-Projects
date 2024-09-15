import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imagePath, imagePathOriginal } from "../services/api";
import { fetchDetails } from "../services/api";
import { Calendar, Clock, Film, Star, Tv } from "lucide-react";

function DetailMovie() {
  const { type, id, time_window } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [filterData, setFilterData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    let details;
    if (type === "movie") {
      details = fetchDetails(time_window);
    } else if (type === "tv") {
      details = fetchDetails(time_window);
    }
    details
      .then((res) => {
        const data = res.data.results;
        const matchedItem = data.find((item) => item.id === Number(id));
        setMovieDetails(matchedItem); 
      })
      .catch((error) => {
        setIsError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [type, id, time_window]);

  // console.log(movieDetails)

//   useEffect(() => {
//     const filterMovieShow = movieDetails.filter(
//       (item) => item.id === Number(id)
//     );
//     setFilterData(filterMovieShow);
//   }, [movieDetails, id]);

//   console.log(filterData);

console.log(movieDetails)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-500 text-2xl">Error: {isError}</div>
      </div>
    );
  }

  if (!movieDetails) {
    return null;
  }

//   console.log(movieDetails[0].name)

  const title =
    movieDetails.title ||
    movieDetails.name ||
    movieDetails.original_title ||
    movieDetails.original_name;

  const releaseDate = movieDetails.release_date || movieDetails.first_air_date;

  return (
    <>
      {movieDetails && (
        <div className="min-h-screen bg-gray-100">
          <div
            className="relative h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url(${imagePathOriginal}${movieDetails.backdrop_path})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
              <div className="flex items-center text-white space-x-4">
                <span className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  {movieDetails.vote_average}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-5 h-5 mr-1" />
                  {new Date(releaseDate).getFullYear()}
                </span>
                {movieDetails.runtime && (
                  <span className="flex items-center">
                    <Clock className="w-5 h-5 mr-1" />
                    {Math.floor(movieDetails.runtime / 60)}h{" "}
                    {movieDetails.runtime % 60}m
                  </span>
                )}
                {movieDetails.number_of_seasons && (
                  <span className="flex items-center">
                    <Tv className="w-5 h-5 mr-1" />
                    {movieDetails.number_of_seasons}{" "}
                    {movieDetails.number_of_seasons === 1
                      ? "Season"
                      : "Seasons"}
                  </span>
                )}
                <span className="flex items-center capitalize">
                  {movieDetails.media_type === "movie" ? (
                    <Film className="w-5 h-5 mr-1" />
                  ) : (
                    <Tv className="w-5 h-5 mr-1" />
                  )}
                  {movieDetails.media_type}
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={`${imagePath}${movieDetails.poster_path}`}
                  alt={title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-700 mb-6">{movieDetails.overview}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Popularity</h3>
                    <p className="text-gray-700">{movieDetails.popularity}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Release Date</h3>
                    <p className="text-gray-700">
                      {new Date(releaseDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailMovie;
