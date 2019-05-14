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
            <Menu.Item  href={routes.HOME} to={routes.HOME} activeClassName='active'>HOME</Menu.Item>
            <Menu.Item href={routes.USERS} to={routes.USERS} activeClassName='active'>USERS</Menu.Item>
            <Menu.Item href={routes.PROFILE} activeClassName='active'>PROFILE</Menu.Item> 
            <Menu.Item>
                <form onSubmit={this.handleSubmit}>
                    <Input icon="search" placeholder="Search..." name='searchInput' value={this.state.searchInput} onChange={this.handleInput}/>
                </form>
            </Menu.Item>
             
            <Menu.Item position="right" href={routes.LOGIN} exact activeClassName='active'>Login</Menu.Item>
            
          </Menu>
        )
    }
}


export default NavBar;