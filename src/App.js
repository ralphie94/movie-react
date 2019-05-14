import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import * as routes from "./constants/routes";
import NavBar from './components/NavBar/NavBar';
import Movies from './components/Movies/Movies'
import Login from "./components/Login/Login"
import Register from "./components/Register/Register";

import MoviesShow from './components/MoviesShow/MoviesShow'

import './App.css';

const API_KEY = process.env.REACT_APP_KEY

console.log(API_KEY)

class App extends Component {

  state = {
    currentUser: null,
    movies:[]
  }

  doSetCurrentUser = user =>
    this.setState({
      currentUser: user
    })

  componentDidMount() {
    this.getMovies().then(data => {
      console.log(data)
      this.setState({movies: data.results})
    })
  }

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
    const {movies} = this.state
    return (
      <div>
        <NavBar currentUser={this.state.currentUser}/>
        
        <Switch>
          <Route exact path={routes.HOME} render={() => <Movies movies={movies} doSetCurrentUser={this.doSetCurrentUser}/> } />
          <Route exact path={routes.USERS} />
          <Route exact path={routes.POSTS} />
          <Route exact path={'/movies/:id'} render={() => <MoviesShow />}/>
          <Route exact path={"/login"} render={(props) => <Login currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>}/>
          <Route exact path={"/register"} render={() => <Register />}/>
          <Route render={() => <div>NOT FOUND</div>}/>
        </Switch>     
      </div>
      
    );
  }
}

export default App;
