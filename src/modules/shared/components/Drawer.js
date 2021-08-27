import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemText} from '@material-ui/core';
import Dropdown from './Dropdown';
import {Link} from 'react-router-dom'
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: 
    {
        display: 'flex',
    },
    appBar: 
    {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: "#2d3c48",
        color: "white",
    },
    drawer: 
    {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: 
    {
        width: drawerWidth,
        backgroundColor: "#2d3c48",
        color: "white"
    },
  // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar, 
    content: 
    {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    cleaning:
    {
      textDecoration: "none",
      color: "white",
    }
}));

export const ComponentDrawer = () => 
{
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <Dropdown />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left">
        <div className={classes.toolbar}>
            <Typography variant="h6" align="center">
                CRUD
            </Typography>    
        </div>
        <Divider />
        <List>
          <Link to="/tasks">
          {['Tasks'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} className={classes.cleaning} />
            </ListItem>
          ))}
          </Link>
        </List>
        <Divider />
      </Drawer>

    </div>
  );
}

