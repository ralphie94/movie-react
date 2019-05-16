import React, { Component } from "react";

class Edit extends Component {
    state = {
        username: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateUser = async (e) => {
        e.preventDefault();
        const updatedUser = await fetch(`/users/${this.props.match.params.id}`, {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify({ username: this.state.username }),
            headers: {
                "Content-type": "application/json"
            }
        });
        const updateUserJson = await updatedUser.json()
        this.props.doSetCurrentUser(updateUserJson.updateUser)
    }

    render(){
        return(
            <form onSubmit={(e) => this.updateUser(e)} class="ui form">
            <h1>Edit Info</h1>
                <input onChange={this.changeHandler} type="text" name="username" id="loginforms" placeholder="Username"></input><br/>
                <button type="submit" class="ui secondary button" value="Submit" >Update</button>
            </form>
        )
    }
}

export default Edit;