import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import * as routes from "./constants/routes";
import NavBar from './components/NavBar/NavBar';
import Movies from './components/Movies/Movies'
// import Login from "./components/Login/Login"

import MoviesShow from './components/MoviesShow/MoviesShow'

import './App.css';

const API_KEY='82f5b0c8452c5b698c5b7c68d5563ddd'

class App extends Component {

  state = {
    logged: false,
    username: "",
    movies: []
  }

  componentDidMount() {
    this.getMovies().then(data => {
      console.log(data)
      this.setState({movies: data.results})
    })
  }

  login = username =>
    this.setState({
      logged: true,
      username
    })

    getMovies = async () => {
      try {
        const movies = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
          if (!movies.ok) {
            throw Error(movies.response.statusText);
          }
          const moviesJson = await movies.json();
           return moviesJson
          
      } catch(err) {
        console.log(err, "err in the catch block");
        return err
      }
    }
  
  render(){
    const { username, movie, movies} = this.state
    return (
      <div>
        <NavBar />
        
        <Switch>
    <Route exact path={routes.ROOT} render={() => <Movies movies={movies}/> } />
          <Route exact path={routes.HOME} />
          <Route exact path={routes.USERS} />
          <Route exact path={routes.POSTS} />
          <Route exact path={'/movies/:id'} render={() => <MoviesShow />}/>
          <Route render={() => <div>NOT FOUND</div>}/>
        </Switch>     
      </div>
      
    );
  }
}

export default App;
