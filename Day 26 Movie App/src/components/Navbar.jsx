import { Box, Container, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Box py="4" mb="2" className=" bg-slate-700">
        <Container maxW={"container.xl"}>
          <Flex justifyContent={"space-between"}>
            <Link to="/">
              <Box
                fontSize={"2xl"}
                fontWeight={"bold"}
                color={"red"}
                letterSpacing={"widest"}
                fontFamily={"mono"}
              >
                S-Movies
              </Box>
            </Link>

            {/* DESKTOP  */}
            <Flex gap={'5'} alignItems='center'>
                <Link to="/" className=" text-white">Home</Link>
                <Link to="/movies" className=" text-white">Movies</Link>
                <Link to="/shows" className=" text-white"> TV Shows</Link>
                <Link to="/search" className=" text-white">Search</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
