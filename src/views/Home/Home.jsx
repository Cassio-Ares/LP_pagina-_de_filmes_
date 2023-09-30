import { useEffect, useState } from "react";
import { MovieService } from "../../api/MoviesService";
import './index.scss'
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = ({searchValueProps}) => {
  const [movies, setMovies] = useState(
    []
  ); 
  async function getMovies() {
    const {
      data: { results },
    } = await MovieService.getMovies();

    setMovies(results);
  }



  useEffect(() => {
    getMovies();
  }, []);



 async function getMoviesSearch(movieString) {
  const {
    data: { results },
  } = await MovieService.searchMovies(movieString);

  setMovies(results);
}

useEffect(() => {
  if(searchValueProps){
    getMoviesSearch(searchValueProps)
  }
  if(searchValueProps === ''){    
    getMovies();
  }
}, [searchValueProps])


return (
    <div className="home">
      {movies.map((movies ) => (
        <div key={movies.id}>
          <MovieCard movieProp = {movies}/>
        </div>
      ))}
    </div>
  );
};



export default Home;
