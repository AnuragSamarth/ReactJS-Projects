import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">S-Movies</h2>
              <p className="text-sm">
                Your ultimate destination for movies and TV shows. Discover,
                explore, and stay updated with the latest in entertainment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-white transition-colors"
                  >
                    Movies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shows"
                    className="hover:text-white transition-colors"
                  >
                    TV Shows
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Trending
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Genres</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-white transition-colors">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors">
                    Comedy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors">
                    Drama
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors">
                    Sci-Fi
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} S-Movies. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link className="text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
