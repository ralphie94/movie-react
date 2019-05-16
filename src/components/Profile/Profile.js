import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'

class Profile extends Component {
    state = {
        movies: [],
        _id: null
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
            const deleteMovie = await fetch (`/users/${this.props.match.params.id}`, {
                method: "DELETE",
                credentials: "include"
            });
            const deleteMovieJson = await deleteMovie.json();
            this.setState({movies: this.state.movies.filter((movie,i) => movie._id !== id)})
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
                    <button class="ui secondary button">Delete Movie</button>
                    </li>
                </div>
                )
            }
            </div>
        )
    }
}

export default withRouter(Profile);