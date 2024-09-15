import { useState } from 'react'
import { Calendar, Clock } from 'lucide-react'
import { useParams } from 'react-router-dom'

export default function TrendingMoviesHeader({setTime_window, lable='Movies/Tv'}) {

  const [activeButton, setActiveButton] = useState('day')
        setTime_window(activeButton)

  return (
    <div className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <h1 className="text-xl sm:text-xl md:text-xl font-bold text-white text-center sm:text-left">
            {lable}
          </h1>
          <div className="flex gap-4">
            <button
              className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeButton === 'day'
                  ? 'bg-white text-purple-700'
                  : 'bg-purple-600 text-white hover:bg-purple-500'
              }`}
              onClick={() => setActiveButton('day')}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Day
            </button>
            <button
              className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeButton === 'week'
                  ? 'bg-white text-purple-700'
                  : 'bg-purple-600 text-white hover:bg-purple-500'
              }`}
              onClick={() => setActiveButton('week')}
            >
              <Clock className="w-4 h-4 mr-2" />
              Week
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}