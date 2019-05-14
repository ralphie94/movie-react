import React, { Component } from "react";

class Profile extends Component {

    componentDidMount(){

    }

    postMovie = async (movie) => {
        try {
            const post = await fetch("/users/add", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(movie),
                headers:{
                    "Content-Type" : "application/json"
                }
            })
            const postResponse = await post.json();
            return postResponse

        } catch(err){
            console.log(err)
        }
    }
    
    render(){
        return (
            <h1>Watch List</h1>
        )
    }
}

export default Profile;