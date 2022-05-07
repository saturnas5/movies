import React from "react";
import Header from "./components/Header/Header.js";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./pages/Main/Main";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

function App() {
  return (
      <div>
          <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Main/>
                </Route>
                <Route exact path='/movie/:name/:id'>
                    <MovieDetails/>
                </Route>
            </Switch>
          </BrowserRouter>
      </div>
  )
}

export default App;
