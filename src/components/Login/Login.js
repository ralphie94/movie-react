import React, { Component } from "react"

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.login(this.state.username);
    }

    handleChange = (e) => {
        this.setState ({[e.currentTarget.name] : e.currentTarget.value})
    }

    render(){
        const { username, password } = this.state
        return(
            <form onSubmit={this.handleSubmit} class="ui form">
            <h1 id="login">Login</h1>
                <input type="text" name="username" id="loginforms" placeholder="Username" value={username} onChange={this.handleChange} /><br/>
                <input type="text" name="password" id="loginforms" placeholder="Password" value={password} onChange={this.handleChange} /><br/>
                <button type="submit" class="ui secondary button" value="Submit">Login</button>
            </form>
        )
    }
}

export default Login;