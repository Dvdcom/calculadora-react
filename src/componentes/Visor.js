import React from 'react';
import { useMostrarSubtotal, useMostrarValor, useMostrarOperacion} from '../aplicacion/UserProvider';

const Visor = () => {

    const valor = useMostrarValor();
    const operacion = useMostrarOperacion();
    const subtotal = useMostrarSubtotal();

    return (
        <div className="resultado mb-3">
        <div id="marca">CASIO</div>
        <div id='contendoSub'>
            <label type='text' name="in-operacion" id="in-operacion" placeholder='0'>{'operacion : ' + operacion.num1 + operacion.op + operacion.num2}</label>    
            <label type='text' name="in-subtotal" id="in-subtotal" placeholder='0'>{'el subtotal es : ' + subtotal}</label>
        </div>
        
        <label className="form-control mt-3" type='text' name="in-resultado" id="in-resultado" placeholder='Su resultado es...'>{valor}</label>
    </div>
    );
};

export default Visor;