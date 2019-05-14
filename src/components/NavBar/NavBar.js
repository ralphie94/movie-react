import React from "react";

import { Menu } from "semantic-ui-react";

import * as routes from "../../constants/routes"



const NavBar = ({currentUser}) =>
  <Menu secondary>
    <Menu.Item  href={routes.HOME} to={routes.HOME} activeClassName='active'>HOME</Menu.Item>
    <Menu.Item href={routes.USERS} to={routes.USERS} activeClassName='active'>USERS</Menu.Item>
    <Menu.Item href={routes.POSTS} activeClassName='active'>POSTS</Menu.Item> 
    {
        currentUser
    ? <span></span>  
    : <Menu.Item position="right" href={routes.LOGIN} exact activeClassName='active'>Login</Menu.Item>
    }
    <Menu.Item position="right" href={routes.REGISTER} activeClassName='active'>Register</Menu.Item>
  </Menu>

export default NavBar;