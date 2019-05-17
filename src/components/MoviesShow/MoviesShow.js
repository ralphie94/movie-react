import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import "./MovieShow.css"
import { Container } from "semantic-ui-react"
import Videos from "../Videos/Videos"

const API_KEY= process.env.REACT_APP_KEY

class Movies extends Component {
    state = {
        movie: {},
        video: {},
        credit: []
    }

    componentDidMount() {
        this.getMovies()
            .then(data => this.setState({
                movie: data.movieJson,
                video: data.videosJson.results[0],
                credit: data.creditsJson
            }))
    }

    getMovies = async () => {
        try {
          console.log(this.props.match)
          const movies = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}`);
          const videos = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=${API_KEY}`);
          const credits = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=${API_KEY}`);

            if (!movies.ok) {
              throw Error(movies.response.statusText);
            }
            const movieJson = await movies.json();
            const videosJson = await videos.json();
            const creditsJson = await credits.json();
            return {movieJson, videosJson, creditsJson}
            
        } catch(err) {
          console.log(err, "err in the catch block");
          return err
        }
      }

    addMovie = async (movie)=>{
        try{
            const response = await fetch("/users/add",{
                method:"POST",
                credentials:"include",
                body:JSON.stringify(movie),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await response.json()
            if(parsedResponse.success){
                this.props.history.push(`/profile/${this.props.currentUser._id}`)
            }

        }catch(err){
            console.log(err)
        }
    }

    render(){
        return(
            
            <div>
                <Container>
                <h1 class="show">{this.state.movie.title}</h1><br/>
                <span class="date">Release Date: {this.state.movie.release_date}</span><br/>
                <img class="show" src={`https://image.tmdb.org/t/p/original/${this.state.movie.backdrop_path}`}/><br/>
                <h2 id="plot">Plot</h2><br/>
                <span class="overview">{this.state.movie.overview}</span><br/>
                <button class="ui secondary button" value="Submit" onClick={()=>{this.addMovie(this.state.movie)}}>Add Movie</button><br/>
                <Videos video={this.props.match.params.id}/>

                </Container>
            </div>
        )
    }
}

export default withRouter(Movies);