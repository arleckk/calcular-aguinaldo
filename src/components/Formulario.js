import React from 'react';

const Formulario = ({fechaIngreso, handleChange}) => {
    const hidden = fechaIngreso;
    return (
        <form className="col-md-8 offset-md-2">
            <label>Ingresa tu sueldo mensual</label>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">$</span>
                </div>
                <input className="form-control" name="sueldo" placeholder="00.00" required="" type="number" onChange={handleChange} />
            </div>
            <div className="form-group">
            <label>Días de aguinaldo (15 mínimo de acuerdo a la ley)</label>
                <input className="form-control" name="diasAguinaldo" placeholder="15" required="" type="number" onChange={handleChange} />
            </div>
            <div className="form-group" hidden={fechaIngreso}>
                <label>Ingrese la fecha en que ingreso a trabajar</label>
                <input className="form-control" name="fechaIngreso" type="date" required="" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>¿Cuántos días faltaste (no cuentes vacaciones) durante el año?</label>
                <input className="form-control" name="faltas" placeholder="0" required="" type="number" onChange={handleChange} />
            </div>
        </form>
    );
}
 
Formulario.defaultProps = {
    fechaIngreso: false
}

export default Formulario;