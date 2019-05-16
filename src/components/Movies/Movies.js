import React from 'react'

import MainContainer from "../MainContainer/MainContainer";


const Movies = ({movies}) =>
    <div>

        <h1 id="main">CineFile</h1>    
        <MainContainer 
            movies={movies}  
        />   
    </div>

export default Movies
