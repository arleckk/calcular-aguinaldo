import React from 'react';

const ResultadoAguinaldo = ({sueldo, sueldoDiario, diasTrabajados, diasTrabajadosProporcion, aguinaldo, diasAguinaldo}) => {
    return (
        <div className="card resultado-aguinaldo">
            <div className="card-body">
                <div className="text-center">
                    <h5>${sueldo} / 30 = ${sueldoDiario} </h5>
                    <h6>Sueldo Mensual / Días = Salario Diario</h6>
                    <br /><br />
                    <h5>{diasTrabajados} / 365 = {diasTrabajadosProporcion}</h5>
                    <h6>Días trabajados / Días del año = Proporción</h6>
                    <br /><br />
                    <h5>${sueldoDiario} * {diasAguinaldo} * {diasTrabajadosProporcion} = <b>${aguinaldo}</b> </h5>
                    <h6>Salario Diario * Días de Aguinaldo * Proporción = <b>Aguinaldo Mínimo</b></h6>
                </div>
            </div>
        </div>
    );
}
 
export default ResultadoAguinaldo;