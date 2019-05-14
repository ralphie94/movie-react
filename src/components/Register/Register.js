import React, { Component } from "react"

class Register extends Component {
    render(){
        return (
            
            <form>
                <h1>Register Page</h1>
                <input type="text" name="username" placeholder="Username"/><br/>
                <input type="password" name="password" placeholder="Password"/><br/>
                <input type="text" name="email" placeholder="Email"/><br/>
                <button type="submit" class="ui secondary button" value="Submit">Register</button>
            </form>
            
        )
    }
}

export default Register;