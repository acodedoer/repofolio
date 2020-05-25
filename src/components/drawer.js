import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {icons} from '../components/icons'
import "../components/layout.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

function Menu(props) {
  const classes = useStyles();
  const levels = ['Newbie', 'Basic', 'Intermediary', 'Advanced', 'Expert']
  const tags = ['Games', 'Productivity', 'SPA', 'Static-Page', 'Full-Site']
  const types = ['FrontEnd', 'API-Consuming', 'BackEnd', 'FullStack', 'Plugin', 'CLI-APP']
  return(
                <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
          <List>
            {levels.map((text, index) => (
              <a href = {`/${text.toLowerCase()}`} style={{textDecoration:"none", color:'black'}}>
              <ListItem button key={text}>
              <ListItemIcon>{icons[text.toLowerCase()]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </a>
            ))}
          </List>
          <Divider />
          <List>
            {tags.map((text, index) => (
               <a href = {`/${text.toLowerCase()}`} style={{textDecoration:"none", color:'black'}}>
              <ListItem button key={text}>
                <ListItemIcon>{icons[text.toLowerCase()]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
              </a>
            ))}
          </List>
          <Divider />
          <List>
            {types.map((text, index) => (
               <a href = {`/${text.toLowerCase()}`} style={{textDecoration:"none", color:'black'}}>
              <ListItem button key={text}>
                <ListItemIcon>{icons[text.toLowerCase()]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
              </a>
            ))}
          </List>
          </Drawer>
  )
}

export default Menu;
