import React, {useState, useEffect} from "react";
import Movie from "../../components/Movie/Movie";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [popularityFilter, setPopularityFilter] = useState('popularityDescending');
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US&page=${page ?? 1}`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.log(error));

        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US')
            .then(response => response.json())
            .then(data => setGenres(data.genres))
            .catch(err => console.log(err))
    }, [movies])

    function handleSortByPop(e) {
        setPopularityFilter(e.target.value)
    }

    movies.sort((a, b) => {
        let dateA = new Date(a.release_date);
        let dateB = new Date(b.release_date);
        switch (popularityFilter) {
            case 'popularityDescending':
                return b.vote_average - a.vote_average;
            case 'popularityAscending':
                return a.vote_average - b.vote_average;
            case 'releaseDateDescending':
                return dateB - dateA;
            case 'releaseDateAscending':
                return dateA - dateB;
        }
    })

    return (
        <>
            <main className='main'>
                <Filter onPopularitySelect={handleSortByPop} />
                <div className="container grid-5" style={{marginTop: 50, marginBottom: 50, position: 'relative'}}>
                    {movies.map(movie => {
                        return <Movie genres={genres} key={movie.id} movie={movie} />
                    })}
                    <Pagination page={page} setPage={setPage}/>
                </div>
            </main>
        </>
    );
}

export default Main;