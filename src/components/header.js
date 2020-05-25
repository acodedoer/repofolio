import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from '../components/drawer';
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import "../components/layout.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#efeff6',
  },
  appBar: {
      zIndex: '999999999',
      backgroundColor: "rgb(55, 59, 95)",
      
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#efeff6'
  },
}));

function Header(props) {

  const {children} = props
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = <Menu />
  let permanentDrawer = null
  if(props.drawerStyle == 'fixed'){
    permanentDrawer = <Menu />
  }

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
          <Typography noWrap>
            <a id ="pageheader" style={{textDecoration:"none", color:'white'}} href="/">repofolio</a>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
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
              keepMounted: true, 
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
            {permanentDrawer}
          </Drawer>
        </Hidden>
      </nav>
      <main id ="main" className={classes.content}>
        {children}
      </main>
    </div>
  );
}

export default Header;
