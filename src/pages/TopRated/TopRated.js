import React, {useState, useEffect, useContext} from "react";
import Movie from "../../components/Movie/Movie";
import Pagination from "../../components/Pagination/Pagination";

import {Context as MoviesContext} from "../../context/moviesContext";

const TopRated = () => {
    const {state, loadTopRatedMovies} = useContext(MoviesContext)

    const [page, setPage] = useState(1)



    useEffect(() => {
        loadTopRatedMovies(page);
    }, [page])

    return (
        <>
            <main>
                <div className="container grid-5" style={{marginTop: 50, marginBottom: 50, position: 'relative'}}>
                    {state.topRatedMovies.map(movie => {
                        return <Movie genres={state.moviesGenres} key={movie.id} movie={movie} />
                    })}
                    <Pagination page={page} setPage={setPage}/>
                </div>
            </main>
        </>
    );
}

export default TopRated;