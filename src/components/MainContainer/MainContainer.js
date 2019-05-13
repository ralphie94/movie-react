import React, {Component} from "react"

import { Link } from "react-router-dom"

import MoviesShow from "../MoviesShow/MoviesShow"

class MainContainer extends Component {
    render(){
        return(
            <div>
                <h1 id="greeting">Hello {this.props.username}!</h1><br/>
                {
                    this.props.movies.map(movie => 
                        <div class="row">
                         <div class="column">                           
                            <Link to={`/movies/${movie.id}`}><img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></Link>
                            </div>
                          </div>                           
                    )
                }
            </div>            
        )           
    }  
}

export default MainContainer