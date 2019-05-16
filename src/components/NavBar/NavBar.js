import React, { Component } from "react";

import { Input } from "semantic-ui-react";

import { Link } from "react-router-dom"

import * as routes from "../../constants/routes"



class NavBar extends Component {
    state = {
        searchInput: ''
    }

    handleInput = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.update(this.state.searchInput)
    }

    render(){

        return(
         <div>
            <Link  to={routes.HOME} >Home</Link>
            {
                this.props.currentUser && <Link to={routes.USERS} >Edit Info</Link>
            }
            {
                this.props.currentUser && <Link to={`${routes.PROFILE}/${this.props.currentUser._id}`} >Profile</Link>
            }
            <Link>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <Input icon="search" placeholder="Search..." name='searchInput' value={this.state.searchInput} onChange={this.handleInput}/>
                </form>
            </Link>
             
            <Link position="right" to={routes.LOGIN}>Login</Link>
            <Link to={routes.REGISTER} >Register</Link>
          </div>  
          
        )
    }
}


export default NavBar;