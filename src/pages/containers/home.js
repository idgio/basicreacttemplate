import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import AppBar from '../components/appBar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {  BrowserRouter as Router, Route } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffce',
      main: '#e6ee9c',
      dark: '#b3bc6d',
      contrastText: '#000000',
    },
    secondary: {
      light: '#e6ceff',
      main: '#b39ddb',
      dark: '#836fa9',
      contrastText: '#000000',
    },
  },
});
const About = () => (
  <div>
    <h2>Contact</h2>
  </div>
);

class Home extends Component {
    state = {
      open: false,
      imageSrc: null,
      imageTitle: null,
    };
  
    handleClickOpen = (image,e) => {
      this.setState({
        open: true,
        imageSrc: image.src,
        imageTitle: image.title,
      });
    };
  
    handleClose = value => {
      this.setState({  open: false });
    };
    render(){
        return(
        <MuiThemeProvider theme={theme}>
            <Router>
                <div>
                    <AppBar />
                    <main >
                        <Route exact path="/" render={()=><HomeLayout {...this.state}  onClose={this.handleClose}  onClick={this.handleClickOpen}/>}  />
                        <Route path="/contact" component={About} />
                    </main>
                </div>
            </Router>
        </MuiThemeProvider>
        )
    }
}

export default Home