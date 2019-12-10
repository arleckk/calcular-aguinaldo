import React from 'react';

const CalcularBtn = ({calcularAguinaldo}) => {

    return ( 
        <button className="btn btn-primary col-md-4 offset-md-4" name="completo" onClick={calcularAguinaldo}>Calcular</button>
     );
}
 
export default CalcularBtn;