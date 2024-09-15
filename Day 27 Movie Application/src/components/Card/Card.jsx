import { Link } from "react-router-dom";
import { imagePath } from "../../services/api";
import { Star } from "lucide-react";


function Card({item, time_window}) {
  return (
    <>
      <Link to={`/${time_window}/${item.media_type}/${item.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="relative">
          <img
            src={`${imagePath}${item.poster_path}`}
            alt={item.title || item.original_title}
            className="w-full h-72 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h2 className="text-white text-lg font-semibold truncate">
              {item.title || item.original_title || item.name}
            </h2>
            <p className="text-gray-300 text-sm">
              {new Date(item.release_date || item.first_air_date).getFullYear()}
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <span className="text-gray-700 font-medium">
                {item.vote_average.toFixed(1)}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              {new Date(item.release_date || item.first_air_date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}

export default Card;
