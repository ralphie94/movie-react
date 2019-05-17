import React from 'react'

import MainContainer from "../MainContainer/MainContainer";

import "./Movies.css"


const Movies = ({movies}) =>
    <div>

        <h1 id="main">CineFile</h1>    
        <MainContainer 
            movies={movies}  
        />   
    </div>

export default Movies
