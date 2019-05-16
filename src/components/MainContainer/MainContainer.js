import React, {Component} from "react"

import { Link } from "react-router-dom"

import "./MainContainer.css"

class MainContainer extends Component {
    render(){
        return(
            <div>
                {this.props.movies
                ? (
                    <div>
                    {
                        this.props.movies.map(movie => 
                            
                            
                             <div class="column">        
                                <Link to={`/movies/${movie.id}`}><img class="main" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                                </Link>
                                </div>
                                                                                    
                        )
                    }
                    </div>
                )
                :(
                    <h1></h1>
                )
                }
            </div>            
        )           
    }  
}

export default MainContainer