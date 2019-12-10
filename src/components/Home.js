import React, { Component, Fragment } from 'react';
import Menu from './Menu';
import '../bootstrap.min.css';
import Completo from './Completo';
import Proporcional from './Proporcional';
import CalcularBtn from './CalcularBtn';
import ResultadoAguinaldo from './ResultadoAguinaldo';

const sueldoDiario = 0;
const diasTrabajados = 0;
const diasProporcionAnio = 0;
const aguinaldoFinal = 0;

class Home extends Component {
    
    state = {
        completo: false,
        proporcional: false,
        mostrarAguinaldo: false,
        aguinaldo : {
            sueldo: 0,
            fechaIngreso: null,
            faltas: 0
        }
    }

    mostrarResultado = opcion => {
        if(opcion === 'completo') {
            this.setState({
                ...this.state.aguinaldo,
                completo: true,
                proporcional: false,
                mostrarAguinaldo: false
            });
        } else if(opcion === 'proporcional') {
            this.setState({
                ...this.state.aguinaldo,
                completo: false,
                proporcional: true,
                mostrarAguinaldo: false
            });
        }
    }

    handleChange = (e) => {
        this.setState({
            aguinaldo : {
                ...this.state.aguinaldo,
                [e.target.name] : e.target.value
            }
        });
    }

    calcularAguinaldo = (e) => {
        const finalAnio = new Date();
        const dateIngreso = new Date(this.state.aguinaldo.fechaIngreso);
        finalAnio.setDate(finalAnio.getDate() + this.days_between(finalAnio, new Date("12-31-2019")));
        this.sueldoDiario = this.state.aguinaldo.sueldo / 30;
        this.diasTrabajados = this.state.aguinaldo.fechaIngreso === null ? 365 : this.days_between(dateIngreso, finalAnio)+1;
        this.diasProporcionAnio = Number(((this.diasTrabajados - this.state.aguinaldo.faltas) / 365).toFixed(2));
        this.aguinaldoFinal = this.sueldoDiario * 15 * this.diasProporcionAnio;
        this.setState({
            aguinaldo : {
                ...this.state.aguinaldo
            }, mostrarAguinaldo : true
        });
    }

    days_between(date1, date2) {
        // The number of milliseconds in one day
        const ONE_DAY = 1000 * 60 * 60 * 24;
        // Calculate the difference in milliseconds
        const differenceMs = Math.abs(date1 - date2);
        // Convert back to days and return
        return Math.round(differenceMs / ONE_DAY);
    }

    render() { 
        return ( 
            <div>
                <h1 className="text-center">¿Qué es el aguinaldo?</h1>
                <br />
                <p>El pago de aguinaldo debe realizarse antes del 20 de diciembre. Esta prestación, que en México está prevista en la ley laboral desde 1970, es un pago de carácter obligatorio para los patrones y de recepción irrenunciable para los trabajadores. El pago es equivalente mínimo a 15 días de salario, que a su vez se corresponden a 1 año laborado. Si el trabajador no ha laborado todo el año con el patrón, deberá recibir lo correspondiente a los días que trabajó. Para hacer tanto el cálculo de aguinaldo de lo que toca a quien trabajó todos los días del año así como de quien sólo lo hizo en una parte, sirva este ejemplo.</p>

                <h3 className="text-center">¿Cómo se calcula el aguinaldo?</h3>
                <br />
                <p>El pago de tu aguinaldo debe corresponder, como mínimo, a 15 días de tu sueldo neto, si trabajaste todo el año; y la cantidad proporcional, si trabajaste menos de un año. El punto de partida para calcular tu aguinaldo es tu sueldo neto diario. Si tu sueldo es fijo, el cálculo se hace por día laborado; si tu sueldo es variable, se toma el ingreso promedio diario de los ultimos 30 días.</p> 

                <Menu mostrarResultado={this.mostrarResultado}/>

                <br />
                { this.state.completo === true ? <Completo handleChange={this.handleChange} /> : null }
                { this.state.proporcional === true ? <Proporcional handleChange={this.handleChange} /> : null }

                { this.state.completo === true || this.state.proporcional === true 
                ? <CalcularBtn calcularAguinaldo={this.calcularAguinaldo} /> : null }

                { this.state.mostrarAguinaldo === true ? <ResultadoAguinaldo sueldo={this.state.aguinaldo.sueldo} sueldoDiario={this.sueldoDiario} diasTrabajados={this.diasTrabajados} 
                    diasTrabajadosProporcion = {this.diasProporcionAnio} aguinaldo={this.aguinaldoFinal} /> : null }

            </div>
         );
    }
}
 
export default Home;