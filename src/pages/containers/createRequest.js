import React, { Component } from 'react'
import CreateRequestLayout from '../components/createRequestLayout'
import DetailsCreateRequestLayout from './detailsCreateRequest'

class CreateRequest extends Component {
    state = {
        name: '',
        email: '',
        company: '',
        phone: '(   )    -    ',
        city: '',
        state: '',
        zip: '',
    };
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
     };
    render(){
        return(
            <CreateRequestLayout {...this.state} handleChange={this.handleChange} DetailsCreateRequestLayout={DetailsCreateRequestLayout}/>
        )
    }
}
export default CreateRequest