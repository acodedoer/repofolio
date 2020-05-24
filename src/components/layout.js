import { useStaticQuery, graphql } from "gatsby"
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {icons} from '../components/icons'
import "../components/layout.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#efeff6',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
      paddingLeft: '1rem',
      width: `100vw`,
      zIndex: '999999999',
      marginLeft: drawerWidth,
      backgroundColor: "rgb(55, 59, 95)",
      height: '4rem',
      
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      color: 'white'
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#efeff6'
  },
}));

function Layout(props) {
  
  const {children} = props

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        types: distinct(field: frontmatter___types)
        tags: distinct(field: frontmatter___tags)
        levels: distinct(field: frontmatter___levels)
      }
    }
  `)

  const {tags, levels, types} = data.allMarkdownRemark;
  

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
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
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
            <a id ="pageheader" style={{textDecoration:"none", color:'white'}} href="/">repofolio</a>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main id ="main" className={classes.content}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
