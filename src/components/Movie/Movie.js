import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Movie = ({movie, genres}) => {
    let test = genres.filter(item => {
        for(let j = 0; j < movie.genre_ids.length; j ++) {
            if(item.id === movie.genre_ids[j]) {
                return item
            }
        }
    })

    function trim(name) {
        const chars = {' ': '-', ':': '', '-': '-'};
        return name.trim().toLowerCase().replace(/[ :-]/g, m => chars[m]);
    }

    return (
        <>
            <div className="movie">
                <Link to={{
                    pathname: `/movie/${trim(movie.title)}/${movie.id}`,
                    id: movie.id,
                    state: {
                        id: movie.id
                    }
                }}>
                    <div className="movie__img">
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title}/>
                    </div>
                    <h3>{movie.original_title}</h3>
                    <p>{movie.release_date}</p>
                    <p>{test.length > 1 && test.map(item => item.name)}</p>
                    <div className="movie__score-box">
                        {movie.vote_average}
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Movie;