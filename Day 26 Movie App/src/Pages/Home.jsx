import { Container, Grid, GridItem, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchTrending } from "../servies/api";
import { imagePath , imagePathOriginal } from "../servies/api";


function Home() {
  
  const [data , setData] = useState([]);

  useEffect(()=>{
     fetchTrending('day').then((res)=>{
      const data = res.data;
      const result = data.results;
      setData(result)
     }).catch((error)=>{
      console.log(error)
     })
  },[])

  console.log(data)


  return (
    <div>
      <Container maxW={"container.xl"}>
        <h1 className=" text-3xl text-white">Treanding</h1>
      </Container>

      <Grid templateColumns={'repeat(5, 1fr)'}>
          {
            data && data?.map((item) => (
              <Image key={item?.id} src={`${imagePath}/${item?.poster_path}`} />
            ))
          }
      </Grid>
    </div>
  );
}

export default Home;
