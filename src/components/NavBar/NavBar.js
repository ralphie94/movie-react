import React, { Component } from "react";

import { Menu, Input } from "semantic-ui-react";

import { Link } from "react-router-dom"

import "./NavBar.css";

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
             <Menu secondary>
            <Link to={routes.HOME} className="active">Home</Link>
            {
                this.props.currentUser && <Link to={routes.USERS} className="active">Edit Info</Link>
            }
            {
                this.props.currentUser && <Link to={`${routes.PROFILE}/${this.props.currentUser._id}`} className="active">Profile</Link>
            }             
            <Link position="right" to={routes.LOGIN} className="active">Login</Link>
            <Link to={routes.REGISTER} className="active">Register</Link>
            <Link>
                <form onSubmit={this.handleSubmit} autoComplete="off" className="search">
                    <Input icon="search" placeholder="Search..." name='searchInput' value={this.state.searchInput} onChange={this.handleInput}/>
                </form>
            </Link>
            </Menu>
          </div>  
          
        )
    }
}


export default NavBar;