import React from 'react';
import { useIngresarValor } from '../aplicacion/UserProvider';

const Boton = (props) => {

    const ingresarValor = useIngresarValor();

    return (
        <div className={'div' + (props.index + 1)}>
            <button type="button" className="btn" onClick={ingresarValor} value={props.data}>{props.data}</button>
        </div>
    );
};

export default Boton;