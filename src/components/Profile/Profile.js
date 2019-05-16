import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'

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

    deleteMovie = async (id,e) => {
        e.preventDefault();
        try {
            const removeMovie = await fetch (`/users/${this.props.match.params.id}`, {
                method: "DELETE"
            });
            const removeMovieJson = await removeMovie.json();
            this.setState({
                movies: removeMovieJson.movies
            })
        } catch(err){
            console.log(err);
        }
    }
    
    render(){
        console.log(this.state)
        return (
            <div>
            <h1>Watch List</h1>
            {
                this.state.movies.map((m,i) =>
                <div>
                    <li>
                    <h1>{m.title}</h1>
                    <Link to={`/movies/${m.id}`}><img class="main" src={`https://image.tmdb.org/t/p/original/${m.image}`} /></Link><br/>
                    <button onClick={() => this.deleteMovie(m.id)} class="ui secondary button">Delete Movie</button>
                    </li>
                </div>
                )
            }
            </div>
        )
    }
}

export default withRouter(Profile);