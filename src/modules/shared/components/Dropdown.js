import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from '../../../styles/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useAuth0} from '@auth0/auth0-react';
import { Profile } from './Profile';
export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {logout} = useAuth0();
  const {loginWithRedirect} = useAuth0();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () =>
  {
    loginWithRedirect();
    setAnchorEl(null);
    return
  }

  const handleLogout = () =>
  {
    logout({returnTo: 'http://localhost:3000/'});
    setAnchorEl(null);
    return
  }


  const styles = useStyles();
  return (
    <div>
      <Button aria-controls="simple-menu" className={styles.appBarDropdown} aria-haspopup="true" onClick={handleClick}>
        <AccountCircleIcon className={styles.accountCircleIcon} />
        User
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem  className={styles.appBarDropdownMenu} onClick={handleClose}><Profile /></MenuItem>
        <MenuItem  className={styles.appBarDropdownMenu} onClick={handleLogin}>Login</MenuItem>
        <MenuItem  className={styles.appBarDropdownMenu} onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
