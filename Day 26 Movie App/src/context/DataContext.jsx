import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [movieData, setMovieData] = useState('movies')

  return (
    <DataProvider.Provider value={{movieData, setMovieData}}>{children}</DataProvider.Provider>
  );
}

