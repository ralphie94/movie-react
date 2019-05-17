import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import "./Profile.css"

class Profile extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        this.getUsersMovies()
            .then(({movies}) => this.setState({movies}))
    }

    getUsersMovies = async (movie) => {
        try {
            const postResponse = await fetch(`/users/${this.props.match.params.id}`)
            const parsedResponse = await postResponse.json();
            console.log(parsedResponse)
            return parsedResponse.user

        } catch(err){
            console.log(err)
        }
    }

    deleteMovie = async (e, id) => {
        e.preventDefault();
        // console.log(`/users/${this.props.match.params.id}/movies/${id}`)
        try {
            const removeMovie = await fetch (`/users/${this.props.match.params.id}/movies/${id}`, {
                method: "DELETE"
            });
            const removeMovieJson = await removeMovie.json();
            console.log(removeMovieJson)
            this.setState({
                movies: removeMovieJson.data.movies
            })
        } catch(err){
            console.log(err);
        }
    }
    
    render(){
        console.log(this.state)
        return (
            <div>
            <h1 id="main">Watch List</h1>
            {
                this.state.movies.map((m,i) =>
                <div>
                    <li>
                    <h1 id="title">{m.title}</h1>
                    <Link to={`/movies/${m.id}`}><img class="main" src={`https://image.tmdb.org/t/p/original/${m.image}`} /></Link><br/>
                    <button onClick={(e) => this.deleteMovie(e, m.id)} class="ui secondary button">Delete Movie</button>
                    </li>
                </div>
                )
            }
            </div>
        )
    }
}

export default withRouter(Profile);