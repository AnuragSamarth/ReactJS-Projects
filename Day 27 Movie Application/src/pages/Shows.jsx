import { useEffect, useState } from "react";
import { fetchTvSeries } from "../services/api";
import TrendingMoviesHeader from "../components/TreandingMovieHeader/TreandingMovieHeader";
import Card from "../components/card/Card";

function Shows() {
  const [showsData, setShowsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [time_window, setTime_window] = useState("day");

  useEffect(() => {
    setIsLoading(true);
    fetchTvSeries(time_window)
      .then((res) => {
        const result = res.data;
        const data = result.results;
        setShowsData(data);
      })
      .catch((error) => {
        setIsError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [time_window]);

  // console.log(showsData);

  return (
    <>
      <div className=" relative">
        <TrendingMoviesHeader
          setTime_window={setTime_window}
          lable={"Trending Shows"}
        />
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {showsData &&
              showsData.map((item) => (
                <Card item={item} key={item?.id} time_window={time_window} />
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Shows;
