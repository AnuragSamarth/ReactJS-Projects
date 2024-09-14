import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchTrending } from "../servies/api";
import Card from "../components/Card";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react' 



function Home() {
  
  const [data , setData] = useState([]);
  const [time_window, setTime_window] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  function handleClick(){
   return function(e){
     const userClick = e.target.innerHTML;
     if(userClick === 'Today'){
      setTime_window('day')
     }else if(userClick === 'This Week'){
       setTime_window('week')
     }
   }
  }
  console.log(time_window)


  useEffect(()=>{
    setIsLoading(true)
     fetchTrending(time_window).then((res)=>{
      const data = res.data;
      const result = data.results;
      setData(result)
     }).catch((error)=>{
      console.log(error)
     }).finally(()=>{
      setIsLoading(false)
     })
  },[time_window])

  // console.log(data)


  return (
    <div>
      <div className=" flex items-center gap-32 mb-5">
        <h1 className=" text-3xl text-white">Treanding</h1>
       <div className=" flex gap-10">
       <button className=" border-2 px-6 py-2 rounded-lg text-white" onClick={handleClick()}>Today</button>
       <button  className=" border-2 px-6 py-2 rounded-lg text-white" onClick={handleClick()}>This Week</button>
       </div>
      </div>

      <Grid templateColumns={{base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)",
        lg: "repeat(5, 1fr)"
      }} gap={4}>
          {
            data && data?.map((item, i) => (
              isLoading ? (
                <Skeleton key={i} height={300}/>
              ) : (
                <Card key={item?.id} item={item}/>
              )
            ))
          }
      </Grid>
    </div>
  );
}

export default Home;
