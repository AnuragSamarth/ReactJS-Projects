import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { ToastContainer } from 'react-toastify';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center sm:text-left">S-Movies</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shows"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                }
              >
                Shows
              </NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/shows"
              className={({ isActive }) =>
                isActive
                  ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              }
              onClick={toggleMenu}
            >
              Shows
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}