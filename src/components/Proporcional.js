import React, { Component, Fragment } from 'react';
import Formulario from './Formulario';

class Proporcional extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <Formulario handleChange={this.props.handleChange} />
            </Fragment>
         );
    }
}
 
export default Proporcional;