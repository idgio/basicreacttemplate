import React, { Component } from 'react'
import DetailsCreateRequestLayout from '../components/detailsCreateRequestLayout'

class DetailsCreateRequest extends Component {
    state = {
    open: false,
    openInner: false,
    imageSrc: null,
    imageTitle: null,
  };
  //----------------------------------------
  handleClickOpenInner = (image,e) => {
    this.setState({
      openInner: true,
      imageSrc: image.src,
      imageTitle: image.title,
    });
  };
  
  handleCloseInner = value => {
    this.setState({  openInner: false });
  };
  //----------------------------
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
   };
    render(){
        return(
            <DetailsCreateRequestLayout {...this.state} onClose={this.handleClose} onOpen={this.handleClickOpen} handleChange={this.handleChange} handleClickOpenInner={this.handleClickOpenInner} handleCloseInner={this.handleCloseInner}  />
        )
    }
}
export default DetailsCreateRequest