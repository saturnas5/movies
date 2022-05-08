import React, {useState, useEffect} from "react";
import Movie from "../../components/Movie/Movie";
import Pagination from "../../components/Pagination/Pagination";

const Upcoming = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US&page=${page}`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.log(error));

        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US')
            .then(response => response.json())
            .then(data => setGenres(data.genres))
            .catch(err => console.log(err))
    }, [movies])

    return (
        <>
            <main>
                <div className="container grid-6" style={{marginTop: 50, marginBottom: 50, position: 'relative'}}>
                    {movies.map(movie => {
                        return <Movie genres={genres} key={movie.id} movie={movie} />
                    })}
                    <Pagination page={page} setPage={setPage}/>
                </div>
            </main>
        </>
    );
}

export default Upcoming;