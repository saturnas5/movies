import React, {useState, useEffect} from "react";
import {useLocation, Link} from 'react-router-dom';
import {trim} from "../../utils/utils";


const Actor = () => {
    const [actor, setActor] = useState({})
    const [actorMovies, setActorMovies] = useState({})
    let location = useLocation();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/${location?.state?.actorId}?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US`)
            .then(response => response.json())
            .then(data => {
                if(data) {
                    setActor(data)
                }
            })
            .catch(err => console.log(err))
    }, [location])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/${location?.state?.actorId}/movie_credits?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US`)
            .then(response => response.json())
            .then(data => {
                if(data) {
                    setActorMovies(data.cast)
                }
            })
            .catch(err => console.log(err))
    },[location])

    function bestMovies(list) {
        let moviesByRate = list.filter(movie => movie.vote_average > 6.5)
        let filteredMovies = moviesByRate.filter(movie => Number.parseInt(movie.release_date) > 2010) ?? null
        return filteredMovies
    }

    if(!actor || !actorMovies) {
        return <p>labas</p>
    }
    return (
        <>
            <section className="actor-section">
                <div className="container">
                    <div className="actor">
                        <div className="actor__personal">
                            <figure>
                                <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt={actor?.name}/>
                            </figure>
                            <h3 className="actor__personal-info">
                                Personal Info
                            </h3>
                            <div className="actor__personal-info-list">
                                <div className="actor__personal-info-list-box">
                                    <span className='actor__personal-info-list-box-name'>Known For</span>
                                    <span className='actor__personal-info-list-box-item'>{actor?.known_for_department}</span>
                                </div>
                                <div className="actor__personal-info-list-box">
                                    <span className='actor__personal-info-list-box-name'>Popularity</span>
                                    <span className='actor__personal-info-list-box-item'>{actor?.popularity}</span>
                                </div>
                                <div className="actor__personal-info-list-box">
                                    <span className='actor__personal-info-list-box-name'>Gender</span>
                                    <span className='actor__personal-info-list-box-item'>{actor.gender === 2 ? 'Male' : 'Female'}</span>
                                </div>
                                <div className="actor__personal-info-list-box">
                                    <span className='actor__personal-info-list-box-name'>Birthday</span>
                                    <span className='actor__personal-info-list-box-item'>{actor?.birthday}</span>
                                </div>
                                <div className="actor__personal-info-list-box">
                                    <span className='actor__personal-info-list-box-name'>Place of Birth</span>
                                    <span className='actor__personal-info-list-box-item'>{actor?.place_of_birth}</span>
                                </div>
                            </div>
                        </div>
                        <div className="actor__acting">
                            <h2 className="actor__acting-title">
                                {actor?.name}
                            </h2>
                            <div className="actor__acting-biography">
                                <span className="actor__acting-biography-title">
                                    Biography
                                </span>
                                <p className="actor__acting-biography-description">
                                    {actor?.biography}
                                </p>
                                <div className="actor__acting-best-movies">
                                    <span className="actor__acting-best-movies-title">
                                        Known For
                                    </span>
                                    <div className="actor__acting-best-movies-slider">
                                        {actorMovies.length > 0 && bestMovies(actorMovies).map(movie => {
                                            return (
                                                <Link key={movie.id} to={{
                                                    pathname: `/movie/${trim(movie.title)}/${movie.id}`,
                                                    id: movie.id,
                                                    state: {
                                                        id: movie.id
                                                    }
                                                }} className="actor__acting-best-movies-slider-link">
                                                <div key={movie.id} className="actor__acting-best-movies-slider-item">
                                                    <figure>
                                                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}` ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : `https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title}/>
                                                    </figure>
                                                    <span>{movie.original_title}</span>
                                                </div>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="actor__acting-history">
                                <ul className="actor__acting-history-list">
                            {actorMovies.length > 0 && actorMovies.map(movie => {
                                return (
                                            <li key={movie.id} className="actor__acting-history-list-item">
                                                <Link to={{
                                                    pathname: `/movie/${trim(movie.title)}/${movie.id}`,
                                                    id: movie.id,
                                                    state: {
                                                        id: movie.id
                                                    }
                                                }} className="actor__acting-history-list-item-link">
                                                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt=""/>
                                                    {Number.parseInt(movie.release_date)} - {movie.original_title} | Rating: {movie.vote_average} from {movie.vote_count} votes.
                                                </Link>
                                            </li>
                                )
                            })}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Actor;