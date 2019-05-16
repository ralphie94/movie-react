import React, { Component } from "react";

import { Menu, Input } from "semantic-ui-react";

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
            <Menu secondary>
            <Menu.Item href={routes.HOME} to={routes.HOME} >HOME</Menu.Item>
            <Menu.Item href={routes.USERS} to={routes.USERS} >USERS</Menu.Item>
            {
                this.props.currentUser && <Menu.Item href={`${routes.PROFILE}/${this.props.currentUser._id}`} >PROFILE</Menu.Item>
            }
            <Menu.Item>
                <form onSubmit={this.handleSubmit}>
                    <Input icon="search" placeholder="Search..." name='searchInput' value={this.state.searchInput} onChange={this.handleInput}/>
                </form>
            </Menu.Item>
             
            <Menu.Item position="right" href={routes.LOGIN}  >Login</Menu.Item>
            <Menu.Item href={routes.REGISTER} >Register</Menu.Item>
            
          </Menu>
        )
    }
}


export default NavBar;