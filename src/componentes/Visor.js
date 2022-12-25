import React from 'react';
/* importo los useContext que se encuentran en provider */
import { useMostrarSubtotal, useMostrarValor, useMostrarOperacion, useMostrarMemoria} from '../aplicacion/UserProvider';

const Visor = () => {

    /* declaro mis constantes para poder asignarlos a lo importado */
    const valor = useMostrarValor();
    const operacion = useMostrarOperacion();
    const subtotal = useMostrarSubtotal();
    const memoria = useMostrarMemoria();

    /* retorno un div que contendra la informacion del display */
    return (
        <div className="resultado mb-3">
            <div id="marca">CASIO</div>
                <div id='contenedorSub'>
                    <div  id="in-memoria">{'Memoria: ' + memoria}</div>
                    <div  id="in-operacion">{'Operacion : ' + operacion.num1 + operacion.op + operacion.num2}</div>    
                    <div className="d-none"  id="in-subtotal" placeholder='0'>{'Subtotal: ' + subtotal}</div>
                </div>
            <label className="form-control mt-3" type='text' name="in-resultado" id="in-resultado">{valor}</label>
        </div>
    );
};

/* NOTA : Tener en cuenta que como aun se encuentra en desarrollo el contenido del div 
    #in-subtotal debera de ser ocultado por css, ya que la idea sera siempre mostrar el resultado total. */

export default Visor;