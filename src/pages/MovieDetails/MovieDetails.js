import React, {useEffect, useState} from "react";
import {useLocation, Link} from 'react-router-dom';
import clsx from "clsx";
import Actors from "../../components/Actors/Actors";
import Reviews from "../../components/Reviews/Reviews";
import Recommendations from "../../components/Recommendations/Recommendations";
import Popup from "../../components/Popup/Popup";
import Button from "../../components/Button/Button";

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [actors, setActors] = useState({});
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [actLoading, setActLoading] = useState(true);
    const [recommendations, setRecommendations] = useState([]);
    const [active, setActive] = useState(false);
    const [trailers, setTrailers] = useState([])
    const className = clsx({
        popup: true,
        active: active
    })
    let location = useLocation();

    // Fetching movie actors
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${location?.state?.id}/credits?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US`)
            .then(response => response.json())
            .then(data => setActors(data))
            .catch(err => console.log(err))
            .finally(() => setActLoading(false));
    }, [location?.state?.id])

    // Fetching movie reviews
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${location?.state?.id}/reviews?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setReviews(data.results))
            .catch(err => console.log('reviews', err))
    }, [location?.state?.id])

    // Fetching movie data
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${location?.state?.id}?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US`)
            .then(response => response.json())
            .then(data => {
                if(data) {
                    setMovie(data)
                }
            })
            .catch(error => console.log('data', error))
            .finally(() => setLoading(false))
    }, [location?.state?.id]);

    // Fetching movie recommendations
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${location?.state?.id}/recommendations?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                if(data) {
                    setRecommendations(data.results)
                }
            })
            .catch(err => console.log('recommendations', err))
    }, [location?.state?.id])

    // Fetching movie trailers array
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${location?.state?.id}/videos?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US`)
            .then(response => response.json())
            .then(data => {
                if(data) {
                    setTrailers(data.results)
                }
            })
            .catch(err => console.log('trailers', err))
    }, [location?.state?.id])

    function toogleTrailerPop() {
        if(active === false) {
            setActive(true)
        } else {
            setActive(false)
        }
    }

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
                                <li><Button value='Rate it' /></li>
                                <li><Button onClick={toogleTrailerPop} value='Play Trailer'/></li>
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
                return <Actors key={actor.id} actor={actor} />
            }) : null}

            </section>
            <div className="reviews-section">
                <h3 className='reviews__title'>Reviews</h3>
            <section className="reviews">
                {reviews.length > 0 ? reviews.map(review => {
                    return <Reviews key={review.id} review={review}/>
                }) : <span>No reviews yeat</span>}
            </section>
            </div>

            <div className="recommendations-section">
                <h4>Recommendations</h4>
            <div className="recommendations__box">
            {recommendations.map(movie => {
                return <Recommendations key={movie.id} movie={movie} />
            })}
            </div>
            </div>
            <Popup onClose={toogleTrailerPop} className={className} trailers={trailers}/>
        </>
    );

}

export default MovieDetails;