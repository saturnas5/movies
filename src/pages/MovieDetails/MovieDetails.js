import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import Actors from "../../components/Actors/Actors";
import Reviews from "../../components/Reviews/Reviews";

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [actors, setActors] = useState({});
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [actLoading, setActLoading] = useState(true);
    let location = useLocation();
    console.log(location?.state?.id);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${location?.state?.id}/credits?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US`)
            .then(response => response.json())
            .then(data => setActors(data))
            .catch(err => console.log(err))
            .finally(() => setActLoading(false));
    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${location?.state?.id}/reviews?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setReviews(data.results))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${location?.state?.id}?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US`)
            .then(response => response.json())
            .then(data => {
                if(data) {
                    setMovie(data)
                }
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, []);

    if(loading) {
        return <p>loading</p>
    }
    return (
        <>
            <div
                className="movie-details"
                style={{
                    backgroundImage: `linear-gradient(to right bottom, rgba(119, 116, 116, 0.9), rgba(30, 20, 20, 0.9)), 
                                            url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="container padding-top-big flex-box">
                    <div className="movie-details__poster">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="poster__img"/>
                    </div>
                    <div className="movie-details__details">
                        <h2 className="movie-details__title">
                            {movie.title}
                        </h2>
                        <div className="movie-details__info">
                            <span className="movie-details__release">{movie.release_date} </span>
                            <ul className="movie-details__genres">
                                {movie.genres.map(item => {
                                    return <li key={item.id} className="movie-details__genres-item">{item.name}</li>
                                })}
                            </ul>
                            <span className="movie-details__duration">{movie.runtime}min.</span>
                        </div>
                        <div className="movie-details__cta">
                            <ul className="movie-details__cta-list">
                                <li className="movie-details__cta-list-item">{movie.vote_average}</li>
                                <li className="movie-details__cta-list-item">Add to list</li>
                                <li className="movie-details__cta-list-item">Mark as favorite</li>
                                <li className="movie-details__cta-list-item">Add to your watchlist</li>
                                <li className="movie-details__cta-list-item">Rate it</li>
                                <li className="movie-details__cta-list-item">Play trailer</li>
                            </ul>
                            <div className="movie-details__overview">
                                <span className="movie-details__overview-name">Overview</span>
                                <p className="movie-details__overview-text">
                                    {movie.overview}
                                </p>
                            </div>
                            <div className="details__peoples">
                                <div className="peoples__person">
                                    <span className="peoples__name">
                                        Kyle Killen
                                    </span>
                                    <span className="peoples__profile">
                                        Creator
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="actors-section">
            {!actLoading ? actors.cast.map(actor => {
                console.log(actor)
                return <Actors key={actor.id} actor={actor} />
            }) : null}
            </section>
            <section className="reviews">
                <h3 className='reviews__title'>Reviews</h3>
                {reviews.length > 0 ? reviews.slice(0, 2).map(review => {
                    return <Reviews key={review.id} review={review}/>
                }) : <span>No reviews yeat</span>}
            </section>
        </>
    );

}

export default MovieDetails;