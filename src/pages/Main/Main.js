import React, {useState, useEffect} from "react";
import Movie from "../../components/Movie/Movie";

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US&page=1')
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.log(error));

        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US')
            .then(response => response.json())
            .then(data => setGenres(data.genres))
        console.log('sadsdsdsaas',movies)
    }, [movies])

    return (
        <>
            <main>
                <div className="container grid-6" style={{marginTop: 50, marginBottom: 50}}>
                    {movies.map(movie => {
                        return <Movie genres={genres} key={movie.id} movie={movie} />
                    })}
                </div>
            </main>
        </>
    );
}

export default Main;