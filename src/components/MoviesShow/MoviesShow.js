import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import "./MovieShow.css"

const API_KEY='82f5b0c8452c5b698c5b7c68d5563ddd'

class Movies extends Component {
    state = {
        movie: {}
    }

    componentDidMount() {
        this.getMovies()
            .then(data => this.setState({movie: data}))
    }

    getMovies = async () => {
        try {
          console.log(this.props.match)
          const movies = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}`);
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
        return(
            <div>
                
                <h1>{this.state.movie.title}</h1><br/>
                <span class="date">{this.state.movie.release_date}</span><br/>
                <img class="show" src={`https://image.tmdb.org/t/p/original/${this.state.movie.backdrop_path}`}/><br/>
                <span class="overview">{this.state.movie.overview}</span><br/>
                <button type="submit" class="ui secondary button" value="Submit">Add Movie</button>
            </div>
        )
    }
}

export default withRouter(Movies);