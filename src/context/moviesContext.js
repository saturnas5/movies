import createDataContext from "./createDataContext";

const moviesReducer = (state, action) => {
    switch (action.type) {
        case 'loadPopularMovies':
            return {...state, popularMovies: action.payload}
        case 'loadUpcomingMovies':
            return {...state, upcomingMovies: action.payload}
        case 'loadTopRatedMovies':
            return {...state, topRatedMovies: action.payload}
        case 'loadGenres':
            return {...state, moviesGenres: action.payload}
        default:
            return state;
    }
}

const loadGenres = dispatch => {
    return async () => {
        try {
            const respone = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US');
            const data = await respone.json();
            dispatch({type: 'loadGenres', payload: data.genres})
        } catch (err) {
            throw new Error('Somthing went wrong with genres load')
        }
    }
}


const loadPopularMovies = dispatch => {
    return async (page) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US&page=${page}`);
            const data = await response.json();
            dispatch({type: 'loadPopularMovies', payload: data.results})
        } catch (err) {
            throw new Error('Somthing went wrong')
        }
    }
}

const loadUpcomingMovies = dispatch => {
    return async (page) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US&page=${page}`);
            const data = await response.json();
            dispatch({type: 'loadUpcomingMovies', payload: data.results})
        } catch (err) {
            throw new Error('Somthing went wrong')
        }
    }
}

const loadTopRatedMovies = dispatch => {
    return async (page) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US&page=${page}`);
            const data = await response.json();
            dispatch({type: 'loadTopRatedMovies', payload: data.results})
        } catch (err) {
            throw new Error('Somthing went wrong')
        }
    }
}


export const {Provider, Context} = createDataContext(
    moviesReducer,
    {loadPopularMovies, loadUpcomingMovies, loadTopRatedMovies, loadGenres},
    {
        popularMovies: [],
        upcomingMovies: [],
        topRatedMovies: [],
        moviesGenres: [],
    }
);