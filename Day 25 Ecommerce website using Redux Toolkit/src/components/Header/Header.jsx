import { Link } from "react-router-dom";

function Header() {

  return (
    <>
      <header className="bg-white">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <button
              type="button"
              className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
              <a href="#" title="" className="inline-flex">
                <span className="sr-only"> Rareblocks logo </span>
                {/* <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/logo.svg" alt="" /> */}
                <h1 className=" text-4xl">Samarth Shop</h1>
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:ml-16 xl:ml-24 lg:space-x-8">
              <a
                href="#"
                title=""
                className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                Men{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                Women{" "}
              </a>

             <Link to="/category-list"
                className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                Category List{" "}
              </Link>

              <a
                href="#"
                title=""
                className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                Stores{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                Customer Support{" "}
              </a>
            </div>

            <div className="flex items-center justify-end ml-auto space-x-2 sm:space-x-5">
              <button
                type="button"
                className="p-2 -m-2 text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="p-2 -m-2 text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="relative p-2 -m-2 text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>

                <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full">
                  {" "}
                  3{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
