import React, { Component } from "react";
import { withRouter} from "react-router-dom"

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
        const updatedUser = await fetch(`/users/${this.props.currentUser._id}`, {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify({ username: this.state.username }),
            headers: {
                "Content-type": "application/json"
            }
        });
        const updateUserJson = await updatedUser.json()
        this.props.doSetCurrentUser(updateUserJson.updateUser)
        this.props.history.push("/")
    }

    render(){
        return(
            <form onSubmit={(e) => this.updateUser(e)} class="ui form">
            <h1 id="login">Edit Info</h1>
                <input onChange={this.changeHandler} type="text" name="username" id="loginforms" placeholder="Username" value={this.state.username}></input><br/>
                <button type="submit" class="ui secondary button" value="Submit" >Update</button>
            </form>
        )
    }
}

export default withRouter(Edit);