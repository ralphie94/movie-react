import React from "react";

import { Menu } from "semantic-ui-react";

import * as routes from "../../constants/routes"


const NavBar = () =>
  <Menu secondary>
    <Menu.Item  href={routes.HOME} to={routes.HOME} activeClassName='active'>HOME</Menu.Item>
    <Menu.Item href={routes.USERS} to={routes.USERS} activeClassName='active'>USERS</Menu.Item>
    <Menu.Item href={routes.POSTS} activeClassName='active'>POSTS</Menu.Item>
    <Menu.Item href={routes.ROOT} exact activeClassName='active'>ROOT</Menu.Item>
  </Menu>

export default NavBar;