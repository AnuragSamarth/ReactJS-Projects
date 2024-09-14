import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTrending } from "../servies/api";
import { DataContext } from "../context/DataContext";

function DetailsPage(){
   const [isLoading, setIsLoading] = useState(true)
   const [data, setData] = useState([]);
   const {id} =  useParams();
   
  const {movieData} = useContext(DataContext);

   // useEffect(()=>{
   //    setIsLoading(true)
   //     fetchTrending().then((res)=>{
   //      const data = res.data;
   //      const result = data.results;
   //      const filterData = [...result].filter(item => item.id === id)
   //      setData(filterData)
   //     }).catch((error)=>{
   //      console.log(error)
   //     }).finally(()=>{
   //      setIsLoading(false)
   //     })
   //  },[id])
   //  console.log(id)
   //  console.log(data)
                
    return <>
       <div>
         <h1>{movieData}</h1>
       </div>
    </>
}

export default DetailsPage;