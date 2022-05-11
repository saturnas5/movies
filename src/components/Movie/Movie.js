import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {trim} from "../../utils/utils";

const Movie = ({movie, genres}) => {
    let genre = genres.filter(item => {
        for(let j = 0; j < movie.genre_ids.length; j ++) {
            if(item.id === movie.genre_ids[j]) {
                return item
            }
        }
    })

    return (
        <>
            <div className="movie">
                <Link className='movie__link' to={{
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
                    {genre.length > 1 && genre.map(item => {
                        return <p key={item.id} className='movie__genre'>{item.name}</p>
                    }).slice(0, 2)}
                    <div className="movie__score-box">
                        {movie.vote_average}
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Movie;