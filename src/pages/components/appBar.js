import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {  BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import  createBrowserHistory from 'history/createBrowserHistory';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  noTextDeco: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  }
});



function ButtonAppBar(props) {
  const { classes } = props;
  return (
    
        
            <div className={classes.root}>
              <AppBar position="static" color="primary">
                <Toolbar>
                  <Typography variant="title" color="inherit" className={classes.flex}>
                    <Link to="/" className={classes.noTextDeco}>Awning Recover</Link>
                  </Typography>
                    <div>
                      <Button component={Link} to="/contact">
                        Contact
                      </Button>
                    </div>
                </Toolbar>
              </AppBar>
            </div>

    
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);