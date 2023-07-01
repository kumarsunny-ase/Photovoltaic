import { Link, NavLink } from "react-router-dom";
import { Button, Container, Dropdown, Image, Menu, MenuItem } from "semantic-ui-react";
import { useStore } from "../ stores/store";
import { observer } from "mobx-react-lite";



export default observer(function NavBar() {
const {userStore: {user, logout}} = useStore()

    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to='/' header>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="logo" style={{marginRight: '10px'}}/>
            Photovoltaic System 
          </Menu.Item>
          <MenuItem as={NavLink} to='/projects' name="Projects" />
          {/* <MenuItem as={NavLink} to='/errors' name="Errors" /> */}
          <MenuItem>
            <Button as={NavLink} to='/createProject' positive content="Create Product" />
          </MenuItem>
          <Menu.Item position="right">
              <Image src={user?.image || '/assets/user.png'} avatar spaced='right' />
              <Dropdown pointing='top left' text={user?.displayName}>
                   <Dropdown.Menu>
                {/* <Dropdown.Item as={Link} to={`/profile/${user?.username}`} text='My Profile' icon='user' /> */}
              <Dropdown.Item onClick={logout} text='Logout' icon='power' />
              </Dropdown.Menu>
              </Dropdown>
          </Menu.Item>
        </Container>
      </Menu>
    );
})