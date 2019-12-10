import React, { Component } from 'react';
import Proporcional from './Proporcional';
import Completo from './Completo';

class Menu extends Component {
    state = {  }

    handleClick = e => {
        this.props.mostrarResultado(e.target.name);
    }

    render() { 
        return ( 
            <div>
                <button className="btn btn-outline-primary col-md-4 col-sm-4 offset-sm-1" name="completo" onClick={this.handleClick}>Completo</button>
                <button className="btn btn-outline-success col-md-4 col-sm-4 offset-sm-1" name="proporcional" onClick={this.handleClick}>Proporcional</button>
            </div>
         );
    }
}
 
export default Menu;