import React, {useState, useEffect, useContext} from "react";
import Movie from "../../components/Movie/Movie";
import Pagination from "../../components/Pagination/Pagination";

import {Context as MovieContext} from "../../context/moviesContext";

const Upcoming = () => {
    const {state, loadUpcomingMovies} = useContext(MovieContext);
    const [page, setPage] = useState(1)

    useEffect(() => {
        loadUpcomingMovies();
    }, [page])

    return (
        <>
            <main>
                <div className="container grid-5" style={{marginTop: 50, marginBottom: 50, position: 'relative'}}>
                    {state.upcomingMovies.map(movie => {
                        return <Movie genres={state.moviesGenres} key={movie.id} movie={movie} />
                    })}
                    <Pagination page={page} setPage={setPage}/>
                </div>
            </main>
        </>
    );
}

export default Upcoming;