import React, { Component, Fragment } from 'react';
import Formulario from './Formulario';

class Completo extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <Formulario fechaIngreso = {true} handleChange={this.props.handleChange} />
            </Fragment>
        );
    }
}
 
export default Completo;