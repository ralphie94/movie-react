import React, { Component } from "react"

import { Redirect } from "react-router-dom";

class Login extends Component {

    state = {
        username: "",
        password: "",
        logged: false
    }

    handleSubmit = async (e) =>{
        e.preventDefault()
        const loginResponse = await fetch ("/users/login", {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers:{
                "Content-type" : 'application/json'
            }
        })
        const parsedResponse = await loginResponse.json();
        if(parsedResponse.success) {
            this.props.doSetCurrentUser(parsedResponse.user)
        }
    }

    handleChange = (e) => {
        this.setState ({[e.currentTarget.name] : e.currentTarget.value})
    }

    render(){
        const { username, password } = this.state
        console.log(this.props)
        return(
            this.props.currentUser
            ? <Redirect to={`/`} />
            : <form onSubmit={this.handleSubmit} class="ui form">
            <h1 id="login">Login</h1>
                <input type="text" name="username" id="loginforms" placeholder="Username" value={username} onChange={this.handleChange} /><br/>
                <input type="text" name="password" id="loginforms" placeholder="Password" value={password} onChange={this.handleChange} /><br/>
                <button type="submit" class="ui secondary button" value="Submit">Login</button>
            </form>
        )
    }
}

export default Login;