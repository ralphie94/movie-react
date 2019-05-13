import React from 'react'

import MainContainer from "../MainContainer/MainContainer";

const Movies = ({movies}) =>
    <div>
        <h1 id="main">Movie App</h1>               
        <MainContainer 
        movies={movies} 
        // username={username} 
        />   
    </div>

export default Movies
