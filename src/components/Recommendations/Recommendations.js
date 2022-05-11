import React from "react";
import {Link} from "react-router-dom";
import {trim} from "../../utils/utils";

const Recommendations = ({movie}) => {

    return (
        <>
            <Link className='recommendations__link' to={{
                pathname: `/movie/${trim(movie.title)}/${movie.id}`,
                id: movie.id,
                state: {
                    id: movie.id
                }
            }}>
                <div className="recommendations">
                    <figure>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                    </figure>
                    <span className="recommendations__name">
                        {movie.title}
                    </span>
                </div>
            </Link>
        </>
    )
}

export default Recommendations;