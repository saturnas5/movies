import React, {useState, useEffect, useContext} from "react";
import Movie from "../../components/Movie/Movie";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";
import {Context as MoviesContext} from "../../context/moviesContext";

const Main = () => {
    const {state, loadPopularMovies, loadGenres} = useContext(MoviesContext);

    const [popularityFilter, setPopularityFilter] = useState('popularityDescending');
    const [page, setPage] = useState(1)

    useEffect(() => {
        loadPopularMovies(page);
    }, [page])

    function handleSortByPop(e) {
        setPopularityFilter(e.target.value)
    }

    state.popularMovies.sort((a, b) => {
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
                    {state.popularMovies.map(movie => {
                        return <Movie genres={state.moviesGenres} key={movie.id} movie={movie} />
                    })}
                    <Pagination page={page} setPage={setPage}/>
                </div>
            </main>
        </>
    );
}

export default Main;