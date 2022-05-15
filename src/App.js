import React, {useContext, useEffect} from "react";
import Header from "./components/Header/Header.js";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./pages/Main/Main";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Actor from "./pages/Actor/Actor";
import Upcoming from "./pages/Upcoming/Upcoming";
import TopRated from "./pages/TopRated/TopRated";
import Latest from "./pages/Latest/Latest";
import Footer from "./components/Footer/Footer";

import {Provider as MovieProvider} from "./context/moviesContext";
import {Context as MoviesContext} from "./context/moviesContext";


const App = () => {
    const {loadGenres} = useContext(MoviesContext);

    useEffect(() => {
        loadGenres();
    }, [])

  return (
      <div>
          <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Main/>
                </Route>
                <Route exact path='/upcoming'>
                    <Upcoming/>
                </Route>
                <Route exact path='/top-rated'>
                    <TopRated/>
                </Route>
                <Route exact path='/latest'>
                    <Latest/>
                </Route>
                <Route exact path='/movie/:name/:id'>
                    <MovieDetails/>
                </Route>
                <Route exact path='/actor/:name/:id'>
                    <Actor/>
                </Route>
            </Switch>
              <Footer/>
          </BrowserRouter>
      </div>
  )
}

export default () => {
    return (
        <MovieProvider>
            <App/>
        </MovieProvider>
    )
}
