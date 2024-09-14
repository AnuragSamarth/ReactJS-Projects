import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { imagePath, imagePathOriginal } from "../servies/api";

function Card({ item }) {
  return (
    <>
      <Link to={`/${item?.media_type}/${item?.id}`}>
        <Box>
          <Image src={`${imagePath}/${item?.poster_path}`} alt={item?.title} />
        </Box>
        <Box>
          <Text className=" text-white">{item?.title || item?.name}</Text>
          <Text>
            <span className=" text-white">
              {new Date(item?.release_date).getFullYear()}
            </span>
          </Text>
          <Text>
            <h1 className=" text-white">Star Icon</h1>
            <span className=" text-white">{item?.vote_average?.toFixed()}</span>
          </Text>
        </Box>
      </Link>
    </>
  );
}

export default Card;
