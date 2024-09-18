import { useEffect, useState } from "react";
import { fetchTrending } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
// import { imagePath } from "../services/api";
import Card from "../components/Card/Card";
import TrendingMoviesHeader from "../components/TreandingMovieHeader/TreandingMovieHeader";

function Home() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState("");
  const [time_window, setTime_window] = useState("day");

  // console.log(time_window);

  useEffect(() => {
    setIsLoading(true);
    fetchTrending(time_window)
      .then((res) => {
        const data = res.data;
        const result = data.results;
        setMoviesData(result);
        toast.success("Message sent successfully!");
      })
      .catch((error) => {
        setError(error);
        toast.error(isError);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [time_window]);

  //  console.log(moviesData)

  return (
    <>
      <div className=" relative">
        <TrendingMoviesHeader setTime_window={setTime_window} lable={'Trending Movies'} />
        {isLoading ? (
            <div className="flex items-center justify-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {moviesData &&
              moviesData.map((item) => <Card item={item} key={item?.id} time_window={time_window} />)}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
