import React from "react";
import Header from "./components/Header/Header.js";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./pages/Main/Main";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Actor from "./pages/Actor/Actor";
import Upcoming from "./pages/Upcoming/Upcoming";
import TopRated from "./pages/TopRated/TopRated";
import Latest from "./pages/Latest/Latest";

function App() {
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
          </BrowserRouter>
      </div>
  )
}

export default App;
